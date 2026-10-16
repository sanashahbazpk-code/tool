# SEO / AEO / GEO Research Report

**Target:** https://seoreviewtools.com/  
**Generated:** 2026-10-15 13:41 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 81.2/100 | B | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 52.5/100 | E | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 78.9/100 | C | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **70.9/100** | **C** |  |

Checks run: **66** — 38 pass, 16 warnings, 5 failures, 6 informational, 1 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[AEO] Answers are 40-60 words** — Answers are the wrong length (0.0% of answers)
  - *Fix:* Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
- **[SEO] Trust pages exist** — Missing core pages: About page
  - *Fix:* Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.
- **[TECHNICAL] Render-blocking head resources** — Too many (16 files)
  - *Fix:* Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.
- **[CONTENT] Text-to-HTML ratio** — Very low (code-heavy page) (4.5%)
  - *Fix:* Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

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
   - Problem: Answers are the wrong length (0.0% of answers)
   - Do this: Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[AEO] Question-form headings**
   - Problem: Some questions covered (2 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
2. **[GEO] Quantitative facts**
   - Problem: Few numbers (1.34 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
3. **[GEO] Named author**
   - Problem: No author byline found
   - Do this: Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh.
4. **[GEO] Person schema**
   - Problem: No Person schema
   - Do this: Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity.
5. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
6. **[GEO] Publish / update dates**
   - Problem: No datePublished / dateModified found
   - Do this: Add visible and machine-readable publish and last-updated dates.
7. **[SEO] Keyword alignment**
   - Problem: 'real' only appears in: H1
   - Do this: Put the primary keyword in the title, the H1, the URL slug and the first 100 words.
8. **[TECHNICAL] Server response time**
   - Problem: Acceptable (1.78s)
   - Do this: Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front.
9. **[SEO] Trust pages exist**
   - Problem: Missing core pages: About page
   - Do this: Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.
10. **[TECHNICAL] Render-blocking head resources**
   - Problem: Too many (16 files)
   - Do this: Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.
11. **[CONTENT] Text-to-HTML ratio**
   - Problem: Very low (code-heavy page) (4.5%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Definition-style openers**
   - Problem: No answer opens with a definition
   - Do this: Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern.
2. **[AEO] Sentence length**
   - Problem: Getting long (25.86 words/sentence)
   - Do this: Split long sentences. Answers get quoted when they are short and self-contained.
3. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
4. **[GEO] Quotable sentence length**
   - Problem: Sometimes long (25.86 words/sentence)
   - Do this: Keep sentences under 22 words. AI engines quote self-contained sentences, not sprawling ones.
5. **[GEO] sameAs entity links**
   - Problem: Organization schema has no sameAs array
   - Do this: List every official profile (Facebook, Instagram, LinkedIn, YouTube, Wikipedia) in sameAs so AI engines can resolve your brand as one entity.
6. **[SEO] Heading hierarchy**
   - Problem: 1 level jump(s), e.g. H1 -> H3
   - Do this: Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure.
7. **[SEO] Image alt text**
   - Problem: Some images missing alt (18.2% missing)
   - Do this: Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding.
8. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' | — |
| Canonical tag | ✅ PASS | https://www.seoreviewtools.com/ (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (41 chars) | — |
| Meta description length | ✅ PASS | Good length (138 chars) | — |
| Exactly one H1 | ✅ PASS | H1: 83 real-time Free SEO + AI Tools.. | — |
| Heading hierarchy | ⚠️ WARN | 1 level jump(s), e.g. H1 -> H3 | Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure. |
| Keyword alignment | ⚠️ WARN | 'real' only appears in: H1 | Put the primary keyword in the title, the H1, the URL slug and the first 100 words. |
| Internal links in body | ✅ PASS | Good internal linking (48 links) | — |
| Navigational links | ℹ️ INFO | 34 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 8 external links, 6 nofollow | — |
| Image alt text | ⚠️ WARN | Some images missing alt (18.2% missing) | Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding. |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 7 type(s): BreadcrumbList, CollectionPage, EntryPoint, ListItem, PropertyValueSpecification, SearchAction, WebSite | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://www.seoreviewtools.com/ | — |
| Trust pages exist | ❌ FAIL | Missing core pages: About page | Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source. |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from www.seoreviewtools.com | — |
| http redirects to https | ✅ PASS | http:// -> https://www.seoreviewtools.com/ | — |
| One canonical hostname | ✅ PASS | https://seoreviewtools.com/ -> https://www.seoreviewtools.com (good) | — |
| Server response time | ⚠️ WARN | Acceptable (1.78s) | Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front. |
| HTML page weight | ✅ PASS | Lean (24.4 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ❌ FAIL | Too many (16 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ✅ PASS | cache-control: max-age=3, must-revalidate | — |
| Content present in the served HTML | ✅ PASS | 818 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200 | — |
| XML sitemap | ✅ PASS | https://www.seoreviewtools.com/sitemap.xml — 252 URLs across 6 child sitemaps | — |
| Mobile viewport | ✅ PASS | viewport: width=device-width, initial-scale=1.0 | — |
| Language declared | ✅ PASS | html lang="en-US" | — |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (6 H2s) | — |
| Content depth | ✅ PASS | Substantial (818 words) | — |
| Primary topic detected | ✅ PASS | 'real' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (4.5%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ❌ FAIL | No FAQPage schema | Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change. |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ℹ️ INFO | No QAPage/Question schema (optional) | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ⚠️ WARN | Some questions covered (2 questions) | Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from. |
| Answers are 40-60 words | ❌ FAIL | Answers are the wrong length (0.0% of answers) | Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot. |
| Definition-style openers | ⚠️ WARN | No answer opens with a definition | Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern. |
| Bulleted / numbered lists | ✅ PASS | 12 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (3.1% vague) | — |
| Sentence length | ⚠️ WARN | Getting long (25.86 words/sentence) | Split long sentences. Answers get quoted when they are short and self-contained. |
| Answer-first intro | ✅ PASS | First paragraph is 54 words — good for an intro snippet | — |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ✅ PASS | Breadcrumbs declared — improves SERP display | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 818 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ✅ PASS | 4 outbound links to authority domains (github.com, www.linkedin.com, www.reddit.com, www.youtube.com) | — |
| Quantitative facts | ⚠️ WARN | Few numbers (1.34 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ⚠️ WARN | No Person schema | Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity. |
| Organization / LocalBusiness schema | ✅ PASS | Found: website (no sameAs list found) | — |
| sameAs entity links | ⚠️ WARN | Organization schema has no sameAs array | List every official profile (Facebook, Instagram, LinkedIn, YouTube, Wikipedia) in sameAs so AI engines can resolve your brand as one entity. |
| Entity-rich content | ✅ PASS | Entity-rich (29.46 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 12 list(s) | — |
| Q&A pairs for summarisation | ✅ PASS | 2 question/answer pair(s) | — |
| llms.txt | ℹ️ INFO | No /llms.txt (optional; the convention is still emerging, low cost to add: a markdown index of your key pages) | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 5/8 | — |
| Semantic HTML landmarks | ✅ PASS | Using: <article>, <nav> | — |
| Quotable sentence length | ⚠️ WARN | Sometimes long (25.86 words/sentence) | Keep sentences under 22 words. AI engines quote self-contained sentences, not sprawling ones. |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | #1 Free SEO & AI Tools → SEO Review Tools (41 chars) |
| Meta description | SEO Review Tools: 76+ Free Online SEO & AI Tools build with ❤! → Rank checker → Domain Authority Checker → Keyword Tool → Backlink Checker (138 chars) |
| H1 | 83 real-time Free SEO + AI Tools.. |
| Headings | hh1=1, hh2=6, hh3=25, hh4=0, hh5=0, hh6=0 |
| Word count | 818 |
| Internal / external links | 82 / 8 |
| Authority citations | 4 |
| Images (missing alt) | 66 (12) |
| Schema types | BreadcrumbList, CollectionPage, EntryPoint, ListItem, PropertyValueSpecification, SearchAction, WebSite |
| Tables / lists | 0 / 12 |
| Q&A blocks (40-60 words) | 2 (0) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 1.34 |
| Avg sentence length | 25.86 words |
| Text/HTML ratio | 4.5% |
| Canonical | https://www.seoreviewtools.com/ |
| Meta robots | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 |
| Viewport | width=device-width, initial-scale=1.0 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 1.78s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | https://www.seoreviewtools.com/ |
| www variant | https://seoreviewtools.com/ -> https://www.seoreviewtools.com (good) |
| robots.txt | HTTP 200 (1 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://www.seoreviewtools.com/sitemap.xml — 252 URLs |
| llms.txt | absent |
| Missing security headers | content-security-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 0, "contact": 200, "privacy": 200, "terms": 200, "blog": 200, "shipping": 0, "returns": 0, "faq": 200} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:41 UTC._