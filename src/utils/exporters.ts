import { AuditReport } from '../types/seo';

export function generateHtmlReport(report: AuditReport): string {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return '#39d98a';
      case 'warn': return '#ffcc48';
      case 'fail': return '#ff5c6c';
      case 'info': return '#63b3ff';
      default: return '#9aa3b2';
    }
  };

  const checksHtml = report.checks.map(c => `
    <tr>
      <td>${c.title}</td>
      <td><span style="display:inline-block;padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700;background:rgba(255,255,255,0.08);color:${getStatusColor(c.status)};text-transform:uppercase;">${c.status}</span></td>
      <td>${c.detail || ''}</td>
      <td style="color:#39d98a;">${c.fix || ''}</td>
    </tr>
  `).join('');

  const competitorsHtml = (report.competitor_snapshots || []).map(cs => `
    <tr>
      <td><strong>${cs.domain}</strong></td>
      <td>${cs.page_type}</td>
      <td>${cs.words}</td>
      <td>${cs.has_faq_schema ? 'Yes' : 'No'}</td>
      <td>${cs.has_org_schema ? 'Yes' : 'No'}</td>
      <td>${cs.citations}</td>
      <td>${cs.response_time}s</td>
    </tr>
  `).join('');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>SEO / AEO / GEO Research Report — ${report.target}</title>
  <style>
    :root {
      --bg:#0f1116;--card:#171a21;--line:#262b36;--txt:#e8ebf0;--dim:#9aa3b2;
      --pass:#39d98a;--warn:#ffcc48;--fail:#ff5c6c;--info:#63b3ff;--accent:#7c9cff;
    }
    *{box-sizing:border-box}
    body{margin:0;background:var(--bg);color:var(--txt);font:14px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:30px 20px;}
    .wrap{max-width:1100px;margin:0 auto;}
    h1{font-size:28px;margin:0 0 6px;}
    h2{font-size:20px;margin:36px 0 14px;padding-bottom:8px;border-bottom:1px solid var(--line);}
    .meta{color:var(--dim);margin-bottom:24px;font-size:13px;}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-bottom:24px;}
    .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px;}
    .card .label{font-size:12px;text-transform:uppercase;color:var(--dim);letter-spacing:.05em;}
    .card .score{font-size:36px;font-weight:700;margin:6px 0 2px;}
    .card .sub{font-size:12px;color:var(--dim);}
    table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px;}
    th,td{border:1px solid var(--line);padding:8px 10px;text-align:left;}
    th{background:#1d2129;color:var(--dim);font-weight:600;}
    tr:nth-child(even) td{background:#141821;}
    .fix{color:var(--pass);}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>SEO / AEO / GEO Research Report</h1>
    <div class="meta">Target: <strong>${report.target}</strong> &nbsp;·&nbsp; Generated ${report.generated_at}</div>

    <div class="grid">
      <div class="card">
        <div class="label">SEO Score</div>
        <div class="score" style="color: ${getStatusColor(report.scores.seo.score >= 80 ? 'pass' : report.scores.seo.score >= 60 ? 'warn' : 'fail')}">${report.scores.seo.score}<span class="sub">/100 (${report.scores.seo.grade})</span></div>
        <div class="sub">Google ranking readiness</div>
      </div>
      <div class="card">
        <div class="label">AEO Score</div>
        <div class="score" style="color: ${getStatusColor(report.scores.aeo.score >= 80 ? 'pass' : report.scores.aeo.score >= 60 ? 'warn' : 'fail')}">${report.scores.aeo.score}<span class="sub">/100 (${report.scores.aeo.grade})</span></div>
        <div class="sub">Snippets & People Also Ask</div>
      </div>
      <div class="card">
        <div class="label">GEO Score</div>
        <div class="score" style="color: ${getStatusColor(report.scores.geo.score >= 80 ? 'pass' : report.scores.geo.score >= 60 ? 'warn' : 'fail')}">${report.scores.geo.score}<span class="sub">/100 (${report.scores.geo.grade})</span></div>
        <div class="sub">ChatGPT, Perplexity & AI Overviews</div>
      </div>
      <div class="card">
        <div class="label">Overall Score</div>
        <div class="score" style="color: ${getStatusColor(report.scores.overall.score >= 80 ? 'pass' : report.scores.overall.score >= 60 ? 'warn' : 'fail')}">${report.scores.overall.score}<span class="sub">/100 (${report.scores.overall.grade})</span></div>
        <div class="sub">Weighted composite index</div>
      </div>
    </div>

    <h2>Competitor Comparison</h2>
    <table>
      <thead>
        <tr>
          <th>Domain</th>
          <th>Page Type</th>
          <th>Words</th>
          <th>FAQ Schema</th>
          <th>Org Schema</th>
          <th>Citations</th>
          <th>Resp Time</th>
        </tr>
      </thead>
      <tbody>
        ${competitorsHtml}
      </tbody>
    </table>

    <h2>Audit Checks (${report.checks.length})</h2>
    <table>
      <thead>
        <tr>
          <th>Check</th>
          <th>Status</th>
          <th>Detail</th>
          <th>Recommended Fix</th>
        </tr>
      </thead>
      <tbody>
        ${checksHtml}
      </tbody>
    </table>
  </div>
</body>
</html>`;
}

export function generateMarkdownReport(report: AuditReport): string {
  let md = `# SEO / AEO / GEO Research Report — ${report.target}\n\n`;
  md += `**Generated:** ${report.generated_at}\n\n`;
  md += `## Scores\n\n`;
  md += `- **SEO:** ${report.scores.seo.score}/100 (Grade ${report.scores.seo.grade})\n`;
  md += `- **AEO:** ${report.scores.aeo.score}/100 (Grade ${report.scores.aeo.grade})\n`;
  md += `- **GEO:** ${report.scores.geo.score}/100 (Grade ${report.scores.geo.grade})\n`;
  md += `- **Overall:** ${report.scores.overall.score}/100 (Grade ${report.scores.overall.grade})\n\n`;

  if (report.action_plan?.high_impact?.length) {
    md += `## P0 — High Impact Failures\n\n`;
    report.action_plan.high_impact.forEach(item => {
      md += `### ${item.title} [${item.category.toUpperCase()}]\n`;
      md += `* **Problem:** ${item.problem}\n`;
      md += `* **Action:** ${item.action}\n\n`;
    });
  }

  md += `## All Checks\n\n`;
  md += `| Category | Check | Status | Weight | Detail | Fix |\n`;
  md += `|---|---|---|---|---|---|\n`;
  report.checks.forEach(c => {
    md += `| ${c.category} | ${c.title} | ${c.status.toUpperCase()} | ${c.weight} | ${c.detail.replace(/\|/g, '-')} | ${(c.fix || '').replace(/\|/g, '-')} |\n`;
  });

  return md;
}

export function generateCsvReport(report: AuditReport): string {
  const headers = ['Category', 'Check Title', 'Status', 'Weight', 'Detail', 'Fix'];
  const rows = report.checks.map(c => [
    `"${c.category}"`,
    `"${c.title.replace(/"/g, '""')}"`,
    `"${c.status.toUpperCase()}"`,
    c.weight,
    `"${(c.detail || '').replace(/"/g, '""')}"`,
    `"${(c.fix || '').replace(/"/g, '""')}"`,
  ]);

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

export function triggerFileDownload(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
