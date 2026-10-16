import json, os, glob

BASE = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
R = os.path.join(BASE, 'seo-tool', 'reports')

def load(p):
    return json.load(open(p, encoding='utf-8'))

def row(label, path):
    d = load(path)
    f = d.get('facts', {})
    s = d.get('scores', {})
    st = f.get('schema_types', [])
    faq = any(x.lower() == 'faqpage' for x in st)
    hc = f.get('heading_counts', {})
    qa = f.get('qa_blocks', [])
    return dict(
        label=label,
        file=os.path.relpath(path, BASE),
        seo=s.get('seo', {}).get('score'), aeo=s.get('aeo', {}).get('score'),
        geo=s.get('geo', {}).get('score'), overall=s.get('overall', {}).get('score'),
        words=f.get('words'), h1=hc.get('h1'), h2=hc.get('h2'), h3=hc.get('h3'),
        faq=faq, schema_n=len(st), int_links=f.get('links_internal'),
        ext_links=f.get('links_external'), auth=f.get('links_authority'),
        qa=len(qa), tables=f.get('tables'), stat=f.get('statistic_density'),
        images=f.get('images_total'))

print("### COMPETITORS DIRECTORY (competitors/*-data.json)")
rows = []
for p in sorted(glob.glob(os.path.join(R, 'competitors', '*-data.json'))):
    host = os.path.basename(p).split('-2026')[0]
    rows.append(row(host, p))
for r in sorted(rows, key=lambda x: -(x['overall'] or 0)):
    print(json.dumps(r, ensure_ascii=False))
print()
print("### SELF-FINAL")
print(json.dumps(row('SELF-FINAL', os.path.join(R, 'self-final', '127.0.0.1-20261015-0645-data.json')), ensure_ascii=False))
print("### SELF (before)")
print(json.dumps(row('SELF-BEFORE', os.path.join(R, 'self', '127.0.0.1-20261015-0636-data.json')), ensure_ascii=False))
print("### SELF-AFTER (intermediate)")
print(json.dumps(row('SELF-AFTER', os.path.join(R, 'self-after', '127.0.0.1-20261015-0643-data.json')), ensure_ascii=False))
print()
print("### LUDO-COMPETITORS")
rows = []
for p in sorted(glob.glob(os.path.join(R, 'ludo-competitors', '*-data.json'))):
    host = os.path.basename(p).split('-2026')[0]
    rows.append(row(host, p))
for r in sorted(rows, key=lambda x: -(x['overall'] or 0)):
    print(json.dumps(r, ensure_ascii=False))
print("### LUDO-EMPEROR (127.0.0.1)")
for p in sorted(glob.glob(os.path.join(R, 'ludo-emperor', '*-data.json'))):
    print(json.dumps(row('ludo-emperor', p), ensure_ascii=False))
