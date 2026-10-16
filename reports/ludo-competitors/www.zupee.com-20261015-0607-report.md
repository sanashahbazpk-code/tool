# SEO / AEO / GEO Research Report

**Target:** https://www.zupee.com/  
**Generated:** 2026-10-15 13:07 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 92.7/100 | A | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 78.0/100 | C | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 76.9/100 | C | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **82.5/100** | **B** |  |

Checks run: **66** — 45 pass, 9 warnings, 5 failures, 6 informational, 1 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[GEO] Cites authoritative sources** — No outbound links to authoritative sources
  - *Fix:* Add citations: link claims to primary sources. Pages with visible sourcing are dramatically more likely to be quoted by ChatGPT, Perplexity and Google AI Overviews.
- **[AEO] Answers are 40-60 words** — Answers are the wrong length (0.0% of answers)
  - *Fix:* Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
- **[GEO] Quantitative facts** — Almost no data (0.54 stats/100 words)
  - *Fix:* Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
- **[TECHNICAL] Render-blocking head resources** — Too many (15 files)
  - *Fix:* Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.
- **[CONTENT] Text-to-HTML ratio** — Very low (code-heavy page) (7.0%)
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

1. **[GEO] Cites authoritative sources**
   - Problem: No outbound links to authoritative sources
   - Do this: Add citations: link claims to primary sources. Pages with visible sourcing are dramatically more likely to be quoted by ChatGPT, Perplexity and Google AI Overviews.
2. **[AEO] Answers are 40-60 words**
   - Problem: Answers are the wrong length (0.0% of answers)
   - Do this: Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
3. **[GEO] Quantitative facts**
   - Problem: Almost no data (0.54 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
2. **[GEO] Publish / update dates**
   - Problem: No datePublished / dateModified found
   - Do this: Add visible and machine-readable publish and last-updated dates.
3. **[TECHNICAL] Server response time**
   - Problem: Acceptable (1.19s)
   - Do this: Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front.
4. **[SEO] Trust pages exist**
   - Problem: Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section | Missing: Shipping policy, Returns / refund policy, FAQ page
   - Do this: Add the remaining policy/FAQ pages.
5. **[TECHNICAL] Render-blocking head resources**
   - Problem: Too many (15 files)
   - Do this: Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.
6. **[CONTENT] Text-to-HTML ratio**
   - Problem: Very low (code-heavy page) (7.0%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Answer-first intro**
   - Problem: First paragraph is 10 words
   - Do this: Open with a 40-60 word paragraph that directly answers the page's main question, then expand.
2. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
3. **[SEO] Meta description length**
   - Problem: Long (164 chars)
   - Do this: Keep it 120-160 characters.
4. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
5. **[TECHNICAL] Language declared**
   - Problem: No lang attribute on <html>
   - Do this: Add lang="en" (or the correct language) — it helps both search and screen readers.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'index, follow' | — |
| Canonical tag | ✅ PASS | https://www.zupee.com/ (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (50 chars) | — |
| Meta description length | ⚠️ WARN | Long (164 chars) | Keep it 120-160 characters. |
| Exactly one H1 | ✅ PASS | H1: Play Free Online Games Like Ludo & Win Rewards | — |
| Heading hierarchy | ✅ PASS | No skipped heading levels | — |
| Keyword alignment | ✅ PASS | 'online' appears in: title, H1, first paragraph | — |
| Internal links in body | ✅ PASS | Good internal linking (52 links) | — |
| Navigational links | ℹ️ INFO | 29 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 5 external links, 0 nofollow | — |
| Image alt text | ✅ PASS | Good alt coverage (0.0% missing) | — |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 15 type(s): AggregateRating, Answer, ContactPoint, FAQPage, ImageObject, Offer, Organization, Person | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://www.zupee.com/ | — |
| Trust pages exist | ⚠️ WARN | Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section \| Missing: Shipping policy, Returns / refund policy, FAQ page | Add the remaining policy/FAQ pages. |
| hreflang tags | ℹ️ INFO | 1 alternate language versions declared | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from www.zupee.com | — |
| http redirects to https | ✅ PASS | http:// -> https://www.zupee.com:443/ | — |
| One canonical hostname | ✅ PASS | https://zupee.com/ -> https://www.zupee.com:443/ | — |
| Server response time | ⚠️ WARN | Acceptable (1.19s) | Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front. |
| HTML page weight | ✅ PASS | Lean (36.7 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ❌ FAIL | Too many (15 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ✅ PASS | cache-control: private, must-revalidate, max-age=300 | — |
| Content present in the served HTML | ✅ PASS | 1658 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 2 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://www.zupee.com/sitemap.xml — 2 URLs | — |
| Mobile viewport | ✅ PASS | viewport: width=device-width, initial-scale=1 | — |
| Language declared | ⚠️ WARN | No lang attribute on <html> | Add lang="en" (or the correct language) — it helps both search and screen readers. |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (7 H2s) | — |
| Content depth | ✅ PASS | Substantial (1658 words) | — |
| Primary topic detected | ✅ PASS | 'online' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (7.0%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ✅ PASS | FAQPage JSON-LD found — eligible for FAQ rich results and easy for AI to quote | — |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ✅ PASS | Found: answer, question | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ✅ PASS | Strong question coverage (10 questions) | — |
| Answers are 40-60 words | ❌ FAIL | Answers are the wrong length (0.0% of answers) | Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot. |
| Definition-style openers | ✅ PASS | 1 answer(s) open with 'X is ...' — the classic snippet format | — |
| Bulleted / numbered lists | ✅ PASS | 19 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (68 sentences analysed) (15.1 words/sentence) | — |
| Answer-first intro | ⚠️ WARN | First paragraph is 10 words | Open with a 40-60 word paragraph that directly answers the page's main question, then expand. |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ℹ️ INFO | No BreadcrumbList schema | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 1658 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ❌ FAIL | No outbound links to authoritative sources | Add citations: link claims to primary sources. Pages with visible sourcing are dramatically more likely to be quoted by ChatGPT, Perplexity and Google AI Overviews. |
| Quantitative facts | ❌ FAIL | Almost no data (0.54 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ✅ PASS | Author: Zupee Team | — |
| Person schema | ✅ PASS | Person JSON-LD found | — |
| Organization / LocalBusiness schema | ✅ PASS | Found: organization with sameAs | — |
| Entity-rich content | ✅ PASS | Entity-rich (21.71 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 19 list(s) | — |
| Q&A pairs for summarisation | ✅ PASS | 10 question/answer pair(s) | — |
| llms.txt | ✅ PASS | Found (1819 bytes) — an emerging convention for telling AI crawlers what matters | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 5/8 | — |
| Semantic HTML landmarks | ✅ PASS | Using: <main>, <nav> | — |
| Quotable sentence length | ✅ PASS | Easily quotable (15.1 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Zupee – Play Free Online Games on Mobile & Desktop (50 chars) |
| Meta description | Play free online games on Zupee - one of India’s top online gaming apps. Enjoy Ludo, Snakes & Ladders, Carrom, Hand Cricket & more skill games on mobile or desk (164 chars) |
| H1 | Play Free Online Games Like Ludo & Win Rewards |
| Headings | hh1=1, hh2=7, hh3=13, hh4=0, hh5=0, hh6=0 |
| Word count | 1658 |
| Internal / external links | 81 / 5 |
| Authority citations | 0 |
| Images (missing alt) | 25 (0) |
| Schema types | AggregateRating, Answer, ContactPoint, FAQPage, ImageObject, Offer, Organization, Person, PostalAddress, QuantitativeValue, Question, SoftwareApplication, VideoObject, WebApplication, WebPage |
| Tables / lists | 0 / 19 |
| Q&A blocks (40-60 words) | 10 (0) |
| Author | Zupee Team |
| Dates | (none) |
| Stats per 100 words | 0.54 |
| Avg sentence length | 15.1 words |
| Text/HTML ratio | 7.0% |
| Canonical | https://www.zupee.com/ |
| Meta robots | index, follow |
| Viewport | width=device-width, initial-scale=1 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 1.19s |
| Server | (unknown) |
| CDN | not detected |
| Compression | gzip |
| HTTP → HTTPS | https://www.zupee.com:443/ |
| www variant | https://zupee.com/ -> https://www.zupee.com:443/ |
| robots.txt | HTTP 200 (1 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://www.zupee.com/sitemap.xml — 2 URLs |
| llms.txt | present |
| Missing security headers | strict-transport-security, x-content-type-options, x-frame-options, content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 200, "privacy": 200, "terms": 200, "blog": 200, "shipping": 0, "returns": 0, "faq": 0} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:07 UTC._