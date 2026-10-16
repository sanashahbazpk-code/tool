import React from 'react';
import { AuditReport } from '../types/seo';
import { AlertTriangle, ShieldCheck, Scale, Cpu, SearchX, FileKey } from 'lucide-react';

interface CaveatsViewProps {
  report: AuditReport;
}

export const CaveatsView: React.FC<CaveatsViewProps> = () => {
  const caveats = [
    {
      icon: <SearchX className="w-5 h-5 text-amber-600" />,
      title: 'It does not scrape Google directly',
      desc: 'SERP data requires a paid SERP API key (SerpAPI, ValueSerp); otherwise you supply competitor domains manually. Free HTML scraping is blocked, fragile, and violates search engine terms of service.',
    },
    {
      icon: <Scale className="w-5 h-5 text-blue-600" />,
      title: 'Authority metrics are never merged across vendors',
      desc: 'Ahrefs DR (0–100), Semrush AS (0–100), and Open PageRank (0–10) are fundamentally different logarithmic scales. This tool labels each vendor score distinctly and never blends them into a fake composite.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'It never invents or guesses numbers',
      desc: 'A check that cannot run is honestly marked "SKIP" or "INFO" with an exact explanation instead of fabricating dummy rankings or artificial audit scores.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-600" />,
      title: 'Scores measure readiness, not guaranteed rankings',
      desc: 'An audit score of 95/100 proves technical health, schema validity, and AI retrieval friendliness, but Google rankings also depend on user intent matching, real-world brand search volume, and backlink equity.',
    },
    {
      icon: <FileKey className="w-5 h-5 text-rose-600" />,
      title: 'Zero shared or group-buy SEO tool accounts',
      desc: 'This tool never uses or facilitates shared/group-buy accounts. Group buys breach vendor terms of service, expose client domains and keyword research to other subscribers, and get suspended without warning.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          Methodology, Principles &amp; Operational Limits
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Honest principles, limits, and methodological commitments guiding every audit and score calculation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {caveats.map((c, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:border-slate-300 transition shadow-xs"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60 shrink-0">
                {c.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{c.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
