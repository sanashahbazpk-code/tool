import React, { useState } from 'react';
import { AuditReport, AiPromptTemplate } from '../types/seo';
import { Copy, Check, Bot, Lightbulb } from 'lucide-react';

interface AiPromptsViewProps {
  report: AuditReport;
}

export const AiPromptsView: React.FC<AiPromptsViewProps> = ({ report }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const prompts: AiPromptTemplate[] = report.ai_prompts || [];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Bot className="w-5 h-5 text-purple-600" />
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Tailored AI Execution Prompts
          </h2>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            {prompts.length} Execution Prompts
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
          Copy and paste these pre-engineered prompts into ChatGPT, Claude, or Gemini to automatically write 40-60w snippet answer blocks, generate validated JSON-LD schema, and expand topical entities.
        </p>
      </div>

      {/* Strategy Callout */}
      <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/80 text-xs text-slate-700 flex items-start gap-3">
        <Lightbulb className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-purple-950 font-bold block mb-0.5">Automated Content Strategy:</strong>
          Instead of manual drafting, use these structured prompts to produce agency-grade AEO answer blocks, schema markup, and semantic outlines in seconds for your brand.
        </div>
      </div>

      {/* Prompts Cards */}
      <div className="space-y-5">
        {prompts.map((p) => {
          const isCopied = copiedId === p.id;

          return (
            <div
              key={p.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 hover:border-purple-300 transition shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                      {p.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">{p.title}</h3>
                  </div>

                  <button
                    onClick={() => handleCopy(p.id, p.prompt)}
                    className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shadow-xs"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied Prompt' : 'Copy Prompt'}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                  {p.description}
                </p>

                <div className="relative">
                  <pre className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed select-all overflow-x-auto">
                    {p.prompt}
                  </pre>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
