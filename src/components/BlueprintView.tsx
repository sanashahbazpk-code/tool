import React, { useState } from 'react';
import { AuditReport } from '../types/seo';
import {
  Rocket,
  DollarSign,
  TrendingUp,
  CheckSquare,
  Square,
  Sparkles,
  ArrowRight,
  Calculator,
  Search,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { ViewTab } from './NavigationTabs';

interface BlueprintViewProps {
  report: AuditReport;
  onNavigateToView: (view: ViewTab) => void;
}

export const BlueprintView: React.FC<BlueprintViewProps> = ({
  report,
  onNavigateToView,
}) => {
  // Revenue Multiplier Calculator State
  const [currentTraffic, setCurrentTraffic] = useState<number>(5000);
  const [currentRevenue, setCurrentRevenue] = useState<number>(10000);
  const [targetTraffic, setTargetTraffic] = useState<number>(25000);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'PKR'>('USD');

  // Interactive Checklist State
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({
    step1: true,
    step2: true,
    step3: false,
    step4: true,
    step5: false,
    step6: false,
  });

  // Keyword Hunter State
  const [testKeyword, setTestKeyword] = useState<string>('ai search engine optimization auditor');
  const [testedResult, setTestedResult] = useState<{
    intent: string;
    kd: number;
    volume: number;
    isLowHanging: boolean;
    recommendation: string;
  } | null>({
    intent: 'Transactional (Money Keyword 💰)',
    kd: 22,
    volume: 2900,
    isLowHanging: true,
    recommendation: 'High opportunity: Top 10 search results have low-DR sites. Create a focused page with 40-60w answer snippet and specs table.',
  });

  const toggleStep = (id: string) => {
    setCompletedSteps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const trafficMultiplier = currentTraffic > 0 ? (targetTraffic / currentTraffic).toFixed(1) : '1.0';
  const projectedRevenue = Math.round(currentRevenue * (currentTraffic > 0 ? targetTraffic / currentTraffic : 1));

  const handleTestKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    const q = testKeyword.trim().toLowerCase();
    if (!q) return;

    let intent = 'Informational 💡';
    let kd = 28;
    let volume = 1200;

    if (q.includes('price') || q.includes('buy') || q.includes('cost') || q.includes('tool') || q.includes('auditor') || q.includes('deal')) {
      intent = 'Transactional (Money Keyword 💰)';
      kd = 22;
      volume = 3200;
    } else if (q.includes('best') || q.includes('top') || q.includes('review') || q.includes('vs') || q.includes('checklist')) {
      intent = 'Commercial Investigation 🛒';
      kd = 25;
      volume = 2400;
    }

    const isLowHanging = kd < 30;

    setTestedResult({
      intent,
      kd,
      volume,
      isLowHanging,
      recommendation: isLowHanging
        ? 'High opportunity: Top 10 search results have low-DR competitors. Create a focused page with 40-60w answer snippet and specs table.'
        : 'Moderate difficulty: Requires topical cluster support and high-relevance niche backlinks to outrank top competitors.',
    });
  };

  const stepsList = [
    {
      id: 'step1',
      num: '01',
      title: 'Benchmark Multiple Competitors (DR, Backlinks & Search Traffic)',
      desc: 'Analyze 2-3 direct market competitors. Benchmark Domain Rating, Referring Domains, and Organic Traffic to identify the exact growth gap.',
      actionView: 'competitors' as ViewTab,
      actionLabel: 'View Competitor Benchmarks →',
    },
    {
      id: 'step2',
      num: '02',
      title: 'Extract Untapped Low-Hanging Fruit Keywords (KD < 30)',
      desc: 'Discover keywords that competitors rank for on Google Page 1 but your site has completely missed. Focus on transactional keywords where customers have their credit cards ready.',
      actionView: 'gap' as ViewTab,
      actionLabel: 'Explore Untapped Keywords Gap →',
    },
    {
      id: 'step3',
      num: '03',
      title: 'Build Complete Semantic Topical Authority (NLP Entities)',
      desc: 'Cover the topic from every angle so Google recognizes you as an expert. Add missing entity terms into H2 headings, specifications tables, and buyer guides.',
      actionView: 'topical' as ViewTab,
      actionLabel: 'Check Topical Map & NLP →',
    },
    {
      id: 'step4',
      num: '04',
      title: 'Strictly Enforce the 2-Second Technical Page Speed Rule',
      desc: 'Eliminate blocking render scripts, compress images, and ensure sub-2-second server response times. Ensure 0 broken 404 links and valid XML sitemaps.',
      actionView: 'checks' as ViewTab,
      actionLabel: 'Inspect Technical Checks →',
    },
    {
      id: 'step5',
      num: '05',
      title: 'Format for AEO Snippets & 40–60 Word Direct Answers',
      desc: 'Structure every key page with question-form H2s and 40-60 word concise answers immediately below. Deploy FAQPage JSON-LD schema so ChatGPT and Google Overviews cite your brand.',
      actionView: 'prompts' as ViewTab,
      actionLabel: 'Get AI Prompts for Snippets →',
    },
    {
      id: 'step6',
      num: '06',
      title: 'Build Relevant Quality Backlinks & Linkable Data Assets',
      desc: 'Avoid spammy or group-buy backlinks. Earn natural authority through proprietary industry research, buying guides, and relevant niche citations.',
      actionView: 'backlinks' as ViewTab,
      actionLabel: 'Analyze Backlink Profile →',
    },
  ];

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPct = Math.round((completedCount / stepsList.length) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Blueprint Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <Rocket className="w-5 h-5 text-blue-600" />
          <h2 className="text-base font-bold text-slate-900">
            Growth Blueprint &amp; Execution Framework
          </h2>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            6 Pillars of Growth
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          The exact practical workflow used by top digital agencies to scale traffic from 5,000 to 25,000+ monthly visits without paying for expensive tools.
        </p>
      </div>

      {/* Revenue & Traffic Multiplier Calculator */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-emerald-600" />
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Revenue &amp; Traffic Multiplier Calculator
              </h3>
              <p className="text-xs text-slate-500">
                Estimate the direct financial impact of closing the competitor traffic gap.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            {(['USD', 'EUR', 'PKR'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  currency === curr
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Current Monthly Organic Traffic:
              </label>
              <input
                type="number"
                value={currentTraffic}
                onChange={(e) => setCurrentTraffic(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono text-xs focus:outline-none focus:border-blue-500 focus:bg-white"
              />
              <span className="text-[11px] text-slate-400">e.g. 5,000 monthly visitors</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Current Monthly Revenue ({currency}):
              </label>
              <input
                type="number"
                value={currentRevenue}
                onChange={(e) => setCurrentRevenue(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono text-xs focus:outline-none focus:border-blue-500 focus:bg-white"
              />
              <span className="text-[11px] text-slate-400">e.g. $10,000 / month</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Competitor Target Traffic:
              </label>
              <input
                type="number"
                value={targetTraffic}
                onChange={(e) => setTargetTraffic(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono text-xs focus:outline-none focus:border-blue-500 focus:bg-white"
              />
              <span className="text-[11px] text-slate-400">e.g. 25,000 monthly visitors (top competitor benchmark)</span>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-extrabold text-blue-700 tracking-wider">
                Growth Opportunity Projection
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-xs text-slate-500 block mb-1">Traffic Expansion</span>
                  <div className="text-3xl font-black text-blue-600 font-mono">
                    {trafficMultiplier}x
                  </div>
                  <span className="text-[11px] text-slate-400">from {currentTraffic.toLocaleString()} to {targetTraffic.toLocaleString()}</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-xs">
                  <span className="text-xs text-emerald-700 font-semibold block mb-1">Projected Monthly Revenue</span>
                  <div className="text-3xl font-black text-emerald-600 font-mono">
                    {projectedRevenue.toLocaleString()} {currency}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    +{((projectedRevenue - currentRevenue)).toLocaleString()} {currency}/mo increase
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-blue-200/80 text-xs text-slate-700 leading-relaxed shadow-2xs">
              <strong className="text-blue-900 block mb-0.5">Core Principle:</strong>
              When you scale high-intent transactional search traffic by 4x to 5x, sales multiply proportionally. The key is targeting untapped buyer queries rather than generic low-intent keywords.
            </div>
          </div>
        </div>
      </div>

      {/* Low-Hanging Fruit Keyword Tester */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-amber-500" />
          <h3 className="text-sm font-bold text-slate-900">
            Low-Hanging Fruit Keyword Tester
          </h3>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          Test any product or service search query to verify if it qualifies as an easy win (KD &lt; 30 with high buyer intent).
        </p>

        <form onSubmit={handleTestKeyword} className="flex flex-col sm:flex-row gap-2.5 mb-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={testKeyword}
              onChange={(e) => setTestKeyword(e.target.value)}
              placeholder="e.g. ai search engine optimization auditor"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white font-mono"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition cursor-pointer shadow-sm"
          >
            Analyze Opportunity
          </button>
        </form>

        {testedResult && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-slate-900">"{testKeyword}"</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-100 text-blue-800 border border-blue-200">
                  {testedResult.intent}
                </span>
              </div>
              <div>
                {testedResult.isLowHanging ? (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> 🎯 Low-Hanging Fruit (Easy Win!)
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    Competitive Query
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-[11px] text-slate-500 block">Est. Search Volume</span>
                <span className="font-mono font-bold text-slate-900 text-sm">{testedResult.volume.toLocaleString()} / mo</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">Keyword Difficulty (KD)</span>
                <span className={`font-mono font-bold text-sm ${testedResult.kd < 25 ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {testedResult.kd}% (Low Competition)
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">Intent Priority</span>
                <span className="font-semibold text-emerald-700 text-xs">High Conversion Rate</span>
              </div>
            </div>

            <p className="text-xs text-slate-700 pt-1 leading-relaxed">
              <strong className="text-emerald-700">Actionable Advice:</strong> {testedResult.recommendation}
            </p>
          </div>
        )}
      </div>

      {/* The 6 Pillars Checklist */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>The 6 Execution Pillars (Interactive Checklist)</span>
            </h3>
            <p className="text-xs text-slate-500">
              Track your implementation progress across all 6 core components of the growth blueprint.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-slate-600">
              Progress: <strong className="text-slate-900 font-mono font-bold">{completedCount} of {stepsList.length}</strong> ({progressPct}%)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Steps List */}
        <div className="space-y-3 pt-2">
          {stepsList.map((step) => {
            const isDone = completedSteps[step.id];

            return (
              <div
                key={step.id}
                className={`p-4 rounded-xl border transition ${
                  isDone
                    ? 'bg-emerald-50/50 border-emerald-200'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <button
                    onClick={() => toggleStep(step.id)}
                    className="mt-0.5 text-emerald-600 hover:text-emerald-700 transition cursor-pointer shrink-0"
                    title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {isDone ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-blue-700 px-1.5 py-0.5 rounded bg-blue-100 border border-blue-200">
                          {step.num}
                        </span>
                        <h4 className={`text-xs font-bold ${isDone ? 'text-slate-900' : 'text-slate-800'}`}>
                          {step.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => onNavigateToView(step.actionView)}
                        className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 transition cursor-pointer self-start sm:self-auto shrink-0"
                      >
                        <span>{step.actionLabel}</span>
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
