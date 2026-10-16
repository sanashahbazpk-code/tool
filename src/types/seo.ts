export type CheckStatus = 'pass' | 'warn' | 'fail' | 'info' | 'skip';
export type CheckCategory = 'technical' | 'seo' | 'content' | 'aeo' | 'geo';
export type FactorVerdict = 'they-win' | 'you-win' | 'mixed' | 'unknown';

export interface ScoreItem {
  label: string;
  score: number;
  grade: string;
}

export interface Scores {
  seo: ScoreItem;
  aeo: ScoreItem;
  geo: ScoreItem;
  overall: {
    score: number;
    grade: string;
  };
}

export interface CheckItem {
  id: string;
  category: CheckCategory;
  title: string;
  status: CheckStatus;
  weight: number;
  detail: string;
  fix: string;
  evidence?: any;
}

export interface ActionPlanItem {
  id: string;
  category: CheckCategory;
  title: string;
  status: CheckStatus;
  weight: number;
  problem: string;
  action: string;
}

export interface ActionPlan {
  high_impact: ActionPlanItem[]; // P0
  quick_wins: ActionPlanItem[];   // P1
  nice_to_have: ActionPlanItem[]; // P2
}

export interface RankFactor {
  title: string;
  verdict: FactorVerdict;
  evidence: string;
  action: string;
  category: string;
  weight: number;
}

export interface CompetitorSnapshot {
  url: string;
  domain: string;
  ok: boolean;
  status: number;
  error?: string;
  title: string;
  meta_description?: string;
  h1?: string;
  words: number | string;
  h2_count: number;
  question_headings: number;
  schema_types: string[];
  has_faq_schema: boolean;
  has_howto_schema: boolean;
  has_org_schema: boolean;
  has_article_schema: boolean;
  has_product_schema: boolean;
  has_breadcrumb: boolean;
  tables: number;
  lists: number;
  qa_blocks: number;
  qa_40_60: number;
  citations: number;
  images: number;
  images_missing_alt: number;
  author: string;
  dates?: {
    modified?: string;
    published?: string;
  };
  aeo_proxy?: number | string;
  geo_proxy?: number | string;
  dr?: number;
  referring_domains?: number | string;
  search_traffic?: number | string;
  untapped_keywords_count?: number;
  statistic_density: number;
  avg_sentence_words: number;
  page_type: string;
  title_length: number;
  has_price: boolean;
  internal_links: number;
  response_time: number;
}

export interface BacklinkAnalysisDomain {
  domain: string;
  links: number;
  dr: number;
  sample: string;
}

export interface BacklinkAnalysisAnchor {
  anchor: string;
  count: number;
}

export interface BacklinkRiskyLink {
  source: string;
  tld: string;
  anchor: string;
}

export interface BacklinkAnalysis {
  records: number;
  referring_domains: number;
  links_per_domain: number;
  dofollow: number;
  nofollow: number;
  nofollow_ratio: number;
  avg_dr: number;
  median_dr: number;
  top_domains: BacklinkAnalysisDomain[];
  top_anchors: BacklinkAnalysisAnchor[];
  tld_distribution: Record<string, number>;
  risky_links: BacklinkRiskyLink[];
  risky_link_count: number;
  top_anchor: string;
  top_anchor_share: number;
  branded_anchor_share: number;
  commercial_anchor_share: number;
  anchor_warning: string;
  target_brand_in_anchor: string;
}

export interface BacklinksData {
  domain: string;
  provider: string;
  authority_score: number | null;
  authority_scale: string;
  referring_domains: number | null;
  backlinks: number | null;
  dofollow_backlinks: number | null;
  traffic: number | null;
  keywords: number | null;
  common_crawl_pages: number;
  analysis?: BacklinkAnalysis;
  record_count?: number;
  notes: string[];
  errors: string[];
  available: boolean;
}

export interface OnPageFacts {
  url: string;
  final_url?: string;
  title: string;
  title_length: number;
  meta_description: string;
  meta_description_length: number;
  meta_robots: string;
  canonical: string;
  viewport: string;
  lang: string;
  h1: string[];
  h2: string[];
  h3: string[];
  heading_counts: Record<string, number>;
  words: number;
  first_paragraph: string;
  links_total: number;
  links_internal: number;
  links_external: number;
  links_authority: number;
  images_total: number;
  images_missing_alt: number;
  schema_types: string[];
  og: Record<string, string>;
  twitter: Record<string, string>;
  tables: number;
  lists: number;
  blockquotes?: number;
  hreflang?: string[];
  dates?: Record<string, string>;
  author: string;
  qa_blocks?: any[];
  statistic_density: number;
  entity_density: number;
  avg_sentence_words: number;
  text_html_ratio: number;
  head_scripts: number;
  head_stylesheets: number;
  inline_script_bytes?: number;
  inline_style_bytes?: number;
  semantic_tags?: Record<string, boolean>;
  top_terms: (string | number)[][];
  html_bytes?: number;
  crawl_error?: string;
}

export interface SiteFacts {
  base_url: string;
  host: string;
  root_domain: string;
  https_ok: boolean;
  https_error?: string;
  http_status: number;
  http_redirects_to_https: boolean;
  http_redirect_target: string;
  www_variant: string;
  www_redirect: string;
  apex_and_www_both_200: boolean;
  server: string;
  powered_by?: string;
  security_headers?: Record<string, string>;
  missing_security_headers: string[];
  response_time: number;
  home_size: number;
  content_encoding: string;
  cache_control: string;
  cdn_hint: string;
  robots?: {
    url: string;
    status: number;
    exists: boolean;
    sitemaps: string[];
    groups: any[];
  };
  ai_bot_rules?: Record<string, string>;
  ai_bots_blocked: string[];
  ai_bots_allowed: string[];
  sitemap?: {
    url: string;
    status: number;
    is_index: boolean;
    url_count: number;
    child_count?: number;
    has_lastmod: boolean;
    sample?: string[];
    errors?: string[];
  };
  llms_txt?: {
    status: number;
    exists: boolean;
    size: number;
    preview: string;
  };
  broken_links: string[];
  redirect_links: string[];
  checked_link_count: number;
  notes: string[];
}

export interface KeywordGapItem {
  keyword: string;
  intent: 'transactional' | 'commercial' | 'informational';
  search_volume: number;
  cpc: string;
  your_rank: number | null;
  competitor_rank: number;
  competitor_domain: string;
  difficulty: number;
  is_low_hanging_fruit: boolean;
  opportunity_action: string;
}

export interface TopicalCluster {
  cluster_name: string;
  status: 'covered' | 'partial' | 'missing';
  coverage_percent: number;
  semantic_terms: string[];
  missing_terms: string[];
  recommended_h2: string;
}

export interface AiPromptTemplate {
  id: string;
  category: string;
  title: string;
  description: string;
  prompt: string;
}

export interface AuditReport {
  target: string;
  generated_at: string;
  scores: Scores;
  checks: CheckItem[];
  facts: OnPageFacts;
  site: SiteFacts;
  trust_paths?: Record<string, number>;
  competitors?: { domain: string; url: string; title: string; appearances?: number; best_position?: number; source?: string; is_self?: boolean; notes?: string }[];
  keyword_ideas?: Record<string, string[]>;
  competitor_snapshots?: CompetitorSnapshot[];
  backlinks?: BacklinksData;
  rank_factors?: RankFactor[];
  action_plan?: ActionPlan;
  keyword_gap?: KeywordGapItem[];
  topical_clusters?: TopicalCluster[];
  ai_prompts?: AiPromptTemplate[];
  keys_used?: Record<string, boolean>;
  notes?: string[];
  errors?: string[];
}
