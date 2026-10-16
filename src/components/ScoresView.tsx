import React from 'react';
import { AuditReport } from '../types/seo';
import { CheckCircle2, AlertTriangle, XCircle, Info, ArrowRight, ShieldCheck } from 'lucide-react';
import { ViewTab } from './NavigationTabs';

interface ScoresViewProps {
  report: AuditReport;
  onNavigateToView: (view: ViewTab) => void;
}

export const ScoresView: React.FC<ScoresViewProps> = ({
  report,
  onNavigateToView,
}) => {
  const getScoreColor = (val: number) => {
    if (val >= 80) return 'text-emerald-600';
    if (val >= 60) return 'text-amber-600';
    return 'text-rose-600';
  };

  const getScoreBg = (val: number) => {
    if (val >= 80) return 'bg-emerald-500';
    if (val >= 60) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  const checksPass = report.checks.filter((c) => c.status === 'pass').length;
  const checksWarn = report.checks.filter((c) => c.status === 'warn').length;
  const checksFail = report.checks.filter((c) => c.status === 'fail').length;
  const checksInfo = report.checks.filter((c) => c.status === 'info' || c.status === 'skip').length;

  const scoreCards = [
    {
      title: 'SEO Score',
      score: report.scores.seo.score,
      grade: report.scores.seo.grade,
      description: 'Readiness to rank on Google (keywords, technical health, meta tags, and links)',
      tag: 'Google Search & Indexing',
    },
    {
      title: 'AEO Score',
      score: report.scores.aeo.score,
      grade: report.scores.aeo.grade,
      description: 'Readiness for Google Featured Snippets, People Also Ask boxes & voice answers',
      tag: 'Answer Engines & Voice',
    },
    {
      title: 'GEO Score',
      score: report.scores.geo.score,
      grade: report.scores.geo.grade,
      description: 'Readiness to be quoted and cited by ChatGPT, Perplexity, Claude & Gemini',
      tag: 'Generative AI Citations',
    },
    {
      title: 'Overall Score',
      score: report.scores.overall.score,
      grade: report.scores.overall.grade,
      description: 'Unified composite readiness index across classical search and generative AI engines',
      tag: `${report.checks.length} checks evaluated`,
    },
  ];

  return (
    <div className="space-y-7 animate-in fade-in duration-200">
      {/* Target Domain Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
            Audited URL Target
          </span>
          <h2 className="text-lg font-bold text-slate-900 break-all font-mono">
            {report.target}
          </h2>
        </div>
        <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto font-medium">
          Generated: <span className="text-slate-800 font-mono font-bold">{report.generated_at}</span>
        </div>
      </div>

      {/* 4 Score Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {scoreCards.map((card) => {
          const colorClass = getScoreColor(card.score);
          const bgClass = getScoreBg(card.score);

          return (
            <div
              key={card.title}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {card.title}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {card.tag}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-4xl font-black tracking-tight ${colorClass}`}>
                    {card.score}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    / 100 · Grade {card.grade}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-[1px]">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${bgClass}`}
                    style={{ width: `${Math.min(100, Math.max(0, card.score))}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Checks Status Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900 font-mono">{checksPass}</div>
            <div className="text-xs font-semibold text-slate-500">Passed Checks</div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900 font-mono">{checksWarn}</div>
            <div className="text-xs font-semibold text-slate-500">Warnings</div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900 font-mono">{checksFail}</div>
            <div className="text-xs font-semibold text-slate-500">Critical Issues</div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900 font-mono">{checksInfo}</div>
            <div className="text-xs font-semibold text-slate-500">Informational &amp; N/A</div>
          </div>
        </div>
      </div>

      {/* Immediate Priorities Teaser */}
      {report.action_plan?.high_impact && report.action_plan.high_impact.length > 0 && (
        <div className="bg-white border border-rose-200 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Top Priorities ({report.action_plan.high_impact.length} Critical Issues Detected)
              </h3>
            </div>
            <button
              onClick={() => onNavigateToView('actions')}
              className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 transition cursor-pointer"
            >
              <span>View Full Action Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {report.action_plan.high_impact.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-rose-100 text-rose-800 border border-rose-200">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-slate-900">{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600">{item.problem}</p>
                </div>
                <button
                  onClick={() => onNavigateToView('actions')}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline text-left sm:text-right shrink-0"
                >
                  View Solution →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
