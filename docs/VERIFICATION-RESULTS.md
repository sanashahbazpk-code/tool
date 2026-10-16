# Verification results — independent review of the tool and its reports

**Requested:** verify the tool and its reports with "3 best LLMs".
**What happened:** only DeepSeek was configured; the three verification subagents failed; so the
verification was done directly against primary sources, plus a multi-LLM script was written that
will run the real three-vendor review once keys exist.
**Date:** this session.

---

## 0. Honesty first

1. **Three different LLM vendors are not available.** Only DeepSeek credentials exist on this
   machine — no OpenAI / Anthropic / Gemini / OpenRouter keys. I will not use the harness's own
   internal credential against an external API; it is not mine to use.
2. **The three independent verification subagents failed** without returning results.
3. Verification was therefore done manually: claims checked against primary sources (Google Search
   Central), report numbers checked against the JSON, and the tool's checks tested with
   counterexample HTML.
4. **For the real three-vendor review**, `tools/verify_with_llms.py` is ready. Set three keys, run
   one command, and three vendors deliver separate verdicts. Guide: `docs/VERIFICATION.md`.

---

## 1. What was found wrong — and fixed

### 🔴 F1 — A wrong count in the report (FIXED)

`SELF-AUDIT.md` claimed:

> "7 out of 6 competitors lack FAQPage schema"

The table actually has **9** competitors, of which **6** lack FAQPage. Correct: **"6 of 9"**. Both
occurrences fixed after checking against the JSON.

**Lesson:** even the report I wrote myself contained an error. That is exactly why verification
exists.

### 🔴 F2 — The central AEO advice was OUTDATED (FIXED — the most important)

The tool failed any page without `FAQPage` schema and said:

> "Add FAQPage JSON-LD … **This is the single highest-leverage AEO change.**"

That is **wrong**. Google **removed the FAQ rich result** and **deprecated HowTo rich results**.
Primary-source proof:

- Google's FAQPage documentation page now **redirects** to an update literally anchored
  **`#removing-faq-rich-result`**:
  `https://developers.google.com/search/docs/appearance/structured-data/faqpage`
- Google's announcement: [Changes to HowTo and FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes)

**Fixed:**
| Before | After |
|---|---|
| No FAQPage → **FAIL, weight 3.0** | No FAQPage → **WARN, weight 1.5** |
| "single highest-leverage AEO change" | "Google removed FAQ rich results; this now only makes Q&A machine-readable for AI engines" |
| No HowTo → warn 1.0 | No HowTo → **info 0.0** (deprecated, optional) |

The AEO weight now sits where it belongs — on **Q&A content** (question headings and 40–60 word
answers), which Google PAA and AI answer engines actually use. The methodology page and
`SELF-AUDIT.md` were updated too.

### 🟠 F3 — Windows console crashed on emoji (FIXED)

`seo.py` and `verify_with_llms.py` crashed with `UnicodeEncodeError` when printing emoji/Urdu to a
cp1252 console. Both now force UTF-8 on stdout/stderr with `errors="replace"`.

### 🟠 F4 — E-commerce detection fired on its own site (already FIXED)

`Offer` schema (which a free `WebApplication` also declares) was treated as a shop, so the tool
demanded a **shipping policy from a software tool**. Now only `Product` schema or real cart signals
trigger it. Regression test: `hashmiphotos.com` (real shop) ✅ detected, `ludoking.com` ❌, own
site ❌.

---

## 2. What was checked and found CORRECT

| Claim | Result |
|---|---|
| Before/after scores (SEO 61.4→100, AEO 52.8→100, GEO 53.5→94.3) | ✅ matches JSON |
| Words 403 → 1,369; schema 0 → 11; internal links 0 → 21 | ✅ matches |
| Every competitor score in the table | ✅ `compare_reports.py` reads the JSON directly |
| `ahrefs.com/site-audit` 58.1, zero JSON-LD, no FAQ | ✅ matches |
| `seositecheckup.com` has 2 H1 | ✅ matches |
| nibbler.silktide.com → nibbler.co → NXDOMAIN | ✅ verified |
| website.grader.com = 9-word shell | ✅ verified |
| New FAQ/HowTo behaviour (warn 1.5 / info 0.0) | ✅ clean unit test |

---

## 3. What could NOT be verified

| Item | Why | What is needed |
|---|---|---|
| Any site's **real Google ranking / traffic** | The tool measures readiness; web search does not return positioned SERPs | Google Search Console data |
| Competitors' **backlink profile** | No backlink API key | Semrush/Ahrefs key or a CSV export |
| Three-vendor LLM verdicts | Only a DeepSeek key exists | OpenAI + Anthropic + Gemini keys |
| Remaining numbers in `JAIZA-REPORT.md` | Focus was on SELF-AUDIT.md | A separate fact-check pass (script) |

---

## 4. Final honest result (re-measured after the FAQ fix)

```
SEO 100.0 (A)   AEO 100.0 (A)   GEO 94.3 (A)   →  Overall 98.1 (A)
1 fail (HTTPS — localhost artifact) · 2 warn (stats density, sameAs)
```

The site's own score did not change (it passes everything). What changed is the **advice the tool
gives to other sites** — it is now honest.

> **Note:** the earlier "98.1 overall, first in every column" claim is still true **for this site**,
> but the competitor-gap story is a little less dramatic now: reweighting FAQPage as a warning
> slightly raises the AEO score of competitors that lack it. The real gap is now in Q&A *content* —
> and there they still trail.

---

## 5. Running the real three-LLM review (once you have keys)

```cmd
cd "C:\Users\Yousuf Traders\Documents\deepseek-harness\default-workspace\seo-tool"

set OPENAI_API_KEY=sk-...
set ANTHROPIC_API_KEY=sk-ant-...
set GEMINI_API_KEY=...

python tools\verify_with_llms.py --report docs\SELF-AUDIT.md --include-source
```

Each vendor's verdict lands in its own file under `verification/`, with a SUMMARY that flags where
**vendors disagree** — that disagreement is the useful signal. Full guide: `docs/VERIFICATION.md`.

**Preview without keys:** `python tools\verify_with_llms.py --report docs\SELF-AUDIT.md --dry-run`

---

## 6. Summary — three lines

1. **Verification worked:** one report error, one central methodology error (FAQ rich results), and
   one crash — all fixed.
2. **The real three-vendor review could not run** (no keys), but the script is one command away.
3. **Lesson:** the report I wrote myself contained an error ("7 of 6"). No system can verify its own
   work — which is why this process matters.
