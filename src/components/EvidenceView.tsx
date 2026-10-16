import React from 'react';
import { AuditReport } from '../types/seo';
import { FileSpreadsheet, Server, FileText } from 'lucide-react';

interface EvidenceViewProps {
  report: AuditReport;
}

export const EvidenceView: React.FC<EvidenceViewProps> = ({ report }) => {
  const { facts, site } = report;

  const onPageRows: [string, string | number][] = [
    ['Title', `${facts.title} (${facts.title_length} chars)`],
    ['Meta Description', facts.meta_description ? `${facts.meta_description} (${facts.meta_description_length} chars)` : '(none)'],
    ['H1 Heading', facts.h1?.length ? facts.h1.join(' | ') : '(none)'],
    ['H2 Headings Count', facts.heading_counts?.h2 ?? 0],
    ['Word Count', `${facts.words} words`],
    ['Internal / External Links', `${facts.links_internal} / ${facts.links_external}`],
    ['Images (Missing Alt)', `${facts.images_total} (${facts.images_missing_alt} missing)`],
    ['Schema Types Found', facts.schema_types?.length ? facts.schema_types.join(', ') : 'none'],
    ['Tables / Lists', `${facts.tables} tables / ${facts.lists} lists`],
    ['Author Byline', facts.author || '(none)'],
    ['Numeric Facts Density', `${facts.statistic_density} per 100 words`],
    ['Entity / Proper Noun Density', `${facts.entity_density} per 100 words`],
    ['Average Sentence Length', `${facts.avg_sentence_words} words`],
    ['Text to HTML Ratio', `${facts.text_html_ratio}%`],
  ];

  const siteRows: [string, string | number][] = [
    ['Resolved Base URL', site.base_url],
    ['Server / Host Header', site.server || '(undisclosed)'],
    ['Edge CDN Hint', site.cdn_hint || '(direct origin)'],
    ['Response Time', `${site.response_time}s`],
    ['HTML Size', `${Math.round(site.home_size / 1024)} KB`],
    ['Compression', site.content_encoding || 'none'],
    ['Cache Control', site.cache_control || 'none'],
    ['HTTPS Enforced', site.https_ok ? 'Yes' : 'No'],
    ['HTTP -> HTTPS Redirect', site.http_redirects_to_https ? 'Yes (301)' : 'No'],
    ['One Canonical Hostname', site.www_redirect || 'Verified single hostname'],
    ['Robots.txt Status', site.robots?.status ? `HTTP ${site.robots.status}` : 'Not found'],
    ['Sitemap URL & Count', site.sitemap?.url ? `${site.sitemap.url} (${site.sitemap.url_count} URLs)` : 'Not found'],
    ['AI Bots Allowed', site.ai_bots_allowed?.length ? site.ai_bots_allowed.join(', ') : 'All allowed'],
    ['AI Bots Blocked', site.ai_bots_blocked?.length ? site.ai_bots_blocked.join(', ') : 'None'],
    ['Missing Security Headers', site.missing_security_headers?.length ? site.missing_security_headers.join(', ') : 'None'],
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5 text-blue-600" />
          Raw Verification Evidence
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Raw crawl facts and header values gathered directly from the target domain without intermediate processing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* On-Page Evidence */}
        <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-600" />
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              On-Page Crawl Data
            </h3>
          </div>
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-slate-100">
              {onPageRows.map(([label, val], idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition">
                  <td className="py-2.5 px-4 font-semibold text-slate-500 w-48 shrink-0">{label}</td>
                  <td className="py-2.5 px-4 font-mono text-slate-900 break-all">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Site-Level Evidence */}
        <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <Server className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Site &amp; Host Infrastructure
            </h3>
          </div>
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-slate-100">
              {siteRows.map(([label, val], idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition">
                  <td className="py-2.5 px-4 font-semibold text-slate-500 w-48 shrink-0">{label}</td>
                  <td className="py-2.5 px-4 font-mono text-slate-900 break-all">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
