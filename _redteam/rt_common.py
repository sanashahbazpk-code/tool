"""Shared helpers for the red-team scripts."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from seotool.dom import parse_html
from seotool.crawl import SiteFacts
from seotool.fetch import FetchResult
from seotool.audits import audit_seo, audit_aeo, audit_geo
from seotool.analysis import score_summary
from seotool.util import STATUS_SCORE


def dummy_site(url="https://example.com/"):
    s = SiteFacts(base_url=url, origin="https://example.com", host="example.com",
                  root_domain="example.com")
    s.https_ok = True
    s.http_redirects_to_https = True
    s.http_redirect_target = "https://example.com/"
    s.http_status = 301
    s.content_encoding = "gzip"
    s.cache_control = "max-age=60"
    s.robots_status = 200
    s.robots_groups = []
    s.sitemap_url = "https://example.com/sitemap.xml"
    s.sitemap_url_count = 3
    s.sitemap_has_lastmod = True
    s.checked_link_count = 0
    return s


def dummy_home(text="", size=1000, elapsed=0.2, status=200):
    return FetchResult(url="https://example.com/", final_url="https://example.com/",
                       status=status, ok=True, text=text, size=size, elapsed=elapsed)


def audit(html, url="https://example.com/", site=None, home=None):
    facts = parse_html(html, url)
    site = site or dummy_site(url)
    home = home or dummy_home(html, size=len(html.encode()), elapsed=0.2)
    checks = audit_seo(facts, site, home, {}) + audit_aeo(facts, site) + audit_geo(facts, site, {})
    return facts, checks


def weighted_avg(checks, pred=lambda c: True):
    total = weight = 0.0
    for c in checks:
        if not pred(c):
            continue
        s = STATUS_SCORE.get(c.status)
        if s is None:
            continue
        total += s * c.weight
        weight += c.weight
    return round(100.0 * total / weight, 1) if weight else None, weight
