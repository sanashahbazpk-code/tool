import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Globe, ArrowRight, Loader2, Sparkles, Building2, Activity } from 'lucide-react';
import { getAvailablePreloadedDomains } from '../utils/auditEngine';

interface AuditFormProps {
  onRunAudit: (domain: string, competitors: string[], country: string, mode: 'full' | 'site_only') => void;
  isLoading: boolean;
  progressStep: string;
  progressPercent: number;
  currentDomain: string;
}

export const AuditForm: React.FC<AuditFormProps> = ({
  onRunAudit,
  isLoading,
  progressStep,
  progressPercent,
  currentDomain,
}) => {
  const [domainInput, setDomainInput] = useState(
    currentDomain && currentDomain !== 'hashmiphotos.com' ? currentDomain : 'this-site'
  );
  const [competitorsInput, setCompetitorsInput] = useState('ahrefs.com, semrush.com');
  const [country, setCountry] = useState('US');
  const [mode, setMode] = useState<'full' | 'site_only'>('full');
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const preloadedDomains = getAvailablePreloadedDomains();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;
    const comps = competitorsInput
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);
    onRunAudit(domainInput.trim(), comps, country, mode);
  };

  const handleSelectPreloaded = (d: string) => {
    setDomainInput(d);
    onRunAudit(d, [], country, mode);
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-7 shadow-sm mb-8 transition">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Target Website Address / URL
            </label>
            <span className="text-[11px] text-slate-400">
              Enter any live URL or select below to audit
            </span>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="e.g. this-site, stripe.com, vercel.com"
                disabled={isLoading}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 font-mono transition"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !domainInput.trim()}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition cursor-pointer min-w-[170px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Auditing Site...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Start Audit</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preloaded quick audit selectors */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-slate-500 flex items-center gap-1 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Quick Benchmarks:
          </span>
          {preloadedDomains.map((item) => {
            const isSelected = domainInput === item.domain;
            return (
              <button
                key={item.domain}
                type="button"
                onClick={() => handleSelectPreloaded(item.domain)}
                disabled={isLoading}
                className={`px-3 py-1 rounded-lg border text-xs transition cursor-pointer font-medium ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-xs'
                    : 'border-slate-200 bg-slate-50/80 text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                {item.domain === 'this-site' ? '⚡ This Web App (Self Audit)' : item.domain}
                <span className="ml-1.5 text-[10px] text-slate-400 font-mono font-bold">
                  {item.score}
                </span>
              </button>
            );
          })}
        </div>

        {/* More options toggle */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setShowMoreOptions(!showMoreOptions)}
            className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition cursor-pointer"
          >
            {showMoreOptions ? '− Fewer options' : '＋ More options (Competitors, Region & Audit Mode)'}
            {showMoreOptions ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Collapsible advanced options */}
        {showMoreOptions && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4 animate-in fade-in duration-150">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Competitor Domains (Optional)
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={competitorsInput}
                    onChange={(e) => setCompetitorsInput(e.target.value)}
                    placeholder="e.g. ahrefs.com, semrush.com"
                    disabled={isLoading}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Add competitor domains separated by commas for comparative ranking matrix.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Search Region / Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="US">United States (google.com)</option>
                  <option value="GB">United Kingdom (google.co.uk)</option>
                  <option value="CA">Canada (google.ca)</option>
                  <option value="AU">Australia (google.com.au)</option>
                  <option value="PK">Pakistan (google.com.pk)</option>
                  <option value="IN">India (google.co.in)</option>
                  <option value="DE">Germany (google.de)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Audit Depth
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${
                    mode === 'full'
                      ? 'border-blue-500 bg-white ring-1 ring-blue-500/20 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="mode"
                    value="full"
                    checked={mode === 'full'}
                    onChange={() => setMode('full')}
                    className="mt-0.5 text-blue-600 focus:ring-0"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Full Research</span>
                    <span className="text-[11px] text-slate-500">
                      Competitors comparison + Keyword gap + Backlink profile (~15s)
                    </span>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${
                    mode === 'site_only'
                      ? 'border-blue-500 bg-white ring-1 ring-blue-500/20 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="mode"
                    value="site_only"
                    checked={mode === 'site_only'}
                    onChange={() => setMode('site_only')}
                    className="mt-0.5 text-blue-600 focus:ring-0"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Target Site Only</span>
                    <span className="text-[11px] text-slate-500">
                      Fast on-page &amp; technical health audit (~5s)
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
      </form>

      {/* Progress Indicator */}
      {isLoading && (
        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-blue-600 font-semibold flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              {progressStep || 'Crawling website & running checks...'}
            </span>
            <span className="text-slate-900 font-mono font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
