"""Claim 4: question-form headings and 40-60 word Q&A answers are detected correctly."""
import rt_common  # noqa: F401
from seotool.dom import parse_html
from seotool.util import word_count


def page(body):
    return ("<!doctype html><html lang='en'><head><title>FAQ about ludo game online play</title>"
            "<meta name='description' content='d'>"
            "<meta name='viewport' content='width=device-width'>"
            "</head><body><h1>Ludo FAQ</h1>" + body + "</body></html>")


def words(n, tag="Ludo"):
    return " ".join([tag] * n)


print("=== (a) exact word-count boundary 39/40/60/61 ===")
for n in (38, 39, 40, 41, 59, 60, 61, 62):
    html = page(f"<h2>What is ludo?</h2><p>{words(n)}</p>")
    f = parse_html(html, "https://example.com/")
    if not f.qa_blocks:
        print(f"  {n:3d} words -> NO QA BLOCK DETECTED")
        continue
    q = f.qa_blocks[0]
    print(f"  {n:3d} words -> answer_words={q.answer_words:3d} in_40_60={q.in_40_60}")

print("\n=== (b) an answer split over two paragraphs (25 + 35 = 60 words) ===")
html = page("<h2>How do you win at ludo?</h2>"
            f"<p>{words(25, 'Win')}</p><p>{words(35, 'more')}</p>")
f = parse_html(html, "https://example.com/")
q = f.qa_blocks[0]
full = word_count(f.paragraph_text)
print(f"  real answer on the page: 60 words (25 + 35). tool measured: {q.answer_words} words, "
      f"in_40_60={q.in_40_60}")
print(f"  answer text kept: '{q.answer[:70]}...'")

print("\n=== (c) question heading followed by a <ul> of steps (a normal FAQ pattern) ===")
html = page("<h2>How do you play ludo?</h2>"
            "<ul>" + "".join(f"<li>{words(9, 'Step')}</li>" for _ in range(5)) + "</ul>"
            f"<p>{words(45, 'Rule')}</p>")
f = parse_html(html, "https://example.com/")
q = f.qa_blocks[0]
print(f"  list has ~45 words + a 45-word paragraph after it")
print(f"  tool measured answer_words={q.answer_words} in_40_60={q.in_40_60}")
print(f"  answer kept = '{q.answer[:80]}...'  (the <ul> content was skipped entirely)")

print("\n=== (d) question heading answered ONLY by a list/table (very common) ===")
html = page("<h2>What are the ludo rules?</h2>"
            "<ul>" + "".join(f"<li>{words(10, 'Rule')}</li>" for _ in range(5)) + "</ul>"
            "<h3>What is the board size?</h3>"
            "<table><tr><th>Size</th><td>15 inches square</td></tr></table>")
f = parse_html(html, "https://example.com/")
print(f"  qa_blocks detected: {len(f.qa_blocks)}")
for q in f.qa_blocks:
    print(f"    Q='{q.question}' answer_words={q.answer_words} in_40_60={q.in_40_60} "
          f"answer='{q.answer[:40]}'")
from seotool.audits import audit_aeo
from rt_common import dummy_site
f2 = parse_html(html, "https://example.com/")
checks = audit_aeo(f2, dummy_site())
for c in checks:
    if c.id in ("aeo.answer_length_40_60", "aeo.question_headings", "geo.faq_for_summarisation"):
        print(f"    {c.id} -> {c.status}: {c.detail}")

print("\n=== (e) question starter words ===")
for h in ["What is ludo?", "How do you play ludo", "Kya ludo free hai", "Kaise khelte hain ludo",
          "Kyun ludo popular hai", "Kitna waqt lagta hai", "Kaun jeetta hai",
          "Kahan se ludo kharidein", "Kab ludo khelna chahiye", "Is ludo safe",
          "Do you need money to play", "Have you played ludo before"]:
    html = page(f"<h2>{h}</h2><p>{words(45)}</p>")
    f = parse_html(html, "https://example.com/")
    detected = any(q.question == h for q in f.qa_blocks)
    print(f"  {'DETECTED' if detected else 'MISSED  '}  {h}")
