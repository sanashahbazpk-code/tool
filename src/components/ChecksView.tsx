import React, { useState } from 'react';
import { AuditReport, CheckItem, CheckStatus } from '../types/seo';
import { CheckCircle2, Search } from 'lucide-react';

interface ChecksViewProps {
  report: AuditReport;
}

export const ChecksView: React.FC<ChecksViewProps> = ({ report }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getStatusBadge = (status: CheckStatus) => {
    switch (status) {
      case 'pass':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
            Pass
          </span>
        );
      case 'warn':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-50 text-amber-700 border border-amber-200">
            Warn
          </span>
        );
      case 'fail':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-rose-50 text-rose-700 border border-rose-200">
            Fail
          </span>
        );
      case 'info':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
            Info
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-slate-100 text-slate-600 border border-slate-200">
            Skip
          </span>
        );
    }
  };

  const filteredChecks = report.checks.filter((check) => {
    if (selectedStatus === 'problems') {
      if (check.status !== 'fail' && check.status !== 'warn') return false;
    } else if (selectedStatus !== 'all') {
      if (check.status !== selectedStatus) return false;
    }

    if (selectedCategory !== 'all') {
      if (check.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = check.title.toLowerCase().includes(q);
      const matchDetail = (check.detail || '').toLowerCase().includes(q);
      const matchFix = (check.fix || '').toLowerCase().includes(q);
      const matchCategory = check.category.toLowerCase().includes(q);
      if (!matchTitle && !matchDetail && !matchFix && !matchCategory) return false;
    }

    return true;
  });

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-blue-600" />
          Full Audit Checks Directory ({report.checks.length})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Complete itemized audit of every technical, on-page, content, AEO, and GEO signal checked on your site.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search checks, error messages, fixes, or categories..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 text-[11px] font-bold uppercase mr-1">Status:</span>
            {[
              { id: 'all', label: 'All Checks' },
              { id: 'problems', label: 'Problems Only' },
              { id: 'pass', label: 'Pass' },
              { id: 'warn', label: 'Warn' },
              { id: 'fail', label: 'Fail' },
              { id: 'info', label: 'Info' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedStatus(btn.id)}
                className={`px-2.5 py-1 rounded-lg text-xs transition cursor-pointer select-none font-semibold ${
                  selectedStatus === btn.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 text-[11px] font-bold uppercase mr-1">Category:</span>
            {['all', 'technical', 'seo', 'content', 'aeo', 'geo'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs uppercase transition cursor-pointer select-none font-semibold ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Checks Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4 w-44">Check Signal</th>
              <th className="py-3 px-3 w-28">Status</th>
              <th className="py-3 px-3 w-20">Weight</th>
              <th className="py-3 px-4">Detail &amp; Evidence</th>
              <th className="py-3 px-4">Recommended Fix</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredChecks.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400">
                  No checks match the current search query or filter.
                </td>
              </tr>
            ) : (
              filteredChecks.map((check) => (
                <tr key={check.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-900">{check.title}</div>
                    <span className="text-[10px] uppercase font-bold text-blue-600">
                      {check.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-3">
                    {getStatusBadge(check.status)}
                  </td>
                  <td className="py-3.5 px-3 font-mono text-slate-500 font-semibold">
                    {check.weight}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 leading-relaxed">
                    {check.detail}
                  </td>
                  <td className="py-3.5 px-4 text-xs leading-relaxed">
                    {check.fix ? (
                      <div className="text-emerald-800 bg-emerald-50/80 p-2 rounded-lg border border-emerald-200">
                        <span className="font-bold mr-1">Fix:</span>
                        {check.fix}
                      </div>
                    ) : (
                      <span className="text-slate-300">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
