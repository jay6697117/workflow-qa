import { Bell, Home, Mail, Search, SquarePen } from 'lucide-react';

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="fixed bottom-20 right-5 z-30 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-pulse-blue text-white shadow-panel transition-colors duration-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2"
        aria-label="Create post"
      >
        <SquarePen className="h-6 w-6" aria-hidden="true" />
      </button>

      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 right-0 z-20 border-t border-pulse-border bg-white/95 px-5 py-2 backdrop-blur"
      >
        <div className="mx-auto flex max-w-xl items-center justify-between">
          {[
            { label: 'Home', icon: Home, active: true },
            { label: 'Explore', icon: Search },
            { label: 'Notifications', icon: Bell },
            { label: 'Messages', icon: Mail },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className={`flex min-h-12 min-w-12 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 hover:bg-pulse-soft focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 ${
                  item.active ? 'text-pulse-black' : 'text-pulse-muted'
                }`}
                aria-label={item.label}
                aria-current={item.active ? 'page' : undefined}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
