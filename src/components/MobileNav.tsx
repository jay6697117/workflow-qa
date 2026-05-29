import { Bell, EnvelopeSimple, House, MagnifyingGlass, PencilSimpleLine } from '@phosphor-icons/react';

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="fixed bottom-20 right-5 z-30 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-pulse-blue text-white shadow-panel transition-colors duration-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 active:translate-y-px dark:focus:ring-offset-pulse-dark"
        aria-label="Create post"
      >
        <PencilSimpleLine className="h-6 w-6" aria-hidden="true" weight="bold" />
      </button>

      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 right-0 z-20 border-t border-pulse-border bg-white/95 px-5 py-2 backdrop-blur dark:border-slate-800 dark:bg-pulse-dark/95"
      >
        <div className="mx-auto flex max-w-xl items-center justify-between">
          {[
            { label: 'Home', icon: House, active: true },
            { label: 'Explore', icon: MagnifyingGlass },
            { label: 'Notifications', icon: Bell },
            { label: 'Messages', icon: EnvelopeSimple },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className={`flex min-h-12 min-w-12 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 hover:bg-pulse-soft focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 dark:hover:bg-slate-900 dark:focus:ring-offset-pulse-dark ${
                  item.active ? 'text-pulse-black dark:text-slate-100' : 'text-pulse-muted dark:text-slate-500'
                }`}
                aria-label={item.label}
                aria-current={item.active ? 'page' : undefined}
              >
                <Icon className="h-6 w-6" aria-hidden="true" weight={item.active ? 'fill' : 'regular'} />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
