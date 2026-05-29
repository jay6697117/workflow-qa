import {
  Bell,
  Bookmark,
  Home,
  Mail,
  MoreHorizontal,
  Search,
  SquarePen,
  User,
} from 'lucide-react';
import type { SidebarItem } from '../types';

const items: SidebarItem[] = [
  { label: 'Home', icon: Home, active: true },
  { label: 'Explore', icon: Search },
  { label: 'Notifications', icon: Bell },
  { label: 'Messages', icon: Mail },
  { label: 'Bookmarks', icon: Bookmark },
  { label: 'Profile', icon: User },
  { label: 'More', icon: MoreHorizontal },
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-24 shrink-0 border-r border-pulse-border bg-white px-3 py-4 lg:flex xl:w-72 xl:px-6">
      <div className="flex h-full w-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-pulse-blue focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Skip to main content
        </a>

        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-black text-pulse-black transition-colors duration-200 hover:bg-pulse-soft xl:ml-0">
          <span aria-label="Pulse home">P</span>
        </div>

        <nav className="space-y-1" aria-label="Primary navigation">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className={`group flex min-h-12 w-full cursor-pointer items-center justify-center gap-4 rounded-full px-3 text-left text-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 xl:justify-start xl:px-4 ${
                  item.active
                    ? 'font-bold text-pulse-black'
                    : 'font-medium text-pulse-black hover:bg-pulse-soft'
                }`}
                aria-label={item.label}
                aria-current={item.active ? 'page' : undefined}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="hidden xl:inline">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          className="mt-5 flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-pulse-blue px-4 font-bold text-white shadow-lg shadow-sky-200 transition-colors duration-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 xl:min-h-14"
        >
          <SquarePen className="h-5 w-5 xl:hidden" aria-hidden="true" />
          <span className="hidden xl:inline">Post</span>
          <span className="sr-only xl:hidden">Create post</span>
        </button>

        <button
          type="button"
          className="mt-auto flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full p-2 transition-colors duration-200 hover:bg-pulse-soft focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 xl:justify-start"
          aria-label="Open profile menu"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pulse-black text-sm font-bold text-white">
            YO
          </span>
          <span className="hidden min-w-0 flex-1 xl:block">
            <span className="block truncate font-bold text-pulse-black">You</span>
            <span className="block truncate text-sm text-pulse-muted">@you</span>
          </span>
          <MoreHorizontal className="hidden h-5 w-5 xl:block" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
