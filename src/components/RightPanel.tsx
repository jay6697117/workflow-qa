import { Search, Sparkles } from 'lucide-react';
import { trends } from '../data/mockData';
import type { SuggestedUser } from '../types';
import { Avatar } from './Avatar';
import { VerifiedBadge } from './VerifiedBadge';

type RightPanelProps = {
  people: SuggestedUser[];
  onToggleFollow: (userId: string) => void;
};

export function RightPanel({ people, onToggleFollow }: RightPanelProps) {
  return (
    <aside className="sticky top-0 hidden h-screen w-96 shrink-0 overflow-y-auto border-l border-pulse-border bg-white px-6 py-3 xl:block">
      <div className="space-y-4 pb-8">
        <label className="relative block" htmlFor="global-search">
          <span className="sr-only">Search Pulse</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-pulse-muted"
            aria-hidden="true"
          />
          <input
            id="global-search"
            type="search"
            placeholder="Search"
            className="min-h-12 w-full rounded-full border border-transparent bg-pulse-soft pl-12 pr-4 text-base text-pulse-black outline-none transition-colors duration-200 placeholder:text-pulse-muted focus:border-pulse-blue focus:bg-white focus:ring-2 focus:ring-sky-100"
          />
        </label>

        <section className="rounded-3xl bg-pulse-soft" aria-labelledby="trends-heading">
          <div className="px-4 py-3">
            <h2 id="trends-heading" className="text-xl font-extrabold text-pulse-black">
              What is happening
            </h2>
          </div>
          <div className="divide-y divide-slate-200/70">
            {trends.map((trend) => (
              <button
                key={trend.id}
                type="button"
                className="block w-full cursor-pointer px-4 py-3 text-left transition-colors duration-200 hover:bg-slate-200/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pulse-blue"
              >
                <span className="block text-sm text-pulse-muted">{trend.category}</span>
                <span className="mt-1 block font-bold text-pulse-black">#{trend.label}</span>
                <span className="mt-1 block text-sm text-pulse-muted">{trend.posts}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-pulse-soft" aria-labelledby="follow-heading">
          <div className="px-4 py-3">
            <h2 id="follow-heading" className="text-xl font-extrabold text-pulse-black">
              Who to follow
            </h2>
          </div>
          <div className="divide-y divide-slate-200/70">
            {people.map((person) => (
              <div key={person.id} className="flex items-center gap-3 px-4 py-3">
                <Avatar initials={person.avatar} size="sm" />
                <div className="min-w-0 flex-1">
                  <div className="flex min-w-0 items-center gap-1">
                    <span className="truncate font-bold text-pulse-black">{person.name}</span>
                    {person.verified ? <VerifiedBadge /> : null}
                  </div>
                  <p className="truncate text-sm text-pulse-muted">@{person.handle}</p>
                  <p className="mt-0.5 truncate text-sm text-pulse-muted">{person.bio}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onToggleFollow(person.id)}
                  className={`min-h-9 cursor-pointer rounded-full px-4 text-sm font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 ${
                    person.following
                      ? 'border border-slate-300 bg-white text-pulse-black hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600'
                      : 'bg-pulse-black text-white hover:bg-slate-700'
                  }`}
                  aria-pressed={person.following}
                >
                  {person.following ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-4" aria-labelledby="mvp-heading">
          <div className="flex items-center gap-2 text-pulse-blue">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <h2 id="mvp-heading" className="font-extrabold">
              MVP coverage
            </h2>
          </div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
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
