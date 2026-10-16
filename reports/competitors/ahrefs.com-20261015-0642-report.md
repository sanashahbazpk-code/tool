# SEO / AEO / GEO Research Report

**Target:** https://ahrefs.com/site-audit  
**Generated:** 2026-10-15 13:42 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 69.8/100 | D | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 40.3/100 | F | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 64.3/100 | D | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **58.1/100** | **E** |  |

Checks run: **67** — 33 pass, 14 warnings, 10 failures, 8 informational, 2 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[AEO] Question-form headings** — No question headings (0 questions)
  - *Fix:* Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
- **[AEO] Answers are 40-60 words** — No question/answer pairs detected on the page
  - *Fix:* Add a FAQ section: question as the heading, 40-60 word answer immediately below.
- **[GEO] Organization / LocalBusiness schema** — No Organization or LocalBusiness schema
  - *Fix:* Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.
- **[SEO] Structured data present** — No JSON-LD or microdata found
  - *Fix:* Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts.
- **[SEO] Trust pages exist** — Missing core pages: Contact page
  - *Fix:* Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.
- **[GEO] Machine-parseable formatting** — No tables or lists on the page
  - *Fix:* Use tables for comparisons and specs, and lists for options and steps. Plain prose is much harder for an AI to lift cleanly.
- **[SEO] Image alt text** — Most images missing alt (44.8% missing)
  - *Fix:* Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding.

## 3. Why they rank — factor by factor

_No competitor comparison was possible (no competitor pages were fetched)._

## 4. Competitors

_No competitors discovered. Pass `--competitors a.com,b.com` or provide a SERP API key._

## 5. Keyword ideas

_Autocomplete returned nothing. Check network access, or supply seeds with `--seeds`._

## 6. Backlinks and off-site authority

**No backlink API key available.** This report cannot tell you how many referring domains the site or its competitors have. That is a gap, not a zero.

| What you can do | Cost | What you get |
|---|---|---|
| Google Search Console → Links (your own site) | Free | Real backlinks and top linking sites, straight from Google |
| Bing Webmaster Tools → Backlinks | Free | Second opinion on your own backlinks |
| Ahrefs Webmaster Tools | Free | DR and referring domains for your own verified site |
| Export a competitor's backlinks from any tool, then `--backlinks-csv file.csv` | Depends | Full anchor, follow/nofollow and risk analysis by this tool |
| Semrush or Ahrefs API key in an env var | Paid | Automatic referring-domain counts, sitewide |


## 7. Action plan

### P0 — High impact failures

These are failing checks with heavy weight. Fix these first.

1. **[AEO] FAQPage schema**
   - Problem: No FAQPage schema
   - Do this: Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
2. **[AEO] Answers are 40-60 words**
   - Problem: No question/answer pairs detected on the page
   - Do this: Add a FAQ section: question as the heading, 40-60 word answer immediately below.
3. **[AEO] Question-form headings**
   - Problem: No question headings (0 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
4. **[GEO] Organization / LocalBusiness schema**
   - Problem: No Organization or LocalBusiness schema
   - Do this: Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Quantitative facts**
   - Problem: Few numbers (1.76 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
2. **[GEO] Named author**
   - Problem: No author byline found
   - Do this: Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh.
3. **[GEO] Person schema**
   - Problem: No Person schema
   - Do this: Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity.
4. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
5. **[GEO] Publish / update dates**
   - Problem: No datePublished / dateModified found
   - Do this: Add visible and machine-readable publish and last-updated dates.
6. **[GEO] Q&A pairs for summarisation**
   - Problem: No question-and-answer structure
   - Do this: Add an FAQ block. It is what Perplexity and AI Overviews quote most often.
7. **[GEO] Machine-parseable formatting**
   - Problem: No tables or lists on the page
   - Do this: Use tables for comparisons and specs, and lists for options and steps. Plain prose is much harder for an AI to lift cleanly.
8. **[SEO] Keyword alignment**
   - Problem: 'ahrefs' only appears in: title, URL
   - Do this: Put the primary keyword in the title, the H1, the URL slug and the first 100 words.
9. **[SEO] Structured data present**
   - Problem: No JSON-LD or microdata found
   - Do this: Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts.
10. **[SEO] Trust pages exist**
   - Problem: Missing core pages: Contact page
   - Do this: Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.
11. **[SEO] Image alt text**
   - Problem: Most images missing alt (44.8% missing)
   - Do this: Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding.
12. **[TECHNICAL] Render-blocking head resources**
   - Problem: Too many (16 files)
   - Do this: Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Answer-first intro**
   - Problem: First paragraph is 8 words
   - Do this: Open with a 40-60 word paragraph that directly answers the page's main question, then expand.
2. **[AEO] Bulleted / numbered lists**
   - Problem: No <ul>/<ol> on the page
   - Do this: Convert features, specs, steps and options into bullet lists. Lists are far easier to lift into an answer box.
3. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
4. **[SEO] Heading hierarchy**
   - Problem: 2 level jump(s), e.g. H2 -> H4
   - Do this: Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure.
5. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
6. **[GEO] Semantic HTML landmarks**
   - Problem: Only found: nav
   - Do this: Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome.
7. **[TECHNICAL] Sitemap lastmod dates**
   - Problem: No <lastmod> values found in the sitemap
   - Do this: Add accurate <lastmod> dates so crawlers can prioritise changed pages.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'not set (indexable by default)' | — |
| Canonical tag | ✅ PASS | https://ahrefs.com/site-audit (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (31 chars) | — |
| Meta description length | ✅ PASS | Good length (107 chars) | — |
| Exactly one H1 | ✅ PASS | H1: Site Audit | — |
| Heading hierarchy | ⚠️ WARN | 2 level jump(s), e.g. H2 -> H4 | Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure. |
| Keyword alignment | ⚠️ WARN | 'ahrefs' only appears in: title, URL | Put the primary keyword in the title, the H1, the URL slug and the first 100 words. |
| Internal links in body | ✅ PASS | Good internal linking (99 links) | — |
| Navigational links | ℹ️ INFO | 55 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 30 external links, 8 nofollow | — |
| Image alt text | ❌ FAIL | Most images missing alt (44.8% missing) | Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding. |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ❌ FAIL | No JSON-LD or microdata found | Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts. |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://ahrefs.com/site-audit | — |
| Trust pages exist | ❌ FAIL | Missing core pages: Contact page | Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source. |
| hreflang tags | ℹ️ INFO | 14 alternate language versions declared | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from ahrefs.com | — |
| http redirects to https | ✅ PASS | http:// -> https://ahrefs.com/ | — |
| One canonical hostname | ✅ PASS | https://www.ahrefs.com/ -> https://ahrefs.com (good) | — |
| Server response time | ✅ PASS | Fast (0.33s) | — |
| HTML page weight | ✅ PASS | Lean (54.9 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ❌ FAIL | Too many (16 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ✅ PASS | cache-control: no-store | — |
| Content present in the served HTML | ✅ PASS | 681 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200 | — |
| XML sitemap | ✅ PASS | https://ahrefs.com/sitemap.xml — 2043 URLs across 7 child sitemaps | — |
| Sitemap lastmod dates | ⚠️ WARN | No <lastmod> values found in the sitemap | Add accurate <lastmod> dates so crawlers can prioritise changed pages. |
| Mobile viewport | ✅ PASS | viewport: width=device-width, initial-scale=1 | — |
| Language declared | ✅ PASS | html lang="en" | — |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (9 H2s) | — |
| Content depth | ✅ PASS | Substantial (681 words) | — |
| Primary topic detected | ✅ PASS | 'ahrefs' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (0.5%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ❌ FAIL | No FAQPage schema | Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change. |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ℹ️ INFO | No QAPage/Question schema (optional) | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ❌ FAIL | No question headings (0 questions) | Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from. |
| Answers are 40-60 words | ❌ FAIL | No question/answer pairs detected on the page | Add a FAQ section: question as the heading, 40-60 word answer immediately below. |
| Definition-style openers | ⏭️ SKIP | No Q&A pairs to assess | — |
| Bulleted / numbered lists | ⚠️ WARN | No <ul>/<ol> on the page | Convert features, specs, steps and options into bullet lists. Lists are far easier to lift into an answer box. |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (46 sentences analysed) (8.37 words/sentence) | — |
| Answer-first intro | ⚠️ WARN | First paragraph is 8 words | Open with a 40-60 word paragraph that directly answers the page's main question, then expand. |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ℹ️ INFO | No BreadcrumbList schema | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 681 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ✅ PASS | 3 outbound links to authority domains (www.linkedin.com, www.youtube.com) | — |
| Quantitative facts | ⚠️ WARN | Few numbers (1.76 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ⚠️ WARN | No Person schema | Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity. |
| Organization / LocalBusiness schema | ❌ FAIL | No Organization or LocalBusiness schema | Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand. |
| Entity-rich content | ✅ PASS | Entity-rich (17.62 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ❌ FAIL | No tables or lists on the page | Use tables for comparisons and specs, and lists for options and steps. Plain prose is much harder for an AI to lift cleanly. |
| Q&A pairs for summarisation | ⚠️ WARN | No question-and-answer structure | Add an FAQ block. It is what Perplexity and AI Overviews quote most often. |
| llms.txt | ℹ️ INFO | No /llms.txt (optional; the convention is still emerging, low cost to add: a markdown index of your key pages) | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 6/8 | — |
| Semantic HTML landmarks | ⚠️ WARN | Only found: nav | Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome. |
| Quotable sentence length | ✅ PASS | Easily quotable (8.37 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | A Free SEO Audit Tool by Ahrefs (31 chars) |
| Meta description | Identify, prioritize, and fix 170+ SEO issues. Keep your website in top shape for users and search engines. (107 chars) |
| H1 | Site Audit |
| Headings | hh1=1, hh2=9, hh3=5, hh4=18, hh5=0, hh6=0 |
| Word count | 681 |
| Internal / external links | 154 / 30 |
| Authority citations | 3 |
| Images (missing alt) | 58 (26) |
| Schema types | (none) |
| Tables / lists | 0 / 0 |
| Q&A blocks (40-60 words) | 0 (0) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 1.76 |
| Avg sentence length | 8.37 words |
| Text/HTML ratio | 0.5% |
| Canonical | https://ahrefs.com/site-audit |
| Meta robots | (not set) |
| Viewport | width=device-width, initial-scale=1 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.33s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | https://ahrefs.com/ |
| www variant | https://www.ahrefs.com/ -> https://ahrefs.com (good) |
| robots.txt | HTTP 200 (1 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://ahrefs.com/sitemap.xml — 2043 URLs |
| llms.txt | absent |
| Missing security headers | permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 0, "privacy": 200, "terms": 200, "blog": 200, "shipping": 0, "returns": 200, "faq": 200} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:42 UTC._