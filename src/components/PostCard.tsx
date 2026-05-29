import {
  BookmarkSimple,
  ChartBar,
  ChatCircle,
  DotsThree,
  Heart,
  Repeat,
  ShareFat,
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import { formatCount } from '../lib/formatters';
import type { Post } from '../types';
import { Avatar } from './Avatar';
import { VerifiedBadge } from './VerifiedBadge';

type PostCardProps = {
  post: Post;
  onShowToast: (message: string) => void;
  onToggleBookmark: (postId: string) => void;
  onToggleLike: (postId: string) => void;
  onToggleRepost: (postId: string) => void;
};

export function PostCard({
  post,
  onShowToast,
  onToggleBookmark,
  onToggleLike,
  onToggleRepost,
}: PostCardProps) {
  return (
    <article className="border-b border-pulse-border bg-white px-4 py-4 transition-colors duration-200 hover:bg-slate-50/70 dark:border-slate-800 dark:bg-pulse-dark dark:hover:bg-slate-950 sm:px-5">
      <div className="flex gap-3">
        <Avatar
          initials={post.author.avatar}
          color={post.author.avatarColor}
          label={`${post.author.name} avatar`}
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex min-w-0 flex-wrap items-center gap-x-1">
                <span className="truncate font-bold text-pulse-black dark:text-slate-100">
                  {post.author.name}
                </span>
                {post.author.verified ? <VerifiedBadge /> : null}
                <span className="truncate text-pulse-muted dark:text-slate-500">
                  @{post.author.handle}
                </span>
                <span className="text-pulse-muted dark:text-slate-500">·</span>
                <span className="text-pulse-muted dark:text-slate-500">{post.timestamp}</span>
              </div>
              {post.topic ? (
                <p className="mt-0.5 text-sm text-pulse-blue">{post.topic}</p>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => onShowToast('More actions are mocked in this MVP.')}
              className="flex min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full text-pulse-muted transition-colors duration-200 hover:bg-sky-50 hover:text-pulse-blue focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 dark:text-slate-500 dark:hover:bg-sky-500/10 dark:focus:ring-offset-pulse-dark"
              aria-label="More post actions"
            >
              <DotsThree className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-2 whitespace-pre-line text-[15px] leading-6 text-pulse-black dark:text-slate-100 sm:text-base">
            {post.content}
          </p>

          {post.media ? (
            <div
              className={`mt-3 overflow-hidden rounded-3xl border border-pulse-border bg-gradient-to-br ${post.media.gradient} dark:border-slate-700`}
            >
              <div
                className="flex aspect-[16/9] items-end p-5 text-white"
                role="img"
                aria-label={post.media.alt}
              >
                <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-bold backdrop-blur">
                  {post.media.label}
                </span>
              </div>
            </div>
          ) : null}

          <div className="mt-4 grid grid-cols-5 items-center text-pulse-muted dark:text-slate-500">
            <PostAction
              label={`${post.metrics.replies} replies`}
              icon={ChatCircle}
              value={formatCount(post.metrics.replies)}
              colorClassName="hover:bg-sky-50 hover:text-pulse-blue focus:ring-pulse-blue dark:hover:bg-sky-500/10"
              onClick={() => onShowToast('Replies are mocked in this MVP.')}
            />
            <PostAction
              label={`${post.metrics.reposts} reposts`}
              icon={Repeat}
              value={formatCount(post.metrics.reposts)}
              active={post.reposted}
              colorClassName="hover:bg-emerald-50 hover:text-emerald-600 focus:ring-emerald-500 dark:hover:bg-emerald-500/10"
              activeClassName="text-emerald-600 dark:text-emerald-400"
              onClick={() => onToggleRepost(post.id)}
            />
            <PostAction
              label={`${post.metrics.likes} likes`}
              icon={Heart}
              value={formatCount(post.metrics.likes)}
              active={post.liked}
              colorClassName="hover:bg-rose-50 hover:text-rose-600 focus:ring-rose-500 dark:hover:bg-rose-500/10"
              activeClassName="text-rose-600 dark:text-rose-400"
              weight={post.liked ? 'fill' : 'regular'}
              onClick={() => onToggleLike(post.id)}
            />
            <PostAction
              label={`${post.metrics.views} views`}
              icon={ChartBar}
              value={post.metrics.views}
              colorClassName="hover:bg-sky-50 hover:text-pulse-blue focus:ring-pulse-blue dark:hover:bg-sky-500/10"
              onClick={() => onShowToast('Analytics are mocked in this MVP.')}
            />
            <div className="flex justify-end gap-1">
              <button
                type="button"
                onClick={() => onToggleBookmark(post.id)}
                className={`flex min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 hover:bg-sky-50 hover:text-pulse-blue focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 active:translate-y-px dark:hover:bg-sky-500/10 dark:focus:ring-offset-pulse-dark ${
                  post.bookmarked ? 'text-pulse-blue' : ''
                }`}
                aria-label={post.bookmarked ? 'Remove bookmark' : 'Bookmark post'}
                aria-pressed={post.bookmarked}
              >
                <BookmarkSimple
                  className="h-5 w-5"
                  aria-hidden="true"
                  weight={post.bookmarked ? 'fill' : 'regular'}
                />
              </button>
              <button
                type="button"
                onClick={() => onShowToast('Share is mocked in this MVP.')}
                className="hidden min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 hover:bg-sky-50 hover:text-pulse-blue focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 active:translate-y-px dark:hover:bg-sky-500/10 dark:focus:ring-offset-pulse-dark sm:flex"
                aria-label="Share post"
              >
                <ShareFat className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

type PostActionProps = {
  active?: boolean;
  activeClassName?: string;
  colorClassName: string;
  icon: Icon;
  label: string;
  onClick?: () => void;
  value: string;
  weight?: 'regular' | 'fill';
};

function PostAction({
  active,
  activeClassName = 'text-pulse-blue',
  colorClassName,
  icon: Icon,
  label,
  onClick,
  value,
  weight = 'regular',
}: PostActionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-10 cursor-pointer items-center gap-1 rounded-full pr-2 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:translate-y-px dark:focus:ring-offset-pulse-dark ${colorClassName} ${
        active ? activeClassName : ''
      }`}
      aria-label={label}
      aria-pressed={onClick ? Boolean(active) : undefined}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-current/10">
        <Icon className="h-5 w-5" aria-hidden="true" weight={weight} />
      </span>
      <span className="hidden sm:inline">{value}</span>
    </button>
  );
}
