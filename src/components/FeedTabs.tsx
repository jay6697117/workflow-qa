import type { FeedTab } from '../types';

type FeedTabsProps = {
  activeTab: FeedTab;
  onChange: (tab: FeedTab) => void;
};

const tabs: Array<{ id: FeedTab; label: string }> = [
  { id: 'for-you', label: 'For you' },
  { id: 'following', label: 'Following' },
];

export function FeedTabs({ activeTab, onChange }: FeedTabsProps) {
  return (
    <div className="sticky top-0 z-10 border-b border-pulse-border bg-white/90 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3 sm:px-5">
        <h1 className="text-xl font-extrabold text-pulse-black">Home</h1>
      </div>

      <div className="grid grid-cols-2" role="tablist" aria-label="Feed filters">
        {tabs.map((tab) => {
          const isSelected = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className="flex min-h-12 cursor-pointer items-center justify-center font-semibold text-pulse-muted transition-colors duration-200 hover:bg-pulse-soft focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pulse-blue"
              onClick={() => onChange(tab.id)}
            >
              <span className="relative flex h-full items-center px-2">
                <span className={isSelected ? 'text-pulse-black' : ''}>{tab.label}</span>
                {isSelected ? (
                  <span className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-pulse-blue" />
                ) : null}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
