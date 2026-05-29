import { Image, MapPin, Smiley } from '@phosphor-icons/react';
import { FormEvent, useMemo, useState } from 'react';
import { currentUser } from '../data/mockData';
import { getCharacterStatus } from '../lib/formatters';
import { Avatar } from './Avatar';

type ComposerProps = {
  maxLength: number;
  onCreatePost: (content: string) => boolean;
  onShowToast: (message: string) => void;
};

export function Composer({ maxLength, onCreatePost, onShowToast }: ComposerProps) {
  const [draft, setDraft] = useState('');
  const [error, setError] = useState('');

  const normalizedDraft = draft.trim();
  const characterStatus = useMemo(
    () => getCharacterStatus(draft.length, maxLength),
    [draft.length, maxLength],
  );
  const isValid = normalizedDraft.length > 0 && !characterStatus.isOverLimit;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (normalizedDraft.length === 0) {
      setError('Write something before posting.');
      return;
    }

    if (characterStatus.isOverLimit) {
      setError(`Your post is ${Math.abs(characterStatus.remaining)} characters too long.`);
      return;
    }

    const created = onCreatePost(normalizedDraft);

    if (created) {
      setDraft('');
      setError('');
    }
  }

  function handleMockTool(label: string) {
    onShowToast(`${label} is mocked in this MVP.`);
  }

  return (
    <form
      className="border-b border-pulse-border bg-white px-4 py-4 dark:border-slate-800 dark:bg-pulse-dark sm:px-5"
      onSubmit={handleSubmit}
      aria-label="Create a new post"
    >
      <div className="flex gap-3">
        <Avatar
          initials={currentUser.avatar}
          color={currentUser.avatarColor}
          label={`${currentUser.name} avatar`}
        />

        <div className="min-w-0 flex-1">
          <label htmlFor="post-composer" className="sr-only">
            What is happening?
          </label>
          <textarea
            id="post-composer"
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value);
              if (error) {
                setError('');
              }
            }}
            placeholder="What is happening?"
            rows={3}
            className="block w-full resize-none border-0 bg-transparent text-xl leading-7 text-pulse-black placeholder:text-pulse-muted focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
            aria-describedby="composer-help composer-error"
          />

          <div id="composer-help" className="mt-3 flex flex-wrap items-center gap-2 text-sm text-pulse-blue">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-semibold dark:border-sky-500/20 dark:bg-sky-500/10">
              Everyone can reply
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-pulse-border pt-3 dark:border-slate-800">
            <div className="flex items-center gap-1 text-pulse-blue">
              {[
                { label: 'Add image', icon: Image },
                { label: 'Add feeling', icon: Smiley },
                { label: 'Add location', icon: MapPin },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleMockTool(item.label)}
                    className="flex min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 dark:hover:bg-sky-500/10 dark:focus:ring-offset-pulse-dark"
                    aria-label={item.label}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-sm font-semibold ${
                  characterStatus.isOverLimit
                    ? 'text-rose-600 dark:text-rose-400'
                    : characterStatus.isNearLimit
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-pulse-muted dark:text-slate-500'
                }`}
                aria-live="polite"
              >
                {characterStatus.remaining}
              </span>
              <button
                type="submit"
                disabled={!isValid}
                className="min-h-10 cursor-pointer rounded-full bg-pulse-blue px-5 font-bold text-white transition-colors duration-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 active:translate-y-px disabled:cursor-not-allowed disabled:bg-sky-200 disabled:text-white dark:focus:ring-offset-pulse-dark dark:disabled:bg-sky-900 dark:disabled:text-slate-400"
              >
                Post
              </button>
            </div>
          </div>

          <p
            id="composer-error"
            className={`mt-2 text-sm font-semibold text-rose-600 dark:text-rose-400 ${
              error ? 'block' : 'hidden'
            }`}
            aria-live="assertive"
          >
            {error}
          </p>
        </div>
      </div>
    </form>
  );
}
