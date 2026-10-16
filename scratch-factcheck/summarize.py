import json, os, sys

BASE = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
R = os.path.join(BASE, 'seo-tool', 'reports')

def load(p):
    return json.load(open(p, encoding='utf-8'))

def summarize(path, label):
    d = load(path)
    print("="*100)
    print(label, "|", os.path.relpath(path, BASE))
    print("  target:", d.get('target'))
    print("  scores:", {k: (v.get('score'), v.get('grade')) for k, v in d.get('scores', {}).items()})
    f = d.get('facts', {})
    print("  words:", f.get('words'), "| h1:", f.get('heading_counts', {}).get('h1'),
          "| h2:", f.get('heading_counts', {}).get('h2'), "| h3:", f.get('heading_counts', {}).get('h3'))
    print("  schema_types(%d):" % len(f.get('schema_types', [])), f.get('schema_types'))
    print("  links_total/int/ext/auth:", f.get('links_total'), f.get('links_internal'), f.get('links_external'), f.get('links_authority'))
    print("  qa_blocks:", len(f.get('qa_blocks', [])), "| tables:", f.get('tables'),
          "| lists:", f.get('lists'), "| images:", f.get('images_total'),
          "| stat_density:", f.get('statistic_density'))
    tp = d.get('trust_paths', {})
    present = [k for k, v in tp.items() if v == 200]
    print("  trust_paths:", tp, "-> present", len(present), "/", len(tp), present)
    ch = d.get('checks', [])
    from collections import Counter
    print("  checks total:", len(ch), Counter(c.get('status') for c in ch))
    fails = [c for c in ch if c.get('status') == 'fail']
    warns = [c for c in ch if c.get('status') == 'warn']
    print("  FAILS:")
    for c in fails:
        print("    -", c.get('id'), "|", c.get('title'), "|", str(c.get('detail'))[:200])
    print("  WARNS:")
    for c in warns:
        print("    -", c.get('id'), "|", c.get('title'), "|", str(c.get('detail'))[:200])

if __name__ == '__main__':
    summarize(os.path.join(R, 'self', '127.0.0.1-20261015-0636-data.json'), 'BEFORE (self)')
    summarize(os.path.join(R, 'self-after', '127.0.0.1-20261015-0643-data.json'), 'INTERMEDIATE (self-after)')
    summarize(os.path.join(R, 'self-final', '127.0.0.1-20261015-0645-data.json'), 'AFTER (self-final)')
