"""Claim 2: 'The authority-citation check recognises every legitimate authoritative source.'"""
from rt_common import parse_html, audit

SOURCES = [
    ("UK government", "https://www.gov.uk/government/statistics/whatever"),
    ("UK gov apex", "https://gov.uk/"),
    ("Pakistan government (HEC)", "https://www.hec.gov.pk/english/Pages/default.aspx"),
    ("Pakistan government (NADRA)", "https://www.nadra.gov.pk/"),
    ("Indian government", "https://www.india.gov.in/"),
    ("Australian government", "https://www.health.gov.au/"),
    ("US NIH", "https://www.nih.gov/"),
    ("US NIST", "https://www.nist.gov/"),
    ("US CDC", "https://www.cdc.gov/"),
    ("Manchester University (.ac.uk)", "https://www.manchester.ac.uk/research/"),
    ("UCL (.ac.uk)", "https://www.ucl.ac.uk/"),
    ("Oxford (.ac.uk, hardcoded)", "https://www.ox.ac.uk/"),
    ("IIT Bombay (.ac.in)", "https://www.iitb.ac.in/"),
    ("Tokyo University (.ac.jp)", "https://www.u-tokyo.ac.jp/en/"),
    ("Tsinghua (.edu.cn)", "https://www.tsinghua.edu.cn/en/"),
    ("IEEE (standards body)", "https://www.ieee.org/standards/"),
    ("ETSI (standards body)", "https://www.etsi.org/"),
    ("ANSI (standards body)", "https://www.ansi.org/"),
    ("IETF (in list)", "https://www.ietf.org/"),
    ("ITU (tld .int)", "https://www.itu.int/"),
    ("ISO (in list)", "https://www.iso.org/standard/1.html"),
    ("W3C (in list)", "https://www.w3.org/TR/html52/"),
    ("Kubernetes docs", "https://kubernetes.io/docs/concepts/"),
    ("Docker docs", "https://docs.docker.com/engine/"),
    ("NVIDIA docs", "https://docs.nvidia.com/cuda/"),
    ("Oracle docs", "https://docs.oracle.com/en/database/"),
    ("MDN (in list)", "https://developer.mozilla.org/en-US/docs/Web/HTML"),
    ("Nature (publisher)", "https://www.nature.com/articles/s41586-021-03819-2"),
    ("Springer (publisher)", "https://link.springer.com/article/10.1007/s00134-020-06000-x"),
    ("The Lancet (publisher)", "https://www.thelancet.com/journals/lancet/home"),
    ("arXiv", "https://arxiv.org/abs/2103.00020"),
    ("JSTOR", "https://www.jstor.org/stable/10.2307/1234567"),
    ("Cochrane Library", "https://www.cochranelibrary.com/"),
    ("PubMed Central", "https://www.ncbi.nlm.nih.gov/pmc/"),
    ("WHO (in list)", "https://www.who.int/news-room/fact-sheets"),
    ("UNESCO", "https://www.unesco.org/en/news"),
    ("World Bank (in list)", "https://www.worldbank.org/en/data"),
    ("IMF", "https://www.imf.org/en/Data"),
    ("Al Jazeera", "https://www.aljazeera.com/news/"),
    ("Dawn (in list)", "https://www.dawn.com/news/1"),
    ("The News (in list)", "https://www.thenews.com.pk/latest/1"),
    ("BBC (in list)", "https://www.bbc.co.uk/news"),
    ("Reuters (in list)", "https://www.reuters.com/markets/"),
    # things that probably should NOT count as authorities
    ("Random YouTube video", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
    ("Reddit thread", "https://www.reddit.com/r/seo/comments/abc/xyz/"),
    ("Random Medium post", "https://medium.com/@somebody/my-opinion-1234abcd"),
    ("Somebody's LinkedIn post", "https://www.linkedin.com/posts/someone_activity-123"),
    ("Random GitHub repo", "https://github.com/someuser/random-project"),
]

links = "\n".join(f'<li><a href="{u}">{n}</a></li>' for n, u in SOURCES)
html = f"""<!doctype html><html lang="en"><head><title>Sources</title></head>
<body><h1>Our sources</h1><ul>{links}</ul></body></html>"""

facts = parse_html(html, "https://example.com/")
got = {l.href for l in facts.authority_links}
print(f"cited {len(SOURCES)} external links; algorithm called {len(got)} of them 'authoritative'\n")
print(f"{'SOURCE':32s} {'HOST':38s} RECOGNISED")
for name, u in SOURCES:
    host = u.split('/')[2]
    print(f"{name:32s} {host:38s} {'YES' if u in got else 'MISSED'}")

# And the check-level verdict the user sees
facts2, checks = audit(html)
cit = [c for c in checks if c.id == "geo.citations"]
for c in cit:
    print(f"\ngeo.citations -> {c.status}: {c.detail}")
