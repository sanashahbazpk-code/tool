import React from 'react';
import { AuditReport } from '../types/seo';
import { Link2, ShieldAlert, Globe, AlertTriangle } from 'lucide-react';

interface BacklinksViewProps {
  report: AuditReport;
}

export const BacklinksView: React.FC<BacklinksViewProps> = ({ report }) => {
  const bData = report.backlinks;
  const analysis = bData?.analysis;

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <Link2 className="w-5 h-5 text-blue-600" />
          Backlink Authority &amp; Off-Page Profile
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Backlink profile profiling, anchor text distributions, top referring domains, and Common Crawl AI visibility.
        </p>
      </div>

      {/* Honest limit banner */}
      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700 space-y-1">
        <div className="flex items-center gap-2 text-amber-900 font-bold">
          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
          <span>No Paid Backlink API Key Attached</span>
        </div>
        <p className="leading-relaxed">
          Referring domain counts require paid backlink APIs (Ahrefs, Semrush, Moz) or a manual CSV export from Google Search Console. Common Crawl presence serves as an AI retrieval corpus proxy.
        </p>
      </div>

      {/* Backlink Profile Analysis Cards */}
      {analysis ? (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] text-slate-500 uppercase font-bold block mb-1">Links Analysed</span>
              <div className="text-2xl font-black text-slate-900 font-mono">{analysis.records}</div>
              <span className="text-[11px] text-slate-400">across {analysis.referring_domains} domains</span>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] text-slate-500 uppercase font-bold block mb-1">Dofollow Ratio</span>
              <div className="text-2xl font-black text-emerald-600 font-mono">
                {Math.round((analysis.dofollow / analysis.records) * 100)}%
              </div>
              <span className="text-[11px] text-slate-400">{analysis.dofollow} dofollow / {analysis.nofollow} nofollow</span>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] text-slate-500 uppercase font-bold block mb-1">Avg Source DR</span>
              <div className="text-2xl font-black text-blue-600 font-mono">{analysis.avg_dr}</div>
              <span className="text-[11px] text-slate-400">Median DR: {analysis.median_dr}</span>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] text-slate-500 uppercase font-bold block mb-1">Common Crawl</span>
              <div className="text-2xl font-black text-emerald-600 font-mono">{bData.common_crawl_pages}</div>
              <span className="text-[11px] text-slate-400">indexed page record(s)</span>
            </div>
          </div>

          {/* Anchor Warning Callout */}
          {analysis.anchor_warning && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs">
              <div className="flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-0.5">Anchor Text Risk Warning</h4>
                  <p className="text-slate-700 leading-relaxed">{analysis.anchor_warning}</p>
                </div>
              </div>
            </div>
          )}

          {/* Strongest Linking Domains Table */}
          {analysis.top_domains && analysis.top_domains.length > 0 && (
            <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
              <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Strongest Linking Domains
                </h3>
                <span className="text-[11px] text-slate-400 font-semibold">
                  Top {analysis.top_domains.length} domains
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase bg-slate-50/50">
                      <th className="py-2.5 px-4">Domain</th>
                      <th className="py-2.5 px-3">Links</th>
                      <th className="py-2.5 px-3">Domain Rating (DR)</th>
                      <th className="py-2.5 px-4">Sample URL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {analysis.top_domains.map((td, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition">
                        <td className="py-2.5 px-4 font-semibold text-slate-900">{td.domain}</td>
                        <td className="py-2.5 px-3 font-mono text-slate-600">{td.links}</td>
                        <td className="py-2.5 px-3 font-mono font-bold text-blue-600">{td.dr}</td>
                        <td className="py-2.5 px-4 text-slate-400 truncate max-w-[280px] font-mono text-[11px]">
                          {td.sample}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Top Anchor Texts */}
          {analysis.top_anchors && analysis.top_anchors.length > 0 && (
            <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
              <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Top Anchor Texts
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase bg-slate-50/50">
                      <th className="py-2.5 px-4">Anchor Text</th>
                      <th className="py-2.5 px-4">Occurrences</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {analysis.top_anchors.map((an, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition">
                        <td className="py-2.5 px-4 font-medium text-slate-900">{an.anchor}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{an.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="p-8 text-center bg-white border border-slate-200/80 rounded-2xl shadow-xs">
          <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-slate-900">Backlink Profile Pending API Credentials</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
            To view full referring domain rankings, pass your free Google Search Console links export or configure backlink provider credentials.
          </p>
        </div>
      )}
    </div>
  );
};
