import React from "react";
import { Code2, Briefcase, Send } from "lucide-react";

export type TabType = "projects" | "experience" | "contact";

interface TabNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const TabNav: React.FC<TabNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="flex items-center gap-4 sm:gap-6 mb-6 border-b border-neutral-800 overflow-x-auto pb-0">
      <button
        onClick={() => setActiveTab("projects")}
        className={`flex items-center gap-2 pb-3 text-xs sm:text-sm transition-colors whitespace-nowrap flex-shrink-0 ${
          activeTab === "projects"
            ? "text-amber-400 border-b-2 border-amber-400"
            : "text-neutral-500 hover:text-neutral-300"
        }`}
      >
        <Code2 className="w-3.5 h-3.5" />
        <span>projects</span>
      </button>
      <button
        onClick={() => setActiveTab("experience")}
        className={`flex items-center gap-2 pb-3 text-xs sm:text-sm transition-colors whitespace-nowrap flex-shrink-0 ${
          activeTab === "experience"
            ? "text-amber-400 border-b-2 border-amber-400"
            : "text-neutral-500 hover:text-neutral-300"
        }`}
      >
        <Briefcase className="w-3.5 h-3.5" />
        <span>experience</span>
      </button>
      <button
        onClick={() => setActiveTab("contact")}
        className={`flex items-center gap-2 pb-3 text-xs sm:text-sm transition-colors whitespace-nowrap flex-shrink-0 ${
          activeTab === "contact"
            ? "text-amber-400 border-b-2 border-amber-400"
            : "text-neutral-500 hover:text-neutral-300"
        }`}
      >
        <Send className="w-3.5 h-3.5" />
        <span>contact</span>
      </button>
    </nav>
  );
};
