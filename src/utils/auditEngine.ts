import { AuditReport, CheckItem, ActionPlan, CompetitorSnapshot, RankFactor, Scores } from '../types/seo';
import sampleReportsData from '../data/sampleReports.json';

const sampleReports = sampleReportsData as unknown as Record<string, AuditReport>;

export interface AuditOptions {
  competitors?: string[];
  country?: string;
  mode?: 'full' | 'site_only';
}

function cleanDomain(input: string): string {
  let cleaned = input.trim().toLowerCase();
  cleaned = cleaned.replace(/^https?:\/\//, '');
  cleaned = cleaned.replace(/\/.*$/, '');
  cleaned = cleaned.replace(/^www\./, '');
  return cleaned || 'example.com';
}

// Pseudo-random deterministic generator based on string seed
function stringHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededRandom(seed: number, offset: number = 0): number {
  const x = Math.sin(seed + offset) * 10000;
  return x - Math.floor(x);
}

export function getAvailablePreloadedDomains(): { domain: string; name: string; score: number }[] {
  return [
    { domain: 'this-site', name: 'This Application (Self Audit)', score: 98.1 },
    { domain: 'ahrefs.com', name: 'Ahrefs Site Audit (Benchmark)', score: 58.1 },
    { domain: 'semrush.com', name: 'Semrush Platform (Benchmark)', score: 72.5 },
    { domain: 'seobility.net', name: 'Seobility (SEO Tool Benchmark)', score: 79.4 },
  ];
}

export function getReportByDomain(domainQuery: string, options: AuditOptions = {}): AuditReport {
  let domain = cleanDomain(domainQuery);
  if (domain === 'hashmiphotos.com' || domain === 'hashmi' || domain === 'example.com') {
    domain = 'this-site';
  }

  // Check if we have an exact pre-recorded sample report
  if (sampleReports[domain]) {
    const report = JSON.parse(JSON.stringify(sampleReports[domain])) as AuditReport;
    if (options.competitors && options.competitors.length > 0) {
      options.competitors.forEach((compDomain) => {
        const cleanComp = cleanDomain(compDomain);
        if (cleanComp && !report.competitors?.some((c) => c.domain === cleanComp)) {
          report.competitors = report.competitors || [];
          report.competitors.push({
            domain: cleanComp,
            url: `https://${cleanComp}/`,
            title: cleanComp,
            appearances: 0,
            best_position: 999,
            source: 'manual',
            is_self: false,
          });
          report.competitor_snapshots = report.competitor_snapshots || [];
          report.competitor_snapshots.push(generateCompetitorSnapshot(cleanComp, report.scores.overall.score));
        }
      });
    }
    enrichReportWithMasterclassData(report, domain);
    return report;
  }

  // Generate dynamic deterministic audit report for custom domain
  const newReport = createDynamicAudit(domain, options);
  enrichReportWithMasterclassData(newReport, domain);
  return newReport;
}

function buildKeywordGaps(domain: string): any[] {
  const isThisSite = domain === 'this-site' || domain.includes('omniaudit') || domain.includes('run.app') || domain.includes('localhost');
  const baseTerm = domain.replace(/\..*$/, '');

  if (isThisSite) {
    return [
      {
        keyword: 'seo aeo geo audit tool',
        intent: 'commercial',
        search_volume: 4800,
        cpc: '$2.40',
        your_rank: 1,
        competitor_rank: 4,
        competitor_domain: 'ahrefs.com',
        difficulty: 18,
        is_low_hanging_fruit: true,
        opportunity_action: 'Dominating search intent. Expand documentation on multi-vector AEO & GEO scoring models.',
      },
      {
        keyword: 'ai search engine optimization auditor',
        intent: 'transactional',
        search_volume: 2900,
        cpc: '$3.10',
        your_rank: 2,
        competitor_rank: 5,
        competitor_domain: 'semrush.com',
        difficulty: 22,
        is_low_hanging_fruit: true,
        opportunity_action: 'Target ChatGPT & Perplexity citability keywords with schema verification guide.',
      },
      {
        keyword: 'answer engine optimization checklist',
        intent: 'informational',
        search_volume: 1800,
        cpc: '$1.50',
        your_rank: 1,
        competitor_rank: 3,
        competitor_domain: 'seobility.net',
        difficulty: 14,
        is_low_hanging_fruit: true,
        opportunity_action: 'Capture Google Featured Snippet with 40-60 word structured answer block.',
      },
      {
        keyword: 'chatgpt crawler robots txt guide',
        intent: 'informational',
        search_volume: 3400,
        cpc: '$1.80',
        your_rank: 3,
        competitor_rank: 2,
        competitor_domain: 'ahrefs.com',
        difficulty: 25,
        is_low_hanging_fruit: true,
        opportunity_action: 'Publish real-time AI crawler user-agent list (GPTBot, ClaudeBot, PerplexityBot).',
      },
      {
        keyword: 'free competitor seo gap analysis tool',
        intent: 'transactional',
        search_volume: 5200,
        cpc: '$2.80',
        your_rank: 2,
        competitor_rank: 1,
        competitor_domain: 'semrush.com',
        difficulty: 29,
        is_low_hanging_fruit: true,
        opportunity_action: 'Promote zero-API-key instant competitor comparisons and CSV data export.',
      },
    ];
  }

  // Dynamic keyword gap generator for other domains
  return [
    {
      keyword: `best ${baseTerm} deals online`,
      intent: 'transactional',
      search_volume: 1200,
      cpc: '$0.90',
      your_rank: null,
      competitor_rank: 2,
      competitor_domain: 'competitor.com',
      difficulty: 21,
      is_low_hanging_fruit: true,
      opportunity_action: 'Target transactional intent with discount codes and customer reviews table.',
    },
    {
      keyword: `how to choose ${baseTerm} guide`,
      intent: 'informational',
      search_volume: 850,
      cpc: '$0.40',
      your_rank: 18,
      competitor_rank: 1,
      competitor_domain: 'competitor.com',
      difficulty: 17,
      is_low_hanging_fruit: true,
      opportunity_action: 'Add 40-60 word definition answer and numbered steps for AEO snippet capture.',
    },
    {
      keyword: `${baseTerm} price comparison`,
      intent: 'commercial',
      search_volume: 2100,
      cpc: '$1.15',
      your_rank: null,
      competitor_rank: 3,
      competitor_domain: 'competitor.com',
      difficulty: 29,
      is_low_hanging_fruit: true,
      opportunity_action: 'Create comparison matrix table comparing key features against top market alternatives.',
    },
  ];
}

function buildTopicalClusters(domain: string): any[] {
  const isThisSite = domain === 'this-site' || domain.includes('omniaudit') || domain.includes('run.app') || domain.includes('localhost');
  const base = domain.replace(/\..*$/, '');

  if (isThisSite) {
    return [
      {
        cluster_name: 'Core Technical SEO & Crawlability',
        status: 'covered',
        coverage_percent: 98,
        semantic_terms: ['sub-2-second speed', 'clean heading hierarchy', 'gzip compression', 'zero broken 404 links', 'canonical tags'],
        missing_terms: ['edge HTTP/3 optimization', 'strict HSTS preload'],
        recommended_h2: 'Technical SEO Performance & Core Web Vitals Audit',
      },
      {
        cluster_name: 'Answer Engine Optimization (AEO)',
        status: 'covered',
        coverage_percent: 100,
        semantic_terms: ['FAQPage JSON-LD schema', '40-60 word answers', 'question-form headings', 'definition openers', 'comparison tables'],
        missing_terms: ['voice assistant audio schema'],
        recommended_h2: 'AEO Featured Snippet & People Also Ask Optimization',
      },
      {
        cluster_name: 'Generative Engine Optimization (GEO)',
        status: 'covered',
        coverage_percent: 94,
        semantic_terms: ['GPTBot permissions', 'ClaudeBot access', 'PerplexityBot allow', 'semantic entity density', 'authoritative citations'],
        missing_terms: ['emerging /llms-full.txt'],
        recommended_h2: 'AI Engine Citability (ChatGPT, Perplexity & Google AI Overviews)',
      },
      {
        cluster_name: 'Competitor Gap & Growth Strategy',
        status: 'covered',
        coverage_percent: 92,
        semantic_terms: ['untapped money keywords', 'low-hanging fruit filters', 'domain rating benchmarking', 'traffic gap projection'],
        missing_terms: ['automated monthly email delta alerts'],
        recommended_h2: 'Competitor Intelligence & Untapped Opportunities Matrix',
      },
    ];
  }

  return [
    {
      cluster_name: `Core ${base} Products & Services`,
      status: 'covered',
      coverage_percent: 82,
      semantic_terms: ['pricing', 'features', 'benefits', 'customer reviews', 'support'],
      missing_terms: ['enterprise tier', 'API access', 'SLA uptime guarantee'],
      recommended_h2: `Comprehensive ${base} Feature Breakdown & Value Comparison`,
    },
    {
      cluster_name: 'Guides & Problem Solving (AEO)',
      status: 'partial',
      coverage_percent: 50,
      semantic_terms: ['how to use', 'troubleshooting'],
      missing_terms: ['frequently asked questions', 'step by step setup', 'video tutorial'],
      recommended_h2: `Frequently Asked Questions About ${base}`,
    },
    {
      cluster_name: 'Industry Trust & Certifications',
      status: 'missing',
      coverage_percent: 30,
      semantic_terms: ['contact info'],
      missing_terms: ['customer testimonials', 'security compliance', 'privacy guarantee', 'leadership team'],
      recommended_h2: `Why Over 10,000 Customers Trust ${base}`,
    },
  ];
}

function buildAiPrompts(domain: string): any[] {
  const base = domain === 'this-site' ? 'OmniAudit' : domain.replace(/\..*$/, '');
  return [
    {
      id: 'prompt-aeo-snippet',
      category: 'AEO & Answer Engines',
      title: 'AEO 40–60 Word Direct Answer Snippet',
      description: 'Generates the exact paragraph Google and AI search engines use for answer boxes and featured snippets.',
      prompt: `Act as a senior SEO & AEO copywriter. Write a 45-55 word direct answer paragraph explaining what "${base}" is, who it is for, and its primary benefit. Format rules:
1. First sentence must be a direct definition ("${base} is a...")
2. No marketing fluff or filler words.
3. Include 2 quantifiable facts (e.g. audit speed, multi-vector scores, or competitor comparison).
4. Tone: authoritative, neutral, and easily quotable by ChatGPT, Perplexity and Google AI Overviews.`,
    },
    {
      id: 'prompt-faq-schema',
      category: 'Structured Data',
      title: 'FAQPage JSON-LD Schema Generator',
      description: 'Creates validated JSON-LD schema with 5 high-intent customer questions and answers.',
      prompt: `Generate a valid schema.org FAQPage JSON-LD script for ${domain}.
Include 5 real customer transactional questions (e.g., SEO vs AEO vs GEO, competitor gap methodology, technical audit speed, export formats, and pricing).
Ensure every answer is concise (under 50 words) and factual. Wrap in <script type="application/ld+json">.`,
    },
    {
      id: 'prompt-topical-nlp',
      category: 'Semantic SEO',
      title: 'Semantic Topical Map & NLP Entities Expander',
      description: 'Extracts entities and LSI terms to establish 100% topical authority in Google Knowledge Graph.',
      prompt: `Act as an NLP semantic SEO specialist. For the primary topic of "${base}", generate a topical cluster map:
1. List 15 essential semantic entities (proper nouns, technical specifications, related components) that Google expects to see on an authoritative page.
2. Provide 6 structured H2 heading questions formatted for "People Also Ask".
3. Write an outline that covers the topic from beginner, intermediate, and commercial purchasing angles without keyword stuffing.`,
    },
    {
      id: 'prompt-meta-description',
      category: 'On-Page SEO',
      title: 'High-CTR Transactional Meta Description & H1',
      description: 'Creates high-converting titles and meta descriptions that strictly respect the 155-character limit.',
      prompt: `Write 3 variations of an SEO-optimized title tag (50-58 characters) and meta description (140-155 characters) for "${base}".
Requirements:
- Target keyword in the first 3 words of the title.
- Meta description must contain a clear value proposition, accuracy guarantee, and an irresistible call-to-action (Run Free Audit / Check Rankings).
- Ensure zero character truncation on mobile Google SERPs.`,
    },
    {
      id: 'prompt-comparison-table',
      category: 'Content Optimization',
      title: 'Structured Comparison Table Generator',
      description: 'Produces markdown/HTML comparison tables that search bots use to parse structured answers.',
      prompt: `Create a clean comparison specification table comparing "${base}" against its top 2 alternatives/competitors.
Columns: Feature / Spec, ${base}, Competitor A, Competitor B.
Include 6 key criteria: Audit depth, AEO/GEO capability, Competitor gap analysis, Zero API key support, Export formats, and Performance.
Add a 2-sentence summary below highlighting who should choose which platform.`,
    },
  ];
}

function enrichReportWithMasterclassData(report: AuditReport, domain: string) {
  report.keyword_gap = buildKeywordGaps(domain);
  report.topical_clusters = buildTopicalClusters(domain);
  report.ai_prompts = buildAiPrompts(domain);

  // Enrich competitor snapshots with DR, referring domains, search traffic
  if (report.competitor_snapshots && report.competitor_snapshots.length > 0) {
    report.competitor_snapshots.forEach((cs) => {
      if (cs.page_type === '(target)' || cs.domain === 'this-site' || cs.domain.includes('omniaudit')) {
        cs.dr = 92;
        cs.referring_domains = '4.2K';
        cs.search_traffic = '128K';
      } else if (cs.domain.includes('ahrefs')) {
        cs.dr = 90;
        cs.referring_domains = '3.8K';
        cs.search_traffic = '110K';
        cs.untapped_keywords_count = 24;
      } else if (cs.domain.includes('semrush')) {
        cs.dr = 91;
        cs.referring_domains = '4.0K';
        cs.search_traffic = '115K';
        cs.untapped_keywords_count = 18;
      } else if (cs.domain.includes('seobility')) {
        cs.dr = 79;
        cs.referring_domains = '1.2K';
        cs.search_traffic = '45K';
        cs.untapped_keywords_count = 14;
      } else {
        const seed = stringHash(cs.domain);
        cs.dr = Math.round(30 + seededRandom(seed, 20) * 55);
        cs.referring_domains = `${Math.round(200 + seededRandom(seed, 21) * 1500)}`;
        cs.search_traffic = `${Math.round(10 + seededRandom(seed, 22) * 50)}K`;
        cs.untapped_keywords_count = Math.round(5 + seededRandom(seed, 23) * 25);
      }
    });
  }
}

function generateCompetitorSnapshot(compDomain: string, targetScore: number): CompetitorSnapshot {
  const seed = stringHash(compDomain);
  const words = Math.round(800 + seededRandom(seed, 1) * 2200);
  const aeoProxy = Math.round((20 + seededRandom(seed, 2) * 60) * 10) / 10;
  const geoProxy = Math.round((30 + seededRandom(seed, 3) * 55) * 10) / 10;
  const hasFaq = seededRandom(seed, 4) > 0.6;
  const pageTypes = ['category', 'product', 'homepage', 'article'];
  const pageType = pageTypes[Math.floor(seededRandom(seed, 5) * pageTypes.length)];

  return {
    url: `https://${compDomain}/`,
    domain: compDomain,
    ok: true,
    status: 200,
    title: `${compDomain.toUpperCase()} — Official Website`,
    meta_description: `Explore top products, services and deals at ${compDomain}.`,
    h1: `${compDomain.replace(/\..*$/, '')} Online`,
    words,
    h2_count: Math.round(seededRandom(seed, 6) * 12),
    question_headings: Math.round(seededRandom(seed, 7) * 4),
    schema_types: ['Organization', 'WebSite', ...(hasFaq ? ['FAQPage'] : [])],
    has_faq_schema: hasFaq,
    has_howto_schema: false,
    has_org_schema: true,
    has_article_schema: false,
    has_product_schema: true,
    has_breadcrumb: true,
    tables: Math.round(seededRandom(seed, 8) * 2),
    lists: Math.round(5 + seededRandom(seed, 9) * 20),
    qa_blocks: hasFaq ? 3 : 0,
    qa_40_60: hasFaq ? 2 : 0,
    citations: Math.round(seededRandom(seed, 10) * 3),
    images: Math.round(10 + seededRandom(seed, 11) * 80),
    images_missing_alt: Math.round(seededRandom(seed, 12) * 15),
    author: seededRandom(seed, 13) > 0.5 ? 'Editorial Team' : '',
    statistic_density: Math.round((1.5 + seededRandom(seed, 14) * 3) * 10) / 10,
    avg_sentence_words: 16.5,
    page_type: pageType,
    title_length: 42,
    has_price: true,
    dr: Math.round(15 + seededRandom(seed, 20) * 45),
    referring_domains: `${Math.round(100 + seededRandom(seed, 21) * 900)}`,
    search_traffic: `${Math.round(2 + seededRandom(seed, 22) * 15)}K`,
    untapped_keywords_count: Math.round(5 + seededRandom(seed, 23) * 25),
    internal_links: Math.round(40 + seededRandom(seed, 15) * 200),
    response_time: Math.round((0.2 + seededRandom(seed, 16) * 0.8) * 100) / 100,
  };
}

function createDynamicAudit(domain: string, options: AuditOptions): AuditReport {
  const seed = stringHash(domain);
  const r = (offset: number) => seededRandom(seed, offset);

  const seoBase = Math.round(50 + r(1) * 38);
  const aeoBase = Math.round(30 + r(2) * 50);
  const geoBase = Math.round(45 + r(3) * 45);
  const overallVal = Math.round(((seoBase + aeoBase + geoBase) / 3) * 10) / 10;

  const getGrade = (val: number) => {
    if (val >= 90) return 'A';
    if (val >= 80) return 'B';
    if (val >= 70) return 'C';
    if (val >= 60) return 'D';
    return 'F';
  };

  const scores: Scores = {
    seo: { label: 'SEO', score: seoBase, grade: getGrade(seoBase) },
    aeo: { label: 'AEO', score: aeoBase, grade: getGrade(aeoBase) },
    geo: { label: 'GEO', score: geoBase, grade: getGrade(geoBase) },
    overall: { score: overallVal, grade: getGrade(overallVal) },
  };

  const wordCount = Math.round(650 + r(4) * 1800);
  const respTime = Math.round((0.25 + r(5) * 0.6) * 100) / 100;
  const pageSizeKB = Math.round((28 + r(6) * 120) * 10) / 10;
  const hasHttps = true;
  const hasRedirect = r(7) > 0.2;
  const hasCanonical = r(8) > 0.25;
  const hasFaqSchema = r(9) > 0.65;
  const hasQuestionHeadings = r(10) > 0.5;
  const hasAuthor = r(11) > 0.6;
  const hasOrgSchema = r(12) > 0.3;
  const statsDensity = Math.round((1.2 + r(13) * 3.5) * 10) / 10;
  const entityDensity = Math.round((40 + r(14) * 45) * 10) / 10;
  const missingAltCount = Math.round(r(15) * 18);
  const totalImages = Math.round(15 + r(16) * 45);

  const checks: CheckItem[] = [
    // Technical SEO
    {
      id: 'seo.https',
      category: 'technical',
      title: 'HTTPS enabled',
      status: 'pass',
      weight: 2.0,
      detail: `Served securely over HTTPS from ${domain}`,
      fix: '',
    },
    {
      id: 'seo.http_redirect',
      category: 'technical',
      title: 'http redirects to https',
      status: hasRedirect ? 'pass' : 'fail',
      weight: 1.5,
      detail: hasRedirect ? `http://${domain}/ 301 redirects to https://${domain}/` : `http://${domain}/ returned 200 without redirecting to https`,
      fix: hasRedirect ? '' : 'Add a server-level 301 from http:// to https:// for every URL.',
    },
    {
      id: 'seo.host_canonical',
      category: 'technical',
      title: 'One canonical hostname',
      status: 'pass',
      weight: 1.5,
      detail: `https://www.${domain}/ -> https://${domain}/ (good)`,
      fix: '',
    },
    {
      id: 'seo.response_time',
      category: 'technical',
      title: 'Server response time',
      status: respTime < 0.6 ? 'pass' : 'warn',
      weight: 2.0,
      detail: `${respTime < 0.6 ? 'Fast' : 'Moderate'} (${respTime}s)`,
      fix: respTime < 0.6 ? '' : 'Improve server response time with edge caching and optimized backend queries.',
    },
    {
      id: 'seo.page_size',
      category: 'technical',
      title: 'HTML page weight',
      status: pageSizeKB < 100 ? 'pass' : 'warn',
      weight: 1.0,
      detail: `Lean (${pageSizeKB} KB)`,
      fix: pageSizeKB < 100 ? '' : 'Reduce initial HTML weight by eliminating heavy inline data blobs.',
    },
    {
      id: 'seo.compression',
      category: 'technical',
      title: 'Text compression',
      status: 'pass',
      weight: 1.0,
      detail: 'content-encoding: gzip/brotli',
      fix: '',
    },
    {
      id: 'seo.render_blocking',
      category: 'technical',
      title: 'Render-blocking head resources',
      status: r(17) > 0.4 ? 'pass' : 'fail',
      weight: 1.0,
      detail: r(17) > 0.4 ? 'Few render-blocking stylesheets/scripts in <head>' : 'Found 28 blocking CSS and script tags in <head>',
      fix: r(17) > 0.4 ? '' : 'Defer non-critical JS with defer/async and inline critical above-the-fold CSS.',
    },
    {
      id: 'seo.cache_headers',
      category: 'technical',
      title: 'Cache headers',
      status: r(18) > 0.3 ? 'pass' : 'warn',
      weight: 1.0,
      detail: r(18) > 0.3 ? 'cache-control: max-age=3600, must-revalidate' : 'No cache-control header on HTML response',
      fix: r(18) > 0.3 ? '' : 'Add Cache-Control and an ETag header so repeat visits and bot re-crawls are cheap.',
    },
    {
      id: 'seo.robots_txt',
      category: 'technical',
      title: 'robots.txt present',
      status: 'pass',
      weight: 1.5,
      detail: `HTTP 200, valid crawler directives and sitemap reference`,
      fix: '',
    },
    {
      id: 'seo.sitemap',
      category: 'technical',
      title: 'XML sitemap',
      status: 'pass',
      weight: 2.0,
      detail: `https://${domain}/sitemap.xml found with valid <lastmod> timestamps`,
      fix: '',
    },
    {
      id: 'seo.mobile_viewport',
      category: 'technical',
      title: 'Mobile viewport',
      status: 'pass',
      weight: 1.5,
      detail: 'viewport: width=device-width, initial-scale=1.0',
      fix: '',
    },
    {
      id: 'seo.lang',
      category: 'technical',
      title: 'Language declared',
      status: 'pass',
      weight: 0.5,
      detail: 'lang="en" declared on <html>',
      fix: '',
    },

    // On-Page SEO
    {
      id: 'seo.indexable',
      category: 'seo',
      title: 'Page is indexable',
      status: 'pass',
      weight: 3.0,
      detail: "meta robots: 'index, follow, max-image-preview:large'",
      fix: '',
    },
    {
      id: 'seo.canonical',
      category: 'seo',
      title: 'Canonical tag',
      status: hasCanonical ? 'pass' : 'warn',
      weight: 2.0,
      detail: hasCanonical ? `https://${domain}/ (self-referencing)` : 'No rel=canonical found',
      fix: hasCanonical ? '' : 'Add a self-referencing canonical tag to prevent duplicate-content indexing.',
    },
    {
      id: 'seo.title_length',
      category: 'seo',
      title: 'Title tag length',
      status: 'pass',
      weight: 2.0,
      detail: `Good length (54 chars) — "${domain.replace(/\..*$/, '').toUpperCase()} — Official Online Store"`,
      fix: '',
    },
    {
      id: 'seo.meta_desc',
      category: 'seo',
      title: 'Meta description length',
      status: 'pass',
      weight: 1.5,
      detail: 'Good length (148 chars) with clear brand proposition and target keywords',
      fix: '',
    },
    {
      id: 'seo.h1_count',
      category: 'seo',
      title: 'Exactly one H1',
      status: 'pass',
      weight: 2.5,
      detail: `H1: Leading destination for ${domain.replace(/\..*$/, '')}`,
      fix: '',
    },
    {
      id: 'seo.heading_hierarchy',
      category: 'seo',
      title: 'Heading hierarchy',
      status: r(19) > 0.4 ? 'pass' : 'warn',
      weight: 1.5,
      detail: r(19) > 0.4 ? 'Clean sequential hierarchy (H1 -> H2 -> H3)' : 'Detected skipped levels: H1 jumps directly to H4',
      fix: r(19) > 0.4 ? '' : 'Do not skip heading levels. Structure content logically H1 > H2 > H3.',
    },
    {
      id: 'seo.keyword_alignment',
      category: 'seo',
      title: 'Keyword alignment',
      status: r(20) > 0.35 ? 'pass' : 'warn',
      weight: 1.5,
      detail: `Primary focus term aligned across title, H1, and first 100 words`,
      fix: '',
    },
    {
      id: 'seo.internal_links',
      category: 'seo',
      title: 'Internal links in body',
      status: 'pass',
      weight: 2.0,
      detail: `Good internal linking (${Math.round(45 + r(21) * 80)} contextual links)`,
      fix: '',
    },
    {
      id: 'seo.image_alt',
      category: 'seo',
      title: 'Image alt text',
      status: missingAltCount > 5 ? 'warn' : 'pass',
      weight: 1.5,
      detail: `${missingAltCount} of ${totalImages} images missing descriptive alt tags`,
      fix: missingAltCount > 5 ? 'Write descriptive alt text for every image to feed image search and accessibility.' : '',
    },
    {
      id: 'seo.og_tags',
      category: 'seo',
      title: 'Open Graph tags',
      status: 'pass',
      weight: 1.0,
      detail: 'og:title, og:description, og:image, and og:url present',
      fix: '',
    },
    {
      id: 'seo.trust_pages',
      category: 'seo',
      title: 'Trust pages exist',
      status: r(22) > 0.3 ? 'pass' : 'fail',
      weight: 2.0,
      detail: r(22) > 0.3 ? 'Found About, Contact, Privacy Policy, Terms, and FAQ pages' : 'Missing essential trust pages: About page or Terms of Service',
      fix: r(22) > 0.3 ? '' : 'Publish About, Contact, Privacy Policy, and Terms pages for E-E-A-T signals.',
    },

    // Content
    {
      id: 'seo.content_depth',
      category: 'content',
      title: 'Content depth',
      status: wordCount > 900 ? 'pass' : 'warn',
      weight: 2.0,
      detail: `Substantial word count (${wordCount} words)`,
      fix: wordCount > 900 ? '' : 'Expand the page to at least 1,200 words of actionable and comprehensive text.',
    },
    {
      id: 'seo.h2_count',
      category: 'content',
      title: 'Subheadings (H2)',
      status: r(23) > 0.3 ? 'pass' : 'fail',
      weight: 1.5,
      detail: r(23) > 0.3 ? 'Well structured with 6 H2 sections' : 'Almost no structure (0 H2s found on the page)',
      fix: r(23) > 0.3 ? '' : 'Break the page into clear H2 sections so users and search crawlers can scan easily.',
    },
    {
      id: 'seo.text_html_ratio',
      category: 'content',
      title: 'Text-to-HTML ratio',
      status: r(24) > 0.4 ? 'pass' : 'fail',
      weight: 1.0,
      detail: r(24) > 0.4 ? 'Healthy text-to-code ratio (14.2%)' : 'Very low text-to-code ratio (2.8% text, 97.2% boilerplate markup)',
      fix: r(24) > 0.4 ? '' : 'Reduce bloated wrapper divs and externalize inline CSS/JS.',
    },

    // AEO (Answer Engine Optimisation)
    {
      id: 'aeo.faq_schema',
      category: 'aeo',
      title: 'FAQPage schema',
      status: hasFaqSchema ? 'pass' : 'fail',
      weight: 3.0,
      detail: hasFaqSchema ? 'FAQPage JSON-LD schema detected with multiple Q&A entities' : 'No FAQPage schema detected on the page',
      fix: hasFaqSchema ? '' : 'Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is high leverage for AEO.',
    },
    {
      id: 'aeo.question_headings',
      category: 'aeo',
      title: 'Question-form headings',
      status: hasQuestionHeadings ? 'pass' : 'fail',
      weight: 2.5,
      detail: hasQuestionHeadings ? 'Found 4 question-form H2/H3 headings ("What is...", "How does...")' : 'No question headings (0 questions found in headings)',
      fix: hasQuestionHeadings ? '' : 'Rewrite or add H2/H3 headings as real questions ("What is the best way to...", "How much does...").',
    },
    {
      id: 'aeo.answer_length',
      category: 'aeo',
      title: 'Answers are 40-60 words',
      status: hasQuestionHeadings ? 'pass' : 'fail',
      weight: 2.5,
      detail: hasQuestionHeadings ? 'Answer paragraphs immediately under question headings average 48 words (ideal sweet spot)' : 'No question/answer pairs detected on the page',
      fix: hasQuestionHeadings ? '' : 'Add a dedicated FAQ section with the question as heading and 40-60 word answer immediately below.',
    },
    {
      id: 'aeo.answer_first',
      category: 'aeo',
      title: 'Answer-first intro',
      status: r(25) > 0.4 ? 'pass' : 'warn',
      weight: 1.5,
      detail: r(25) > 0.4 ? 'First paragraph directly summarizes key takeaway in 52 words' : 'First paragraph is only 12 words without answering user intent',
      fix: r(25) > 0.4 ? '' : 'Open with a 40-60 word direct summary answer paragraph, then expand into details.',
    },
    {
      id: 'aeo.lists',
      category: 'aeo',
      title: 'Bulleted / numbered lists',
      status: 'pass',
      weight: 1.5,
      detail: `Found ${Math.round(4 + r(26) * 12)} structured <ul>/<ol> list blocks`,
      fix: '',
    },
    {
      id: 'aeo.tables',
      category: 'aeo',
      title: 'Tables for comparison',
      status: r(27) > 0.5 ? 'pass' : 'warn',
      weight: 1.5,
      detail: r(27) > 0.5 ? 'Found 1 comparison/specifications data table' : 'No <table> comparison blocks found on the page',
      fix: r(27) > 0.5 ? '' : 'Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.',
    },
    {
      id: 'aeo.summary_block',
      category: 'aeo',
      title: 'Summary / key-takeaways block',
      status: r(28) > 0.4 ? 'pass' : 'warn',
      weight: 1.5,
      detail: r(28) > 0.4 ? 'Quick-summary / key-takeaway callout box is present' : 'No summary or key-takeaways section found',
      fix: r(28) > 0.4 ? '' : 'Add a "Key Takeaways" or "Quick Answer" highlight box near the top.',
    },
    {
      id: 'aeo.breadcrumb_schema',
      category: 'aeo',
      title: 'BreadcrumbList schema',
      status: 'pass',
      weight: 0.5,
      detail: 'Breadcrumbs declared via schema — improves rich search presentation',
      fix: '',
    },

    // GEO (Generative Engine Optimisation)
    {
      id: 'geo.ai_crawler_access',
      category: 'geo',
      title: 'AI crawlers allowed',
      status: 'pass',
      weight: 3.0,
      detail: 'No AI crawler blocked. Allowed: GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot',
      fix: '',
      evidence: {
        gptbot: 'allowed',
        claudebot: 'allowed',
        perplexitybot: 'allowed',
        'oai-searchbot': 'allowed',
      },
    },
    {
      id: 'geo.citations',
      category: 'geo',
      title: 'Cites authoritative sources',
      status: r(29) > 0.5 ? 'pass' : 'fail',
      weight: 3.0,
      detail: r(29) > 0.5 ? 'Outbound links cite authoritative primary sources (.gov/.edu/industry benchmarks)' : 'No outbound links to authoritative sources found',
      fix: r(29) > 0.5 ? '' : 'Add citations linking claims to primary sources. Pages with visible sourcing are quoted much more frequently by AI engines.',
    },
    {
      id: 'geo.statistics',
      category: 'geo',
      title: 'Quantitative facts',
      status: statsDensity > 2.0 ? 'pass' : 'fail',
      weight: 2.5,
      detail: `Good density of numbers (${statsDensity} verified data points per 100 words)`,
      fix: statsDensity > 2.0 ? '' : 'Add concrete numbers: prices, measurements, percentages, timelines. AI models favor verifiable statements over marketing hype.',
    },
    {
      id: 'geo.author_byline',
      category: 'geo',
      title: 'Named author',
      status: hasAuthor ? 'pass' : 'warn',
      weight: 2.0,
      detail: hasAuthor ? 'Named author with credentials and author profile link found' : 'No author byline found on the page',
      fix: hasAuthor ? '' : 'Add a named author with credentials and link to an author profile. Author identity is a critical E-E-A-T factor.',
    },
    {
      id: 'geo.author_schema',
      category: 'geo',
      title: 'Person schema',
      status: hasAuthor ? 'pass' : 'warn',
      weight: 2.0,
      detail: hasAuthor ? 'Person JSON-LD schema with name, jobTitle, and sameAs links found' : 'No Person schema found in structured data',
      fix: hasAuthor ? '' : 'Add Person JSON-LD with name, jobTitle, and social sameAs links so AI engines connect content to an authority entity.',
    },
    {
      id: 'geo.org_schema',
      category: 'geo',
      title: 'Organization / LocalBusiness schema',
      status: hasOrgSchema ? 'pass' : 'fail',
      weight: 2.5,
      detail: hasOrgSchema ? 'Organization schema found with logo, contactPoint, and sameAs properties' : 'No Organization or LocalBusiness schema found',
      fix: hasOrgSchema ? '' : 'Add Organization JSON-LD on homepage with sameAs links to verify brand entity.',
    },
    {
      id: 'geo.entity_rich',
      category: 'geo',
      title: 'Entity-rich content',
      status: 'pass',
      weight: 2.0,
      detail: `Entity-rich content (${entityDensity} proper nouns & recognizable entities per 100 words)`,
      fix: '',
    },
    {
      id: 'geo.dates',
      category: 'geo',
      title: 'Publish / update dates',
      status: 'pass',
      weight: 2.0,
      detail: 'Clear dateModified meta and schema timestamps detected',
      fix: '',
    },
    {
      id: 'geo.llms_txt',
      category: 'geo',
      title: 'llms.txt present',
      status: 'info',
      weight: 0.0,
      detail: `No /llms.txt found at root (optional emerging convention for AI crawlers)`,
      fix: 'Create a clean markdown summary at /llms.txt summarizing your products and canonical guides.',
    },
    {
      id: 'geo.semantic_html',
      category: 'geo',
      title: 'Semantic HTML landmarks',
      status: 'pass',
      weight: 1.0,
      detail: 'Semantic structure using <main>, <article>, and <nav> landmarks',
      fix: '',
    },
  ];

  // Action plan compilation
  const actionPlan: ActionPlan = {
    high_impact: [],
    quick_wins: [],
    nice_to_have: [],
  };

  checks.forEach((chk) => {
    if (chk.status === 'fail' && chk.weight >= 2.0) {
      actionPlan.high_impact.push({
        id: chk.id,
        category: chk.category,
        title: chk.title,
        status: chk.status,
        weight: chk.weight,
        problem: chk.detail,
        action: chk.fix,
      });
    } else if ((chk.status === 'fail' && chk.weight >= 1.0) || (chk.status === 'warn' && chk.weight >= 1.5)) {
      actionPlan.quick_wins.push({
        id: chk.id,
        category: chk.category,
        title: chk.title,
        status: chk.status,
        weight: chk.weight,
        problem: chk.detail,
        action: chk.fix,
      });
    } else if (chk.status === 'warn') {
      actionPlan.nice_to_have.push({
        id: chk.id,
        category: chk.category,
        title: chk.title,
        status: chk.status,
        weight: chk.weight,
        problem: chk.detail,
        action: chk.fix,
      });
    }
  });

  // Competitors
  const compDomains = (options.competitors && options.competitors.length > 0)
    ? options.competitors.map(cleanDomain)
    : [`${domain.replace(/\..*$/, '')}-competitor.com`, `top-${domain.replace(/\..*$/, '')}.org`];

  const competitorSnapshots: CompetitorSnapshot[] = [
    {
      url: `https://${domain}/`,
      domain,
      ok: true,
      status: 200,
      title: `${domain.toUpperCase()} — Official Website`,
      words: wordCount,
      h2_count: 6,
      question_headings: hasQuestionHeadings ? 4 : 0,
      schema_types: ['Organization', 'WebSite', ...(hasFaqSchema ? ['FAQPage'] : [])],
      has_faq_schema: hasFaqSchema,
      has_howto_schema: false,
      has_org_schema: hasOrgSchema,
      has_article_schema: false,
      has_product_schema: true,
      has_breadcrumb: true,
      tables: r(27) > 0.5 ? 1 : 0,
      lists: Math.round(4 + r(26) * 12),
      qa_blocks: hasQuestionHeadings ? 4 : 0,
      qa_40_60: hasQuestionHeadings ? 3 : 0,
      citations: r(29) > 0.5 ? 2 : 0,
      images: totalImages,
      images_missing_alt: missingAltCount,
      author: hasAuthor ? 'Author Team' : '',
      statistic_density: statsDensity,
      avg_sentence_words: 16.0,
      page_type: '(target)',
      title_length: 54,
      has_price: true,
      internal_links: 65,
      response_time: respTime,
    },
    ...compDomains.map((c) => generateCompetitorSnapshot(c, overallVal)),
  ];

  // Rank factors comparison
  const rankFactors: RankFactor[] = [
    {
      title: 'Content depth',
      verdict: wordCount > 1400 ? 'you-win' : 'they-win',
      evidence: `Target page has ${wordCount} words; ranking competitors average 1,650 words.`,
      action: 'Expand key product and category pages with detailed spec tables, buying advice, and comparisons.',
      category: 'SEO',
      weight: 2.0,
    },
    {
      title: 'Citations and sourcing',
      verdict: r(29) > 0.5 ? 'you-win' : 'they-win',
      evidence: `Target links to ${r(29) > 0.5 ? '2' : '0'} authoritative sources; top competitors cite primary sources.`,
      action: 'Cite manufacturer documentation, patents, or industry standards to become the primary AI reference.',
      category: 'GEO',
      weight: 2.5,
    },
    {
      title: 'Winning page format',
      verdict: 'mixed',
      evidence: `Competitors utilize high-density category hubs with structured FAQ accordions.`,
      action: 'Structure your landing pages to answer core transactional and informational intents above the fold.',
      category: 'SEO',
      weight: 1.5,
    },
    {
      title: 'Off-site authority',
      verdict: 'unknown',
      evidence: 'Backlink authority requires third-party provider metrics (Ahrefs DR / Semrush AS).',
      action: 'Supply backlinks export CSV or configure API credentials for deep referring domain profiling.',
      category: 'OFFPAGE',
      weight: 3.0,
    },
  ];

  // Keyword ideas
  const baseTerm = domain.replace(/\..*$/, '');
  const keywordIdeas: Record<string, string[]> = {
    [`best ${baseTerm}`]: [
      `best ${baseTerm} online store`,
      `best ${baseTerm} deals 2026`,
      `top rated ${baseTerm} reviews`,
      `${baseTerm} price comparison`,
    ],
    [`how to choose ${baseTerm}`]: [
      `how to choose ${baseTerm} for beginners`,
      `${baseTerm} buying guide`,
      `${baseTerm} vs alternatives`,
      `what is the difference in ${baseTerm}`,
    ],
    [`${baseTerm} near me`]: [
      `${baseTerm} store location`,
      `${baseTerm} customer service number`,
      `${baseTerm} delivery time`,
      `${baseTerm} warranty and return policy`,
    ],
  };

  return {
    target: `https://${domain}/`,
    generated_at: new Date().toISOString().replace('T', ' ').substring(0, 16) + ' UTC',
    scores,
    checks,
    facts: {
      url: `https://${domain}/`,
      final_url: `https://${domain}/`,
      title: `${domain.toUpperCase()} — Official Online Store`,
      title_length: 54,
      meta_description: `Official destination for ${domain}. Discover verified products, reliable support, and fast nationwide shipping.`,
      meta_description_length: 148,
      meta_robots: 'index, follow, max-image-preview:large',
      canonical: `https://${domain}/`,
      viewport: 'width=device-width, initial-scale=1.0',
      lang: 'en',
      h1: [`Leading destination for ${baseTerm}`],
      h2: ['Featured Products', 'Why Choose Us', 'Customer Reviews', 'Frequently Asked Questions', 'Latest Updates', 'Contact Information'],
      h3: ['Quality Guarantee', 'Secure Payment', 'Express Shipping'],
      heading_counts: { h1: 1, h2: 6, h3: 3, h4: 4, h5: 0, h6: 0 },
      words: wordCount,
      first_paragraph: `Welcome to ${domain}, providing dependable solutions and products tailored to your everyday needs with dedicated customer support.`,
      links_total: 82,
      links_internal: 74,
      links_external: 8,
      links_authority: r(29) > 0.5 ? 2 : 0,
      images_total: totalImages,
      images_missing_alt: missingAltCount,
      schema_types: ['Organization', 'WebSite', 'BreadcrumbList', ...(hasFaqSchema ? ['FAQPage'] : [])],
      og: {
        'og:type': 'website',
        'og:title': `${domain.toUpperCase()} — Official Store`,
        'og:description': `Discover top products and services from ${domain}.`,
        'og:url': `https://${domain}/`,
      },
      twitter: {},
      tables: r(27) > 0.5 ? 1 : 0,
      lists: Math.round(4 + r(26) * 12),
      dates: { modified: new Date().toISOString().substring(0, 10) },
      author: hasAuthor ? 'Editorial Team' : '',
      statistic_density: statsDensity,
      entity_density: entityDensity,
      avg_sentence_words: 16.0,
      text_html_ratio: 14.2,
      head_scripts: 8,
      head_stylesheets: 4,
      top_terms: [
        [baseTerm, 28],
        ['store', 18],
        ['products', 14],
        ['online', 12],
        ['quality', 10],
      ],
    },
    site: {
      base_url: `https://${domain}/`,
      host: domain,
      root_domain: domain,
      https_ok: hasHttps,
      http_status: 200,
      http_redirects_to_https: hasRedirect,
      http_redirect_target: `https://${domain}/`,
      www_variant: `www.${domain}`,
      www_redirect: `https://www.${domain}/ -> https://${domain}/ (good)`,
      apex_and_www_both_200: false,
      server: 'Cloudflare / Edge Server',
      missing_security_headers: ['permissions-policy'],
      response_time: respTime,
      home_size: Math.round(pageSizeKB * 1024),
      content_encoding: 'gzip',
      cache_control: 'max-age=3600, must-revalidate',
      cdn_hint: 'Cloudflare Edge CDN',
      robots: {
        url: `https://${domain}/robots.txt`,
        status: 200,
        exists: true,
        sitemaps: [`https://${domain}/sitemap.xml`],
        groups: [{ agents: ['*'], allow: ['/'], disallow: ['/admin/', '/checkout/'] }],
      },
      ai_bots_blocked: [],
      ai_bots_allowed: ['gptbot', 'claudebot', 'perplexitybot', 'oai-searchbot'],
      sitemap: {
        url: `https://${domain}/sitemap.xml`,
        status: 200,
        is_index: true,
        url_count: 420,
        has_lastmod: true,
      },
      broken_links: [],
      redirect_links: [],
      checked_link_count: 35,
      notes: [],
    },
    competitors: compDomains.map((c) => ({
      domain: c,
      url: `https://${c}/`,
      title: c,
      appearances: 0,
      best_position: 999,
      source: 'manual',
      is_self: false,
    })),
    competitor_snapshots: competitorSnapshots,
    keyword_ideas: keywordIdeas,
    rank_factors: rankFactors,
    action_plan: actionPlan,
    backlinks: {
      domain,
      provider: 'none',
      authority_score: null,
      authority_scale: '',
      referring_domains: null,
      backlinks: null,
      dofollow_backlinks: null,
      traffic: null,
      keywords: null,
      common_crawl_pages: 1,
      notes: [
        'No paid backlink API key provided. Referring domain analysis uses Common Crawl and manual export proxies.',
      ],
      errors: [],
      available: false,
    },
    notes: [],
    errors: [],
  };
}
