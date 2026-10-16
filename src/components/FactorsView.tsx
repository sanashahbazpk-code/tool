import React from 'react';
import { AuditReport, FactorVerdict } from '../types/seo';
import { Award, Check, X, Minus, HelpCircle } from 'lucide-react';

interface FactorsViewProps {
  report: AuditReport;
}

export const FactorsView: React.FC<FactorsViewProps> = ({ report }) => {
  const factors = report.rank_factors || [];

  const getVerdictBadge = (verdict: FactorVerdict) => {
    switch (verdict) {
      case 'they-win':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
            <X className="w-3.5 h-3.5" />
            Competitors Outperform
          </span>
        );
      case 'you-win':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Check className="w-3.5 h-3.5" />
            You Outperform
          </span>
        );
      case 'mixed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <Minus className="w-3.5 h-3.5" />
            Parity / Mixed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5" />
            Evaluation Inconclusive
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600" />
          Ranking Drivers &amp; Competitor Advantage Analysis
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Granular comparison analyzing why leading industry domains secure top SERP positions and how your site stacks up.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {factors.map((factor, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:border-slate-300 transition shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5 pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="text-xs uppercase font-extrabold px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  {factor.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">{factor.title}</h3>
              </div>
              <div>{getVerdictBadge(factor.verdict)}</div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1 text-[10px]">
                  Observed SERP Evidence
                </span>
                <p className="text-slate-800 leading-relaxed">{factor.evidence}</p>
              </div>

              <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200/80">
                <span className="font-bold text-emerald-800 uppercase tracking-wider block mb-1 text-[10px]">
                  Recommended Counter-Strategy
                </span>
                <p className="text-slate-800 leading-relaxed font-medium">{factor.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
