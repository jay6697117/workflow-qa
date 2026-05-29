import { Image, MapPin, Smile } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';
import { getCharacterStatus } from '../lib/formatters';
import { Avatar } from './Avatar';

type ComposerProps = {
  maxLength: number;
  onCreatePost: (content: string) => boolean;
};

export function Composer({ maxLength, onCreatePost }: ComposerProps) {
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

  return (
    <form
      className="border-b border-pulse-border bg-white px-4 py-4 sm:px-5"
      onSubmit={handleSubmit}
      aria-label="Create a new post"
    >
      <div className="flex gap-3">
        <Avatar initials="YO" />

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
            className="block w-full resize-none border-0 bg-transparent text-xl leading-7 text-pulse-black placeholder:text-pulse-muted focus:outline-none"
            aria-describedby="composer-help composer-error"
          />

          <div id="composer-help" className="mt-3 flex flex-wrap items-center gap-2 text-sm text-pulse-blue">
            <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 font-semibold">
              Everyone can reply
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-pulse-border pt-3">
            <div className="flex items-center gap-1 text-pulse-blue">
              {[
                { label: 'Add image', icon: Image },
                { label: 'Add feeling', icon: Smile },
                { label: 'Add location', icon: MapPin },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    type="button"
                    className="flex min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2"
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
                    ? 'text-rose-600'
                    : characterStatus.isNearLimit
                      ? 'text-amber-600'
                      : 'text-pulse-muted'
                }`}
                aria-live="polite"
              >
                {characterStatus.remaining}
              </span>
              <button
                type="submit"
                disabled={!isValid}
                className="min-h-10 cursor-pointer rounded-full bg-pulse-blue px-5 font-bold text-white transition-colors duration-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-sky-200"
              >
                Post
              </button>
            </div>
          </div>

          <p
            id="composer-error"
            className={`mt-2 text-sm font-semibold text-rose-600 ${error ? 'block' : 'hidden'}`}
            aria-live="assertive"
          >
            {error}
          </p>
        </div>
      </div>
    </form>
  );
}
