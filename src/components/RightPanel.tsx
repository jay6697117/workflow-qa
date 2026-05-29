import { MagnifyingGlass, Sparkle } from '@phosphor-icons/react';
import { KeyboardEvent, useState } from 'react';
import { trends } from '../data/mockData';
import type { SuggestedUser } from '../types';
import { Avatar } from './Avatar';
import { VerifiedBadge } from './VerifiedBadge';

type RightPanelProps = {
  people: SuggestedUser[];
  onShowToast: (message: string) => void;
  onToggleFollow: (userId: string) => void;
};

export function RightPanel({ people, onShowToast, onToggleFollow }: RightPanelProps) {
  const [query, setQuery] = useState('');

  function handleSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onShowToast(query.trim() ? 'Search is mocked in this MVP.' : 'Type a search term first.');
    }
  }

  return (
    <aside className="sticky top-0 hidden h-[100dvh] w-96 shrink-0 overflow-y-auto border-l border-pulse-border bg-white px-6 py-3 dark:border-slate-800 dark:bg-pulse-dark xl:block">
      <div className="space-y-4 pb-8">
        <label className="relative block" htmlFor="global-search">
          <span className="sr-only">Search Pulse</span>
          <MagnifyingGlass
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-pulse-muted dark:text-slate-500"
            aria-hidden="true"
          />
          <input
            id="global-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleSearchKeyDown}
            placeholder="Search"
            className="min-h-12 w-full rounded-full border border-transparent bg-pulse-soft pl-12 pr-4 text-base text-pulse-black outline-none transition-colors duration-200 placeholder:text-pulse-muted focus:border-pulse-blue focus:bg-white focus:ring-2 focus:ring-sky-100 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:bg-pulse-dark dark:focus:ring-sky-500/20"
          />
        </label>

        <section className="rounded-3xl bg-pulse-soft dark:bg-slate-900" aria-labelledby="trends-heading">
          <div className="px-4 py-3">
            <h2 id="trends-heading" className="text-xl font-extrabold text-pulse-black dark:text-slate-100">
              What is happening
            </h2>
          </div>
          <div className="divide-y divide-slate-200/70 dark:divide-slate-800">
            {trends.map((trend) => (
              <button
                key={trend.id}
                type="button"
                onClick={() => onShowToast(`${trend.label} trend is mocked.`)}
                className="block w-full cursor-pointer px-4 py-3 text-left transition-colors duration-200 hover:bg-slate-200/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pulse-blue dark:hover:bg-slate-800"
              >
                <span className="block text-sm text-pulse-muted dark:text-slate-500">{trend.category}</span>
                <span className="mt-1 block font-bold text-pulse-black dark:text-slate-100">
                  #{trend.label}
                </span>
                <span className="mt-1 block text-sm text-pulse-muted dark:text-slate-500">
                  {trend.posts}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-pulse-soft dark:bg-slate-900" aria-labelledby="follow-heading">
          <div className="px-4 py-3">
            <h2 id="follow-heading" className="text-xl font-extrabold text-pulse-black dark:text-slate-100">
              Who to follow
            </h2>
          </div>
          <div className="divide-y divide-slate-200/70 dark:divide-slate-800">
            {people.map((person) => (
              <div key={person.id} className="flex items-center gap-3 px-4 py-3">
                <Avatar
                  initials={person.avatar}
                  color={person.avatarColor}
                  label={`${person.name} avatar`}
                  size="sm"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex min-w-0 items-center gap-1">
                    <span className="truncate font-bold text-pulse-black dark:text-slate-100">
                      {person.name}
                    </span>
                    {person.verified ? <VerifiedBadge /> : null}
                  </div>
                  <p className="truncate text-sm text-pulse-muted dark:text-slate-500">@{person.handle}</p>
                  <p className="mt-0.5 truncate text-sm text-pulse-muted dark:text-slate-500">
                    {person.bio}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onToggleFollow(person.id)}
                  className={`min-h-9 cursor-pointer rounded-full px-4 text-sm font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 active:translate-y-px dark:focus:ring-offset-slate-900 ${
                    person.following
                      ? 'border border-slate-300 bg-white text-pulse-black hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-rose-500/40 dark:hover:bg-rose-500/10 dark:hover:text-rose-400'
                      : 'bg-pulse-black text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-pulse-black dark:hover:bg-slate-300'
                  }`}
                  aria-pressed={person.following}
                >
                  {person.following ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-3xl border border-sky-100 bg-sky-50 p-4 dark:border-sky-500/20 dark:bg-sky-500/10"
          aria-labelledby="mvp-heading"
        >
          <div className="flex items-center gap-2 text-pulse-blue">
            <Sparkle className="h-5 w-5" aria-hidden="true" weight="fill" />
            <h2 id="mvp-heading" className="font-extrabold">
              MVP coverage
            </h2>
          </div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <li>Typed mock data and local mutations.</li>
            <li>Post composer with validation.</li>
            <li>Responsive sidebar, feed, and mobile nav.</li>
            <li>Accessible focus rings and labels.</li>
          </ul>
        </section>
      </div>
    </aside>
  );
}
