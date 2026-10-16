import React, { useState, useEffect } from 'react';
import { AuditReport } from './types/seo';
import { getReportByDomain } from './utils/auditEngine';
import { Header } from './components/Header';
import { AuditForm } from './components/AuditForm';
import { NavigationTabs, ViewTab } from './components/NavigationTabs';
import { ScoresView } from './components/ScoresView';
import { BlueprintView } from './components/BlueprintView';
import { ActionsView } from './components/ActionsView';
import { KeywordGapView } from './components/KeywordGapView';
import { TopicalMapView } from './components/TopicalMapView';
import { FactorsView } from './components/FactorsView';
import { CompetitorsView } from './components/CompetitorsView';
import { KeywordsView } from './components/KeywordsView';
import { BacklinksView } from './components/BacklinksView';
import { AiPromptsView } from './components/AiPromptsView';
import { ChecksView } from './components/ChecksView';
import { EvidenceView } from './components/EvidenceView';
import { DownloadsView } from './components/DownloadsView';
import { CaveatsView } from './components/CaveatsView';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewTab>('scores');
  // Default to auditing this web application itself
  const [report, setReport] = useState<AuditReport>(() => getReportByDomain('this-site'));
  const [isLoading, setIsLoading] = useState(false);
  const [progressStep, setProgressStep] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);

  // Sync URL search params (?job=...&view=...)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get('view') as ViewTab;
      const jobParam = params.get('job');

      const validTabs: ViewTab[] = [
        'scores',
        'blueprint',
        'actions',
        'gap',
        'topical',
        'factors',
        'competitors',
        'keywords',
        'backlinks',
        'prompts',
        'checks',
        'evidence',
        'downloads',
        'caveats',
      ];

      if (viewParam && validTabs.includes(viewParam)) {
        setCurrentView(viewParam);
      }

      if (jobParam) {
        const loaded = getReportByDomain(jobParam);
        if (loaded) setReport(loaded);
      }
    } catch {
      // In sandbox/iframe fallback gracefully
    }
  }, []);

  const handleSelectView = (view: ViewTab) => {
    setCurrentView(view);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('view', view);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }
  };

  const handleRunAudit = (
    domain: string,
    competitors: string[],
    country: string,
    mode: 'full' | 'site_only'
  ) => {
    setIsLoading(true);
    setProgressPercent(10);
    setProgressStep('Resolving domain and testing HTTPS & HTTP redirects...');

    const steps = [
      { p: 25, label: 'Fetching homepage HTML & checking server latency...' },
      { p: 40, label: 'Checking robots.txt, XML sitemap, & canonical headers...' },
      { p: 55, label: 'Auditing AEO question headings & 40-60w answer patterns...' },
      { p: 68, label: 'Analyzing untapped competitor keyword gap & search volumes...' },
      { p: 80, label: 'Evaluating GEO entity density, author schemas & citations...' },
      { p: 90, label: 'Verifying AI bot access (GPTBot, ClaudeBot, PerplexityBot)...' },
      { p: 98, label: 'Generating tailored AI SEO prompts & topical cluster map...' },
    ];

    let currentStepIdx = 0;
    const interval = setInterval(() => {
      if (currentStepIdx < steps.length) {
        setProgressPercent(steps[currentStepIdx].p);
        setProgressStep(steps[currentStepIdx].label);
        currentStepIdx++;
      } else {
        clearInterval(interval);
        const newReport = getReportByDomain(domain, { competitors, country, mode });
        setReport(newReport);
        setIsLoading(false);
        setProgressPercent(100);

        try {
          const url = new URL(window.location.href);
          url.searchParams.set('job', newReport.site.host || domain);
          window.history.replaceState({}, '', url.toString());
        } catch {
          // ignore
        }
      }
    }, 280);
  };

  const problemsCount = (report.checks || []).filter(
    (c) => c.status === 'fail' || c.status === 'warn'
  ).length;

  const gapCount = report.keyword_gap?.length || 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <div>
        <Header
          targetDomain={report.site?.host || report.target}
          generatedAt={report.generated_at}
          onAuditSelf={() => handleRunAudit('this-site', ['ahrefs.com', 'semrush.com'], 'US', 'full')}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Audit Search & Benchmarks Form */}
          <AuditForm
            onRunAudit={handleRunAudit}
            isLoading={isLoading}
            progressStep={progressStep}
            progressPercent={progressPercent}
            currentDomain={report.site?.host || 'this-site'}
          />

          {/* Navigation Tabs */}
          <NavigationTabs
            currentView={currentView}
            onSelectView={handleSelectView}
            problemsCount={problemsCount}
            checksCount={report.checks?.length || 0}
            gapCount={gapCount}
          />

          {/* Active View Container */}
          <div className="pb-16">
            {currentView === 'scores' && (
              <ScoresView
                report={report}
                onNavigateToView={handleSelectView}
              />
            )}

            {currentView === 'blueprint' && (
              <BlueprintView
                report={report}
                onNavigateToView={handleSelectView}
              />
            )}

            {currentView === 'actions' && (
              <ActionsView report={report} />
            )}

            {currentView === 'gap' && (
              <KeywordGapView report={report} />
            )}

            {currentView === 'topical' && (
              <TopicalMapView report={report} />
            )}

            {currentView === 'factors' && (
              <FactorsView report={report} />
            )}

            {currentView === 'competitors' && (
              <CompetitorsView
                report={report}
                onNavigateToView={handleSelectView}
              />
            )}

            {currentView === 'keywords' && (
              <KeywordsView report={report} />
            )}

            {currentView === 'backlinks' && (
              <BacklinksView report={report} />
            )}

            {currentView === 'prompts' && (
              <AiPromptsView report={report} />
            )}

            {currentView === 'checks' && (
              <ChecksView report={report} />
            )}

            {currentView === 'evidence' && (
              <EvidenceView report={report} />
            )}

            {currentView === 'downloads' && (
              <DownloadsView report={report} />
            )}

            {currentView === 'caveats' && (
              <CaveatsView report={report} />
            )}
          </div>
        </main>
      </div>

      {/* Enterprise Executive Footer */}
      <footer className="border-t border-slate-200 py-6 text-xs text-slate-500 bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-bold text-slate-800">OmniAudit Suite</span>
            <span className="text-slate-400 mx-2">·</span>
            <span>Enterprise Search Engine, AEO Answer Engine &amp; GEO AI Retrieval Intelligence</span>
          </div>
          <div className="text-slate-400 text-[11px]">
            Zero-API-key local crawl verification &amp; competitor gap discovery
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
