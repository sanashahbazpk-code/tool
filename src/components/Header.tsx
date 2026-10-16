import React from 'react';
import { Globe, Sparkles, ShieldCheck, Activity } from 'lucide-react';

interface HeaderProps {
  targetDomain?: string;
  generatedAt?: string;
  onAuditSelf?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  targetDomain,
  generatedAt,
  onAuditSelf,
}) => {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-[1.5px] flex items-center justify-center shadow-md shadow-blue-500/15">
            <div className="w-full h-full bg-white rounded-[9.5px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-sans">
                OmniAudit
              </h1>
              <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80">
                SEO · AEO · GEO
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Enterprise Search &amp; Generative AI Audit Intelligence
            </p>
          </div>
        </div>

        {/* Right Action / Status Banner */}
        <div className="flex items-center gap-3">
          {targetDomain && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-semibold text-slate-900 truncate max-w-[200px]">
                {targetDomain}
              </span>
              {generatedAt && <span className="text-[11px] text-slate-400">· {generatedAt}</span>}
            </div>
          )}

          {onAuditSelf && (
            <button
              onClick={onAuditSelf}
              className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs border border-blue-200 transition flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="Audit this web application right now"
            >
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              <span>Audit This App</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
