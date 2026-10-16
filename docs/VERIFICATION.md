# Verifying this tool and its reports with other LLMs

A model reviewing its own work is not verification. This page explains how to get genuinely
independent review from several vendors, how to read the results, and what has already been
checked in this repository.

---

## Why bother

An LLM asked "is this good?" will usually say yes. An LLM asked **"prove this is wrong"** behaves
very differently — it hunts for counterexamples. The script in this folder
(`tools/verify_with_llms.py`) always uses the adversarial framing, never the agreeable one.

The useful signal is not agreement. It is the claims that **only one provider flags**. Read those
first: either that provider found something the others missed, or it invented a problem. Both are
worth your time.

---

## Quick start

```cmd
cd "C:\Users\Yousuf Traders\Documents\deepseek-harness\default-workspace\seo-tool"

REM 1. see which providers you have keys for
python tools\verify_with_llms.py --list

REM 2. preview the exact prompt, without calling anyone
python tools\verify_with_llms.py --report docs\SELF-AUDIT.md --dry-run

REM 3. set at least three keys (see below), then run it
python tools\verify_with_llms.py --report docs\SELF-AUDIT.md --include-source
```

Results land in `verification/`:

```
verification/
  20261015-1830-SUMMARY.md        <- who answered, who failed, where to look
  20261015-1830-openai.md         <- full critique
  20261015-1830-anthropic.md
  20261015-1830-gemini.md
  ...
```

---

## Setting keys

Keys are read from environment variables only. **Never** pass a key on the command line — it ends
up in your shell history.

```cmd
set OPENAI_API_KEY=sk-...
set ANTHROPIC_API_KEY=sk-ant-...
set GEMINI_API_KEY=...
set DEEPSEEK_API_KEY=...
set OPENROUTER_API_KEY=...
set XAI_API_KEY=...
set MISTRAL_API_KEY=...
```

To make them permanent for your user account:

```cmd
setx OPENAI_API_KEY "sk-..."
```

`set` only lasts for the current window; `setx` persists but needs a new window to take effect.

Model names change constantly, so every provider's model can be overridden:

```cmd
set ANTHROPIC_MODEL=claude-opus-4-...
set GEMINI_MODEL=gemini-2.5-pro
```

Or override all of them at once:

```cmd
python tools\verify_with_llms.py --report docs\SELF-AUDIT.md --model gpt-5
```

---

## Which three to pick, and why

You want **different training data and different RLHF**, not three models from one family. These
three disagree with each other the most in practice:

| Provider | Why choose it | Cost |
|---|---|---|
| **Anthropic (Claude)** | Strongest at noticing that a *claim is unsupported by the evidence given*, which is the single most common failure in a report like this | Paid |
| **OpenAI (GPT)** | Strongest at catching internal contradictions and arithmetic that does not add up | Paid |
| **Google (Gemini)** | Different crawl of the web, so it catches **stale factual claims** the other two repeat from shared training data | Free tier available |

Add these when you want more coverage:

| Provider | Adds |
|---|---|
| **DeepSeek** | Cheap, strong at code review — good for the tool itself rather than the report |
| **OpenRouter** | One key, many models. The cheapest way to test whether two models from the *same* family disagree |
| **Mistral** | European training data; catches assumptions that are US-centric |
| **xAI (Grok)** | Different data again; useful tie-breaker when the first three split 2–1 |

**Minimum useful setup: three providers.** Two is a coin flip when they disagree; one is theatre.

---

## What to send it

By default the script sends the report plus a compact machine-readable summary of every audit JSON
in `reports/`. That summary contains the scores, word counts, schema lists, link counts, check
tallies and failing check ids — enough for a reviewer to catch a report that contradicts its own
data.

`--include-source` also attaches the tool's source files, so a reviewer can attack the checks
themselves rather than just the write-up.

```cmd
REM the report only
python tools\verify_with_llms.py --report docs\SELF-AUDIT.md

REM several reports at once
python tools\verify_with_llms.py --report docs\SELF-AUDIT.md --report ..\ludo-jaiza\JAIZA-REPORT.md

REM add a specific file as evidence
python tools\verify_with_llms.py --report docs\SELF-AUDIT.md --evidence seotool\audits.py

REM only the providers you trust with this data
python tools\verify_with_llms.py --report docs\SELF-AUDIT.md --only anthropic,openai,gemini
```

> **Client confidentiality.** These reports contain client domains and audit findings. Sending
> them to a third-party API is a disclosure. Use `--only` to restrict providers, or redact the
> report first.

---

## The prompt it uses

Three things make the prompt work, and you should keep them if you edit it:

1. **It demands a verdict, not a summary.** A model that has to say "sound / mostly sound /
   unsound" cannot hedge its way out.
2. **It separates factually-wrong from overstated from opinion.** Without this, reviewers blend
   "this is false" with "I would have worded it differently", and the report becomes useless.
3. **It allows "cannot verify".** If you do not offer that escape hatch, models invent certainty.

The output is forced into a fixed shape — verdict, factually wrong, overstated, missing, internal
inconsistencies, cannot verify, and the single most important change. That last section is
deliberately one sentence: it is the only part most people actually act on.

---

## Reading the results

| What you see | What it means |
|---|---|
| Three providers, same objection | Almost certainly a real defect. Fix it. |
| One provider flags something, others silent | Investigate. Could be a genuine catch or a hallucination — check the source yourself. |
| Providers contradict each other on a fact | At least one is running on stale training data. **Go to the primary source** — a vendor's own documentation, not a blog post. |
| All three say "cannot verify" | You did not give them enough evidence. That is a failure of the harness, not of the work. |
| A provider returns a broken or truncated answer | Normal. The summary file lists failures separately so they do not silently skew the picture. |

Never accept an LLM's factual correction without checking the primary source. A confident wrong
correction is the most expensive thing in this whole workflow.

---

## What has already been checked, and by what

| Verification | Method | Where the result lives |
|---|---|---|
| Report numbers against the audit JSON | Scripted, reproducible | `reports/` — every figure traces to a `*-data.json` |
| Competitor scores | The same tool run against 9 live sites | `reports/competitors/` |
| Tool behaviour under adversarial input | Red-team pass over `audits.py`, `dom.py`, `crawl.py` | See the findings in this repository's history |
| Methodology against published standards | Compared with Google Search Central, schema.org, web.dev and each vendor's crawler docs | `webapp/static/how-it-works.html` states the method; sources are linked on the site |
| Multi-vendor LLM review | `tools/verify_with_llms.py` | `verification/` once you run it with keys |

---

## Known limits of this approach

- **Shared training data.** Modern models have read much of the same web. Three vendors can be
  wrong in the same way, confidently and in unison. Only primary-source checking fixes that.
- **No ground truth for opinions.** Weights in a scoring model are judgement calls. A reviewer
  disagreeing with a weight is not evidence of a bug.
- **Reviewer fatigue.** Long reports get skimmed. Keep the artefact you send under about 60,000
  characters, which is why the script truncates and summarises.
- **It is not a security review.** Passing a report through an API does not test the tool.
