# SEO / AEO / GEO Research Report

**Target:** https://www.silvergames.com/en/ludo-legend  
**Generated:** 2026-10-15 13:07 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 85.4/100 | B | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 45.9/100 | F | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 58.7/100 | E | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **63.3/100** | **D** |  |

Checks run: **67** — 36 pass, 13 warnings, 9 failures, 7 informational, 2 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[GEO] AI crawlers allowed** — robots.txt blocks: gptbot
  - *Fix:* Un-block the AI crawlers you want citations from (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot). If they cannot fetch the page, ChatGPT, Claude and Perplexity will never quote it. This is the single most common reason a site is invisible in AI answers.
- **[AEO] Question-form headings** — No question headings (0 questions)
  - *Fix:* Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
- **[AEO] Answers are 40-60 words** — No question/answer pairs detected on the page
  - *Fix:* Add a FAQ section: question as the heading, 40-60 word answer immediately below.
- **[GEO] Organization / LocalBusiness schema** — No Organization or LocalBusiness schema
  - *Fix:* Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.
- **[CONTENT] Content depth** — Thin content (213 words)
  - *Fix:* Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing.
- **[SEO] Trust pages exist** — Missing core pages: About page, Contact page, Privacy policy, Terms of service
  - *Fix:* Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.
- **[SEO] Meta description length** — Too long/short (681 chars)
  - *Fix:* Keep it 120-160 characters.

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
2. **[GEO] AI crawlers allowed**
   - Problem: robots.txt blocks: gptbot
   - Do this: Un-block the AI crawlers you want citations from (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot). If they cannot fetch the page, ChatGPT, Claude and Perplexity will never quote it. This is the single most common reason a site is invisible in AI answers.
3. **[AEO] Answers are 40-60 words**
   - Problem: No question/answer pairs detected on the page
   - Do this: Add a FAQ section: question as the heading, 40-60 word answer immediately below.
4. **[AEO] Question-form headings**
   - Problem: No question headings (0 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
5. **[GEO] Organization / LocalBusiness schema**
   - Problem: No Organization or LocalBusiness schema
   - Do this: Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Cites authoritative sources**
   - Problem: Only 1 authority citation(s): www.reddit.com
   - Do this: Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources.
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
6. **[GEO] E-E-A-T surface area**
   - Problem: Only 1/8 trust pages found (missing: about, contact, privacy, terms, blog, returns, faq)
   - Do this: Publish About, Contact, Privacy, Terms, Shipping and Returns pages. AI engines check whether a store is a real, accountable business before recommending it.
7. **[GEO] Q&A pairs for summarisation**
   - Problem: No question-and-answer structure
   - Do this: Add an FAQ block. It is what Perplexity and AI Overviews quote most often.
8. **[SEO] Trust pages exist**
   - Problem: Missing core pages: About page, Contact page, Privacy policy, Terms of service
   - Do this: Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.
9. **[CONTENT] Content depth**
   - Problem: Thin content (213 words)
   - Do this: Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing.
10. **[SEO] Meta description length**
   - Problem: Too long/short (681 chars)
   - Do this: Keep it 120-160 characters.
11. **[CONTENT] Text-to-HTML ratio**
   - Problem: Very low (code-heavy page) (2.0%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Answer-first intro**
   - Problem: First paragraph is 1 words
   - Do this: Open with a 40-60 word paragraph that directly answers the page's main question, then expand.
2. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
3. **[CONTENT] Subheadings (H2)**
   - Problem: Few subheadings (2 H2s)
   - Do this: Break the page into H2 sections. Long unbroken text is hard to scan and hard for AI to quote.
4. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
5. **[TECHNICAL] Language declared**
   - Problem: No lang attribute on <html>
   - Do this: Add lang="en" (or the correct language) — it helps both search and screen readers.
6. **[TECHNICAL] Sitemap lastmod dates**
   - Problem: No <lastmod> values found in the sitemap
   - Do this: Add accurate <lastmod> dates so crawlers can prioritise changed pages.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'not set (indexable by default)' | — |
| Canonical tag | ✅ PASS | https://www.silvergames.com/en/ludo-legend (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (43 chars) | — |
| Meta description length | ❌ FAIL | Too long/short (681 chars) | Keep it 120-160 characters. |
| Exactly one H1 | ✅ PASS | H1: Ludo Legend | — |
| Heading hierarchy | ✅ PASS | No skipped heading levels | — |
| Keyword alignment | ✅ PASS | 'ludo' appears in: title, H1, URL | — |
| Internal links in body | ✅ PASS | Good internal linking (145 links) | — |
| Navigational links | ℹ️ INFO | 15 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 5 external links, 5 nofollow | — |
| Image alt text | ✅ PASS | Good alt coverage (1.3% missing) | — |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 4 type(s): AggregateRating, BreadcrumbList, ListItem, VideoGame | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://www.silvergames.com/en/ludo-legend | — |
| Trust pages exist | ❌ FAIL | Missing core pages: About page, Contact page, Privacy policy, Terms of service | Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source. |
| hreflang tags | ℹ️ INFO | 47 alternate language versions declared | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from www.silvergames.com | — |
| http redirects to https | ✅ PASS | http:// -> https://www.silvergames.com/en/ | — |
| One canonical hostname | ✅ PASS | https://silvergames.com/ -> https://www.silvergames.com/en/ | — |
| Server response time | ✅ PASS | Fast (0.44s) | — |
| HTML page weight | ✅ PASS | Lean (12.8 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ✅ PASS | Few (3 files) | — |
| Cache headers | ✅ PASS | cache-control: public, max-age=0, s-maxage=86400 | — |
| Content present in the served HTML | ✅ PASS | 213 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 1 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://www.silvergames.com/sitemap.xml — 5000 URLs across 8 child sitemaps | — |
| Sitemap lastmod dates | ⚠️ WARN | No <lastmod> values found in the sitemap | Add accurate <lastmod> dates so crawlers can prioritise changed pages. |
| Mobile viewport | ✅ PASS | viewport: width=device-width, initial-scale=1.0, maximum-scale=5 | — |
| Language declared | ⚠️ WARN | No lang attribute on <html> | Add lang="en" (or the correct language) — it helps both search and screen readers. |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ⚠️ WARN | Few subheadings (2 H2s) | Break the page into H2 sections. Long unbroken text is hard to scan and hard for AI to quote. |
| Content depth | ❌ FAIL | Thin content (213 words) | Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing. |
| Primary topic detected | ✅ PASS | 'ludo' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (2.0%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

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
| Bulleted / numbered lists | ✅ PASS | 1 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (11 sentences analysed) (16.45 words/sentence) | — |
| Answer-first intro | ⚠️ WARN | First paragraph is 1 words | Open with a 40-60 word paragraph that directly answers the page's main question, then expand. |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ✅ PASS | Breadcrumbs declared — improves SERP display | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 213 words are present in the raw HTML response | — |
| AI crawlers allowed | ❌ FAIL | robots.txt blocks: gptbot | Un-block the AI crawlers you want citations from (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot). If they cannot fetch the page, ChatGPT, Claude and Perplexity will never quote it. This is the single most common reason a site is invisible in AI answers. |
| Cites authoritative sources | ⚠️ WARN | Only 1 authority citation(s): www.reddit.com | Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources. |
| Quantitative facts | ✅ PASS | Good density of numbers (3.29 stats/100 words) | — |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ⚠️ WARN | No Person schema | Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity. |
| Organization / LocalBusiness schema | ❌ FAIL | No Organization or LocalBusiness schema | Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand. |
| Entity-rich content | ✅ PASS | Entity-rich (28.64 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 1 list(s) | — |
| Q&A pairs for summarisation | ⚠️ WARN | No question-and-answer structure | Add an FAQ block. It is what Perplexity and AI Overviews quote most often. |
| llms.txt | ℹ️ INFO | No /llms.txt (optional; the convention is still emerging, low cost to add: a markdown index of your key pages) | — |
| E-E-A-T surface area | ⚠️ WARN | Only 1/8 trust pages found (missing: about, contact, privacy, terms, blog, returns, faq) | Publish About, Contact, Privacy, Terms, Shipping and Returns pages. AI engines check whether a store is a real, accountable business before recommending it. |
| Semantic HTML landmarks | ✅ PASS | Using: <article>, <main>, <nav> | — |
| Quotable sentence length | ✅ PASS | Easily quotable (16.45 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Ludo Legend - Play Online on SilverGames 🕹️ (43 chars) |
| Meta description | Ludo Legend is a cool multiplayer online board game to play some exciting Ludo matches against friends, random players or CPU bots. Play this free online versio (681 chars) |
| H1 | Ludo Legend |
| Headings | hh1=1, hh2=2, hh3=3, hh4=0, hh5=0, hh6=0 |
| Word count | 213 |
| Internal / external links | 160 / 5 |
| Authority citations | 1 |
| Images (missing alt) | 78 (1) |
| Schema types | AggregateRating, BreadcrumbList, ListItem, VideoGame |
| Tables / lists | 0 / 1 |
| Q&A blocks (40-60 words) | 0 (0) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 3.29 |
| Avg sentence length | 16.45 words |
| Text/HTML ratio | 2.0% |
| Canonical | https://www.silvergames.com/en/ludo-legend |
| Meta robots | (not set) |
| Viewport | width=device-width, initial-scale=1.0, maximum-scale=5 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.44s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | https://www.silvergames.com/en/ |
| www variant | https://silvergames.com/ -> https://www.silvergames.com/en/ |
| robots.txt | HTTP 200 (2 groups) |
| AI crawlers blocked | gptbot |
| Sitemap | https://www.silvergames.com/sitemap.xml — 5000 URLs |
| llms.txt | absent |
| Missing security headers | strict-transport-security, content-security-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 0, "contact": 0, "privacy": 0, "terms": 0, "blog": 0, "shipping": 200, "returns": 0, "faq": 0} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:07 UTC._