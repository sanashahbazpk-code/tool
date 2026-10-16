import React from 'react';
import { AuditReport } from '../types/seo';
import {
  generateHtmlReport,
  generateMarkdownReport,
  generateCsvReport,
  triggerFileDownload,
} from '../utils/exporters';
import { Download, FileCode, FileText, Database, Table } from 'lucide-react';

interface DownloadsViewProps {
  report: AuditReport;
}

export const DownloadsView: React.FC<DownloadsViewProps> = ({ report }) => {
  const host = report.site.host || 'audit';
  const timestamp = new Date().toISOString().replace(/[-:T]/g, '').substring(0, 12);

  const handleDownloadHtml = () => {
    const content = generateHtmlReport(report);
    triggerFileDownload(`${host}-${timestamp}-report.html`, content, 'text/html');
  };

  const handleDownloadMarkdown = () => {
    const content = generateMarkdownReport(report);
    triggerFileDownload(`${host}-${timestamp}-report.md`, content, 'text/markdown');
  };

  const handleDownloadJson = () => {
    const content = JSON.stringify(report, null, 2);
    triggerFileDownload(`${host}-${timestamp}-data.json`, content, 'application/json');
  };

  const handleDownloadCsv = () => {
    const content = generateCsvReport(report);
    triggerFileDownload(`${host}-${timestamp}-checks.csv`, content, 'text/csv');
  };

  const downloadCards = [
    {
      title: 'Self-Contained HTML Report',
      description: 'Single-file visual report complete with charts, styled tables, action items, and scorecards. Ready to share with clients or leadership.',
      icon: <FileCode className="w-6 h-6 text-emerald-600" />,
      onClick: handleDownloadHtml,
      buttonText: 'Download HTML Report',
      color: 'border-emerald-200/80 hover:border-emerald-400',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700',
    },
    {
      title: 'Executive Markdown Brief',
      description: 'Formatted markdown document suitable for GitHub repositories, Notion workspaces, or technical sprint backlogs.',
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      onClick: handleDownloadMarkdown,
      buttonText: 'Download Markdown',
      color: 'border-blue-200/80 hover:border-blue-400',
      btnColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'Full Audit JSON Dataset',
      description: 'Complete programmatic machine-readable dataset containing every check signal, weight, raw header, and competitor data point.',
      icon: <Database className="w-6 h-6 text-purple-600" />,
      onClick: handleDownloadJson,
      buttonText: 'Download JSON',
      color: 'border-purple-200/80 hover:border-purple-400',
      btnColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      title: 'All Checks CSV Spreadsheet',
      description: 'Comma-separated spreadsheet containing all itemized checks, status results, weights, and fix prescriptions for Excel/Google Sheets.',
      icon: <Table className="w-6 h-6 text-amber-600" />,
      onClick: handleDownloadCsv,
      buttonText: 'Download CSV',
      color: 'border-amber-200/80 hover:border-amber-400',
      btnColor: 'bg-amber-600 hover:bg-amber-700',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <Download className="w-5 h-5 text-blue-600" />
          Export Audit Intelligence Reports
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Export full audit findings, check evidence, competitor benchmarks, and action plans in your preferred format.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {downloadCards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-white border rounded-2xl p-6 flex flex-col justify-between transition shadow-xs ${card.color}`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 shadow-xs">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                {card.description}
              </p>
            </div>

            <button
              onClick={card.onClick}
              className={`w-full py-2.5 px-4 rounded-xl text-white text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-xs ${card.btnColor}`}
            >
              <Download className="w-4 h-4" />
              <span>{card.buttonText}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
