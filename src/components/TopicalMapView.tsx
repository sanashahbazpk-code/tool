import React from 'react';
import { AuditReport, TopicalCluster } from '../types/seo';
import { Layers, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';

interface TopicalMapViewProps {
  report: AuditReport;
}

export const TopicalMapView: React.FC<TopicalMapViewProps> = ({ report }) => {
  const clusters: TopicalCluster[] = report.topical_clusters || [];

  const avgCoverage = clusters.length
    ? Math.round(clusters.reduce((acc, c) => acc + c.coverage_percent, 0) / clusters.length)
    : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Layers className="w-5 h-5 text-blue-600" />
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Topical Map &amp; Semantic NLP Clustering
          </h2>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            Topical Completeness: {avgCoverage}%
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
          Search algorithms and AI generative engines reward websites that cover topics thoroughly with recognized semantic entities rather than superficial keyword repetition.
        </p>
      </div>

      {/* Topical Authority Overview Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
              Topical Authority Depth Index
            </h3>
            <p className="text-xs text-slate-500">
              Measures how exhaustively your page content covers all recognized sub-topics and industry terminology.
            </p>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <span className="text-3xl font-black text-blue-600 font-mono">{avgCoverage}%</span>
            <span className="text-xs text-slate-400 block font-medium">Semantic Depth Score</span>
          </div>
        </div>

        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 rounded-full transition-all duration-700"
            style={{ width: `${avgCoverage}%` }}
          />
        </div>
      </div>

      {/* Topical Clusters List */}
      <div className="space-y-4">
        {clusters.map((cluster, idx) => {
          const isCovered = cluster.status === 'covered';
          const isPartial = cluster.status === 'partial';

          return (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:border-slate-300 transition shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5 pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                      isCovered
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : isPartial
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {cluster.status}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{cluster.cluster_name}</h4>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500 font-medium">Cluster Coverage:</span>
                  <span className="font-mono font-bold text-slate-900">{cluster.coverage_percent}%</span>
                </div>
              </div>

              {/* Semantic NLP Terms Detected vs Missing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-3.5">
                <div className="bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Covered Semantic Terms on Page
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cluster.semantic_terms.map((term, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white text-emerald-800 border border-emerald-200 text-[11px] font-mono shadow-xs"
                      >
                        ✓ {term}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-100">
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Missing High-Relevance NLP Entities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cluster.missing_terms.map((term, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white text-amber-800 border border-amber-200 text-[11px] font-mono shadow-xs"
                      >
                        + {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended H2 Heading */}
              {cluster.recommended_h2 && (
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/80 text-xs">
                  <div className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-blue-900 block mb-0.5">
                        Recommended Section Heading (H2):
                      </span>
                      <p className="text-slate-800 font-medium italic">
                        "{cluster.recommended_h2}"
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
