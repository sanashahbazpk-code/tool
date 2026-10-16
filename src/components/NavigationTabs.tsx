import React from 'react';
import {
  Gauge,
  Rocket,
  ListTodo,
  Target,
  Layers,
  TrendingUp,
  Users,
  Search,
  Link2,
  Bot,
  CheckCircle2,
  FileSpreadsheet,
  Download,
  AlertTriangle,
} from 'lucide-react';

export type ViewTab =
  | 'scores'
  | 'blueprint'
  | 'actions'
  | 'gap'
  | 'topical'
  | 'factors'
  | 'competitors'
  | 'keywords'
  | 'backlinks'
  | 'prompts'
  | 'checks'
  | 'evidence'
  | 'downloads'
  | 'caveats';

interface NavigationTabsProps {
  currentView: ViewTab;
  onSelectView: (tab: ViewTab) => void;
  problemsCount?: number;
  checksCount?: number;
  gapCount?: number;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  currentView,
  onSelectView,
  problemsCount = 0,
  checksCount = 0,
  gapCount = 0,
}) => {
  const tabs: {
    id: ViewTab;
    label: string;
    icon: React.ReactNode;
    badge?: string | number;
    badgeColor?: string;
  }[] = [
    { id: 'scores', label: 'Scores', icon: <Gauge className="w-4 h-4" /> },
    {
      id: 'blueprint',
      label: 'Growth Blueprint',
      icon: <Rocket className="w-4 h-4" />,
      badge: '6 Pillars',
      badgeColor: 'bg-amber-100 text-amber-800 border border-amber-200',
    },
    {
      id: 'actions',
      label: 'Action Plan',
      icon: <ListTodo className="w-4 h-4" />,
      badge: problemsCount > 0 ? problemsCount : undefined,
      badgeColor: 'bg-rose-100 text-rose-800 border border-rose-200',
    },
    {
      id: 'gap',
      label: 'Keyword Gap',
      icon: <Target className="w-4 h-4" />,
      badge: gapCount > 0 ? `${gapCount}` : undefined,
      badgeColor: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    },
    { id: 'topical', label: 'Topical Map & NLP', icon: <Layers className="w-4 h-4" /> },
    { id: 'factors', label: 'Why They Rank', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'competitors', label: 'Competitors', icon: <Users className="w-4 h-4" /> },
    { id: 'keywords', label: 'Keyword Ideas', icon: <Search className="w-4 h-4" /> },
    { id: 'backlinks', label: 'Backlinks', icon: <Link2 className="w-4 h-4" /> },
    { id: 'prompts', label: 'AI Prompts', icon: <Bot className="w-4 h-4" /> },
    {
      id: 'checks',
      label: 'All Checks',
      icon: <CheckCircle2 className="w-4 h-4" />,
      badge: checksCount > 0 ? checksCount : undefined,
      badgeColor: 'bg-blue-100 text-blue-800 border border-blue-200',
    },
    { id: 'evidence', label: 'Evidence', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { id: 'downloads', label: 'Downloads', icon: <Download className="w-4 h-4" /> },
    { id: 'caveats', label: 'Caveats & Limits', icon: <AlertTriangle className="w-4 h-4" /> },
  ];

  return (
    <div className="border-b border-slate-200 mb-8 overflow-x-auto scrollbar-none">
      <nav className="flex items-center gap-1.5 min-w-max pb-2.5">
        {tabs.map((tab) => {
          const isActive = currentView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectView(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer select-none ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : tab.badgeColor
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
