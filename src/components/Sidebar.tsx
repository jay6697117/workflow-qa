import {
  Bell,
  BookmarkSimple,
  DotsThree,
  DotsThreeCircle,
  EnvelopeSimple,
  House,
  MagnifyingGlass,
  PencilSimpleLine,
  UserCircle,
} from '@phosphor-icons/react';
import { currentUser } from '../data/mockData';
import type { SidebarItem } from '../types';
import { Avatar } from './Avatar';

const items: SidebarItem[] = [
  { label: 'Home', icon: House, active: true },
  { label: 'Explore', icon: MagnifyingGlass },
  { label: 'Notifications', icon: Bell },
  { label: 'Messages', icon: EnvelopeSimple },
  { label: 'Bookmarks', icon: BookmarkSimple },
  { label: 'Profile', icon: UserCircle },
  { label: 'More', icon: DotsThreeCircle },
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-[100dvh] w-24 shrink-0 border-r border-pulse-border bg-white px-3 py-4 dark:border-slate-800 dark:bg-pulse-dark lg:flex xl:w-72 xl:px-6">
      <div className="flex h-full w-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-pulse-blue focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Skip to main content
        </a>

        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-black text-pulse-black transition-colors duration-200 hover:bg-pulse-soft dark:text-slate-100 dark:hover:bg-slate-900 xl:ml-0">
          <span aria-label="Pulse home">P</span>
        </div>

        <nav className="space-y-1" aria-label="Primary navigation">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className={`group flex min-h-12 w-full cursor-pointer items-center justify-center gap-4 rounded-full px-3 text-left text-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 dark:focus:ring-offset-pulse-dark xl:justify-start xl:px-4 ${
                  item.active
                    ? 'font-bold text-pulse-black dark:text-slate-100'
                    : 'font-medium text-pulse-black hover:bg-pulse-soft dark:text-slate-100 dark:hover:bg-slate-900'
                }`}
                aria-label={item.label}
                aria-current={item.active ? 'page' : undefined}
              >
                <Icon className="h-6 w-6" aria-hidden="true" weight={item.active ? 'fill' : 'regular'} />
                <span className="hidden xl:inline">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          className="mt-5 flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-pulse-blue px-4 font-bold text-white shadow-lg shadow-sky-200 transition-colors duration-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 active:translate-y-px dark:shadow-none dark:focus:ring-offset-pulse-dark xl:min-h-14"
        >
          <PencilSimpleLine className="h-5 w-5 xl:hidden" aria-hidden="true" weight="bold" />
          <span className="hidden xl:inline">Post</span>
          <span className="sr-only xl:hidden">Create post</span>
        </button>

        <button
          type="button"
          className="mt-auto flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full p-2 transition-colors duration-200 hover:bg-pulse-soft focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 dark:hover:bg-slate-900 dark:focus:ring-offset-pulse-dark xl:justify-start"
          aria-label="Open profile menu"
        >
          <Avatar
            initials={currentUser.avatar}
            color={currentUser.avatarColor}
            label={`${currentUser.name} avatar`}
            size="sm"
          />
          <span className="hidden min-w-0 flex-1 xl:block">
            <span className="block truncate font-bold text-pulse-black dark:text-slate-100">
              {currentUser.name}
            </span>
            <span className="block truncate text-sm text-pulse-muted dark:text-slate-500">
              @{currentUser.handle}
            </span>
          </span>
          <DotsThree className="hidden h-5 w-5 dark:text-slate-400 xl:block" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
