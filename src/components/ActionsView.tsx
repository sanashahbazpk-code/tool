import React, { useState } from 'react';
import { ActionPlanItem, AuditReport } from '../types/seo';
import { AlertCircle, CheckCircle, Flame, Zap, Sparkles, Filter, ChevronRight } from 'lucide-react';

interface ActionsViewProps {
  report: AuditReport;
}

export const ActionsView: React.FC<ActionsViewProps> = ({ report }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const p0 = report.action_plan?.high_impact || [];
  const p1 = report.action_plan?.quick_wins || [];
  const p2 = report.action_plan?.nice_to_have || [];

  const filterItem = (item: ActionPlanItem) => {
    if (selectedCategory === 'all') return true;
    return item.category.toLowerCase() === selectedCategory.toLowerCase();
  };

  const filteredP0 = p0.filter(filterItem);
  const filteredP1 = p1.filter(filterItem);
  const filteredP2 = p2.filter(filterItem);

  const totalFiltered = filteredP0.length + filteredP1.length + filteredP2.length;

  const renderSection = (
    title: string,
    subtitle: string,
    items: ActionPlanItem[],
    icon: React.ReactNode,
    badgeBg: string,
    badgeText: string,
    containerBorder: string,
    accentGlow: string
  ) => {
    if (items.length === 0) return null;

    return (
      <div className={`bg-white border rounded-2xl p-5 sm:p-6 shadow-xs ${containerBorder} space-y-4`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl ${badgeBg} ${accentGlow}`}>
              {icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                  {title}
                </h3>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${badgeBg} text-slate-800`}>
                  {items.length} {badgeText}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3.5">
          {items.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 sm:p-4.5 hover:border-slate-300 transition"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-blue-50 text-blue-700 border border-blue-200">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white border border-slate-200">
                  Weight: {item.weight}
                </span>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              </div>

              <div className="mb-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-rose-600 mr-1.5">Problem:</span>
                {item.problem}
              </div>

              {item.action && (
                <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl text-xs sm:text-sm leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-emerald-800 shrink-0 uppercase tracking-wider text-[11px] bg-emerald-100 px-1.5 py-0.5 rounded">
                      Fix
                    </span>
                    <span className="text-slate-800">{item.action}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-600" />
            Prioritized Action Plan
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Engineered sequence of fixes ordered by organic ranking impact, quick ROI, and LLM visibility.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 shrink-0" />
          {['all', 'technical', 'seo', 'content', 'aeo', 'geo'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider transition cursor-pointer select-none ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {totalFiltered === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-xs">
          <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900">
            No Critical Issues Detected
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            This category has zero unresolved priority warnings. Excellent foundation!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* P0 High Impact */}
          {renderSection(
            'P0 — High-Impact Failures (Immediate Fixes)',
            'These critical failures directly suppress crawl efficiency, indexing, or LLM quotation.',
            filteredP0,
            <Flame className="w-5 h-5 text-rose-600" />,
            'bg-rose-50 border border-rose-200',
            'Critical Items',
            'border-rose-200/80',
            'shadow-xs'
          )}

          {/* P1 Quick Wins */}
          {renderSection(
            'P1 — Quick Wins (High ROI / Low Effort)',
            'High-leverage structural adjustments, snippet alignments, and schema additions.',
            filteredP1,
            <Zap className="w-5 h-5 text-amber-600" />,
            'bg-amber-50 border border-amber-200',
            'Quick Wins',
            'border-amber-200/80',
            'shadow-xs'
          )}

          {/* P2 Nice to Have */}
          {renderSection(
            'P2 — Strategic Enhancements',
            'Secondary optimizations to solidify long-term brand authority and entity depth.',
            filteredP2,
            <Sparkles className="w-5 h-5 text-blue-600" />,
            'bg-blue-50 border border-blue-200',
            'Enhancements',
            'border-blue-200/80',
            'shadow-xs'
          )}
        </div>
      )}
    </div>
  );
};
