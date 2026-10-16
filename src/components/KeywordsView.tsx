import React, { useState } from 'react';
import { AuditReport } from '../types/seo';
import { Search, Copy, Check, Sparkles } from 'lucide-react';

interface KeywordsViewProps {
  report: AuditReport;
}

export const KeywordsView: React.FC<KeywordsViewProps> = ({ report }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const keywordIdeas = report.keyword_ideas || {};
  const seedQueries = Object.keys(keywordIdeas);

  const handleCopySingle = (kw: string) => {
    navigator.clipboard.writeText(kw);
    setCopiedKey(kw);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const handleCopyGroup = (seed: string, keywords: string[]) => {
    const text = keywords.join('\n');
    navigator.clipboard.writeText(text);
    setCopiedKey(seed);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <Search className="w-5 h-5 text-blue-600" />
          Long-Tail Keyword Opportunities
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          High-intent long-tail search queries gathered directly from Google Autocomplete based on seed phrases found in your page titles and headings.
        </p>
      </div>

      {seedQueries.length === 0 ? (
        <div className="p-8 text-center bg-white border border-slate-200/80 rounded-2xl text-xs text-slate-500 shadow-xs">
          No keyword autocomplete ideas available for this audit.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {seedQueries.map((seed) => {
            const list = keywordIdeas[seed] || [];
            const isGroupCopied = copiedKey === seed;

            return (
              <div
                key={seed}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:border-slate-300 transition shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3.5 pb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <h3 className="text-sm font-bold text-slate-900 capitalize break-all">{seed}</h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {list.length}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyGroup(seed, list)}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1.5 transition cursor-pointer"
                    >
                      {isGroupCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isGroupCopied ? 'Copied' : 'Copy All'}</span>
                    </button>
                  </div>

                  <ul className="space-y-1.5">
                    {list.map((kw, idx) => {
                      const isItemCopied = copiedKey === kw;
                      return (
                        <li
                          key={idx}
                          onClick={() => handleCopySingle(kw)}
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-50/70 hover:bg-blue-50/50 border border-transparent hover:border-blue-200 text-xs text-slate-800 transition cursor-pointer group"
                        >
                          <span className="font-mono text-xs">{kw}</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-blue-600 flex items-center gap-1 font-semibold">
                            {isItemCopied ? (
                              <span className="text-emerald-600 font-bold">Copied!</span>
                            ) : (
                              <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
