"use client";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export default function Tabs({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}: TabsProps) {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <nav className="-mb-px flex space-x-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-4 px-2 border-b-3 font-semibold text-base transition-colors duration-200 ${
              activeTab === tab.id
                ? "border-cyan-400 text-cyan-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center space-x-3">
              {tab.icon && (
                <span
                  className={
                    activeTab === tab.id ? "text-cyan-500" : "text-gray-400"
                  }
                >
                  {tab.icon}
                </span>
              )}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}
