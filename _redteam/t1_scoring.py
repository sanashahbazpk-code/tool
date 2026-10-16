"""Claim 1: score is a weighted average of all runnable checks."""
from rt_common import audit, weighted_avg, score_summary
from collections import Counter

HTML = """<!doctype html><html lang="en"><head><title>Ludo game online play with friends in Pakistan</title>
<meta name="description" content="Play ludo online with friends in Pakistan. Fast, free and mobile friendly board game with five player mode and private tables.">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta property="og:title" content="Ludo"><meta property="og:description" content="d"><meta property="og:image" content="x.png">
<link rel="canonical" href="https://example.com/">
<script type="application/ld+json">{"@type":"WebApplication","name":"Ludo"}</script>
</head><body><h1>Ludo game online</h1>
<h2>What is ludo?</h2><p>Ludo is a board game for two to four players.</p>
""" + "".join(f"<h2>Section {i} about ludo rules and players</h2><p>"
              + ("Ludo rules are simple and easy to learn for everyone. " * 12) + "</p>"
              for i in range(6)) + """
</body></html>"""

facts, checks = audit(HTML)
res = score_summary(checks)
counts = Counter(c.category for c in checks)
print("check categories:", dict(counts))
print("total checks:", len(checks))

print("\n-- reported scoreboard (space separated, prefix='REPORTED') --")
for k, v in res.items():
    print("REPORTED", k, v)

# weighted average over ALL checks that have a score
allavg, allw = weighted_avg(checks)
print("\nweighted average over ALL pass/warn/fail checks:", allavg, " total weight:", allw)

# reported 'seo' bucket is category == 'seo' only
seo_only, seow = weighted_avg(checks, lambda c: c.category == "seo")
tech, techw = weighted_avg(checks, lambda c: c.category == "technical")
cont, contw = weighted_avg(checks, lambda c: c.category == "content")
print("category 'seo' only:", seo_only, "weight", seow)
print("category 'technical':", tech, "weight", techw)
print("category 'content':", cont, "weight", contw)
print("technical+content weight excluded from every reported score:", techw + contw,
      f"({100*(techw+contw)/allw:.1f}% of all scored weight)")

# Demonstrate: flipping every technical/content check to 'fail' does not move any reported score
for c in checks:
    if c.category in ("technical", "content"):
        c.status = "fail"
res2 = score_summary(checks)
print("\n-- after forcing EVERY technical/content check to FAIL --")
for k, v in res2.items():
    print("REPORTED", k, v)
print("scoreboard identical?", res == res2)
print("\nweight of the checks that were ignored:")
for c in checks:
    if c.category in ("technical", "content") and c.status == "fail":
        print(f"   {c.id:34s} weight={c.weight} status={c.status}")
