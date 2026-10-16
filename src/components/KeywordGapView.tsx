import React, { useState } from 'react';
import { AuditReport, KeywordGapItem } from '../types/seo';
import { Target, TrendingUp, Sparkles, Copy, Check, Filter, DollarSign } from 'lucide-react';

interface KeywordGapViewProps {
  report: AuditReport;
}

export const KeywordGapView: React.FC<KeywordGapViewProps> = ({ report }) => {
  const [selectedIntent, setSelectedIntent] = useState<string>('all');
  const [onlyLowHanging, setOnlyLowHanging] = useState<boolean>(false);
  const [copiedKw, setCopiedKw] = useState<string | null>(null);

  const gaps: KeywordGapItem[] = report.keyword_gap || [];

  const handleCopy = (kw: string) => {
    navigator.clipboard.writeText(kw);
    setCopiedKw(kw);
    setTimeout(() => setCopiedKw(null), 1800);
  };

  const filteredGaps = gaps.filter((item) => {
    if (onlyLowHanging && !item.is_low_hanging_fruit) return false;
    if (selectedIntent !== 'all' && item.intent !== selectedIntent) return false;
    return true;
  });

  const totalVol = gaps.reduce((acc, curr) => acc + curr.search_volume, 0);
  const lowHangingCount = gaps.filter((g) => g.is_low_hanging_fruit).length;
  const transactionalCount = gaps.filter((g) => g.intent === 'transactional').length;

  return (
    <div className="space-y-6">
      {/* View Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Target className="w-5 h-5 text-emerald-600" />
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Competitor Keyword Gap Analysis
          </h2>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            {gaps.length} Untapped Keywords
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
          High-value search queries where your direct competitors rank on Google Page 1, but your website has no dedicated content or ranking authority.
        </p>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[11px]">Untapped Search Volume</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900 font-mono">
            {totalVol.toLocaleString()} / mo
          </div>
          <span className="text-[11px] text-slate-400 mt-0.5 block">Estimated monthly search traffic opportunity</span>
        </div>

        <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-xs text-amber-800 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[11px]">Low-Hanging Fruits (Fast Wins)</span>
            <Sparkles className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-black text-amber-800 font-mono">
            {lowHangingCount} Keywords
          </div>
          <span className="text-[11px] text-amber-700/80 mt-0.5 block">Keyword Difficulty &lt; 30 with weak competition</span>
        </div>

        <div className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-xs text-blue-800 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[11px]">High-Intent Money Keywords</span>
            <DollarSign className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-black text-blue-800 font-mono">
            {transactionalCount} Transactional
          </div>
          <span className="text-[11px] text-blue-700/80 mt-0.5 block">Direct purchase or quote intent searchers</span>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-400 text-[11px] font-bold uppercase mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Intent:
          </span>
          {[
            { id: 'all', label: 'All Keywords' },
            { id: 'transactional', label: '💰 Transactional (Money)' },
            { id: 'commercial', label: '🛒 Commercial' },
            { id: 'informational', label: '💡 Informational' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSelectedIntent(btn.id)}
              className={`px-3 py-1.5 rounded-xl text-xs transition cursor-pointer select-none font-semibold ${
                selectedIntent === btn.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-amber-900 font-semibold bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
          <input
            type="checkbox"
            checked={onlyLowHanging}
            onChange={(e) => setOnlyLowHanging(e.target.checked)}
            className="rounded border-amber-300 text-amber-600 focus:ring-0"
          />
          <span>🎯 Show Low-Hanging Fruits Only</span>
        </label>
      </div>

      {/* Untapped Keywords Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4">Untapped Keyword</th>
              <th className="py-3 px-3">Intent</th>
              <th className="py-3 px-3">Search Volume</th>
              <th className="py-3 px-3">Your Rank</th>
              <th className="py-3 px-3">Competitor Rank</th>
              <th className="py-3 px-3">Difficulty (KD)</th>
              <th className="py-3 px-4">Opportunity Action</th>
              <th className="py-3 px-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredGaps.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-slate-400">
                  No keywords match the selected filter.
                </td>
              </tr>
            ) : (
              filteredGaps.map((item, idx) => {
                const isCopied = copiedKw === item.keyword;

                return (
                  <tr key={idx} className="hover:bg-slate-50/80 transition">
                    <td className="py-3.5 px-4 font-mono font-medium text-slate-900">
                      <div className="flex items-center gap-2">
                        {item.is_low_hanging_fruit && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                            🎯 Easy
                          </span>
                        )}
                        <span>{item.keyword}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          item.intent === 'transactional'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : item.intent === 'commercial'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-purple-50 text-purple-700 border border-purple-200'
                        }`}
                      >
                        {item.intent}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-bold text-slate-900">
                      {item.search_volume.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-3 font-mono">
                      {item.your_rank ? (
                        <span className="text-amber-600 font-bold">#{item.your_rank}</span>
                      ) : (
                        <span className="text-rose-600 font-bold text-[11px] uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                          Unranked
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 font-mono text-emerald-700 font-bold">
                      #{item.competitor_rank}{' '}
                      <span className="text-[10px] text-slate-400 block font-sans">
                        ({item.competitor_domain})
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-mono">
                      <span
                        className={`font-bold ${
                          item.difficulty < 20
                            ? 'text-emerald-600'
                            : item.difficulty < 35
                            ? 'text-amber-600'
                            : 'text-rose-600'
                        }`}
                      >
                        {item.difficulty}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-600 leading-relaxed max-w-xs">
                      {item.opportunity_action}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <button
                        onClick={() => handleCopy(item.keyword)}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-[11px] text-blue-600 font-semibold transition cursor-pointer"
                        title="Copy keyword"
                      >
                        {isCopied ? (
                          <span className="text-emerald-600 font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" /> Copied
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy className="w-3 h-3" /> Copy
                          </span>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
