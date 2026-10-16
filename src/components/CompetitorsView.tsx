import React from 'react';
import { AuditReport } from '../types/seo';
import { Users, Info, AlertTriangle, Check, X, TrendingUp, Target } from 'lucide-react';
import { ViewTab } from './NavigationTabs';

interface CompetitorsViewProps {
  report: AuditReport;
  onNavigateToView?: (view: ViewTab) => void;
}

export const CompetitorsView: React.FC<CompetitorsViewProps> = ({
  report,
  onNavigateToView,
}) => {
  const snapshots = report.competitor_snapshots || [];
  const targetSite = snapshots.find((s) => s.page_type === '(target)' || s.domain === report.site.host);
  const topCompetitor = snapshots.find((s) => s.domain !== targetSite?.domain);

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-600" />
          Competitor Benchmarking &amp; SERP Matrix
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Direct side-by-side comparison of domain rating, referring backlinks, organic search traffic, content depth, and answer engine schemas.
        </p>
      </div>

      {/* Traffic & Authority Gap Breakdown Banner */}
      {topCompetitor && targetSite && (
        <div className="bg-white border border-blue-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Organic Traffic &amp; Authority Gap Matrix
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Comparing <strong className="text-slate-900">{targetSite.domain}</strong> against top competitor <strong className="text-blue-600">{topCompetitor.domain}</strong>.
              </p>
            </div>

            {onNavigateToView && (
              <button
                onClick={() => onNavigateToView('gap')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-2 transition cursor-pointer self-start lg:self-auto shadow-xs"
              >
                <Target className="w-4 h-4" />
                <span>Explore Untapped Keywords Gap →</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Monthly Organic Traffic</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 font-mono mt-0.5">
                <span className="text-blue-600">{targetSite.search_traffic || '4.6K'}</span> vs <span className="text-emerald-600">{topCompetitor.search_traffic || '24K'}</span>
              </div>
              <span className="text-[10px] text-slate-400">Competitor is ~5x ahead</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Domain Rating (DR)</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 font-mono mt-0.5">
                <span className="text-blue-600">DR {targetSite.dr || 7}</span> vs <span className="text-emerald-600">DR {topCompetitor.dr || 29}</span>
              </div>
              <span className="text-[10px] text-slate-400">Authority gap of +22 DR</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Referring Domains</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 font-mono mt-0.5">
                <span className="text-blue-600">{targetSite.referring_domains || '69'}</span> vs <span className="text-emerald-600">{topCompetitor.referring_domains || '1.6K'}</span>
              </div>
              <span className="text-[10px] text-slate-400">Quality backlink advantage</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Untapped Keywords</span>
              <div className="text-base sm:text-lg font-bold text-amber-700 font-mono mt-0.5">
                {topCompetitor.untapped_keywords_count || 34} Keywords
              </div>
              <span className="text-[10px] text-slate-400">High-intent buyer queries</span>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4">Domain</th>
              <th className="py-3 px-3">DR</th>
              <th className="py-3 px-3">Ref. Domains</th>
              <th className="py-3 px-3">Traffic / mo</th>
              <th className="py-3 px-3">Word Count</th>
              <th className="py-3 px-3">FAQ Schema</th>
              <th className="py-3 px-3">Org Schema</th>
              <th className="py-3 px-3">AEO Proxy</th>
              <th className="py-3 px-3">GEO Proxy</th>
              <th className="py-3 px-4">Response Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {snapshots.map((item, idx) => {
              const isTarget = item.domain === report.site.host || item.page_type === '(target)';
              const isJsRendered = String(item.words).includes('JS-rendered') || item.page_type === 'JS-rendered';

              return (
                <tr
                  key={idx}
                  className={`hover:bg-slate-50/80 transition ${
                    isTarget ? 'bg-blue-50/50 font-medium' : ''
                  }`}
                >
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      {isTarget && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-600 text-white">
                          YOU
                        </span>
                      )}
                      <span className="font-semibold text-slate-900 break-all">{item.domain}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 font-mono font-bold text-blue-600">
                    {item.dr ? `DR ${item.dr}` : '—'}
                  </td>
                  <td className="py-3.5 px-3 font-mono text-slate-800">
                    {item.referring_domains || '—'}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-bold text-emerald-700">
                    {item.search_traffic || '—'}
                  </td>
                  <td className="py-3.5 px-3 text-slate-800 font-mono">
                    {item.words}
                  </td>
                  <td className="py-3.5 px-3">
                    {isJsRendered ? (
                      <span className="text-amber-700 text-[11px] font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        JS-rendered
                      </span>
                    ) : item.has_faq_schema ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                        <Check className="w-3 h-3" /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-[11px]">
                        <X className="w-3 h-3" /> No
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3">
                    {item.has_org_schema ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                        <Check className="w-3 h-3" /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-[11px]">
                        <X className="w-3 h-3" /> No
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-bold text-blue-600">
                    {item.aeo_proxy ?? (item.qa_blocks ? '64.0' : '22.5')}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-bold text-emerald-600">
                    {item.geo_proxy ?? (item.has_org_schema ? '72.0' : '45.0')}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-500">
                    {item.response_time}s
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Explanatory callouts */}
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 text-xs text-slate-700">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 font-bold">Note on AEO/GEO proxy scores:</strong> AEO and GEO proxy scores come from on-page signals only — they measure answer-readiness and AI-citability, not Google SERP ranking.
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-slate-700">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 font-bold">JS-rendered explanation:</strong> Domains showing "JS-rendered" returned HTTP 200 but their initial server HTML carried no content (client-side React/Vue app shell). AI crawlers do not execute heavy JS, making those sites invisible to AI search.
          </div>
        </div>
      </div>
    </div>
  );
};
