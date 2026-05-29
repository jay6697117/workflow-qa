import {
  BarChart3,
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Share,
} from 'lucide-react';
import { formatCount } from '../lib/formatters';
import type { Post } from '../types';
import { Avatar } from './Avatar';
import { VerifiedBadge } from './VerifiedBadge';

type PostCardProps = {
  post: Post;
  onToggleBookmark: (postId: string) => void;
  onToggleLike: (postId: string) => void;
  onToggleRepost: (postId: string) => void;
};

export function PostCard({
  post,
  onToggleBookmark,
  onToggleLike,
  onToggleRepost,
}: PostCardProps) {
  return (
    <article className="border-b border-pulse-border bg-white px-4 py-4 transition-colors duration-200 hover:bg-slate-50/70 sm:px-5">
      <div className="flex gap-3">
        <Avatar initials={post.author.avatar} />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex min-w-0 flex-wrap items-center gap-1">
                <span className="truncate font-bold text-pulse-black">{post.author.name}</span>
                {post.author.verified ? <VerifiedBadge /> : null}
                <span className="truncate text-pulse-muted">@{post.author.handle}</span>
                <span className="text-pulse-muted">·</span>
                <span className="text-pulse-muted">{post.timestamp}</span>
              </div>
              {post.topic ? <p className="mt-0.5 text-sm text-pulse-blue">{post.topic}</p> : null}
            </div>

            <button
              type="button"
              className="flex min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full text-pulse-muted transition-colors duration-200 hover:bg-sky-50 hover:text-pulse-blue focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2"
              aria-label="More post actions"
            >
              <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-2 whitespace-pre-line text-[15px] leading-6 text-pulse-black sm:text-base">
            {post.content}
          </p>

          <div className="mt-4 grid grid-cols-5 items-center text-pulse-muted">
            <PostAction
              label={`${post.metrics.replies} replies`}
              icon={MessageCircle}
              value={formatCount(post.metrics.replies)}
              colorClassName="hover:bg-sky-50 hover:text-pulse-blue focus:ring-pulse-blue"
            />
            <PostAction
              label={`${post.metrics.reposts} reposts`}
              icon={Repeat2}
              value={formatCount(post.metrics.reposts)}
              active={post.reposted}
              colorClassName="hover:bg-emerald-50 hover:text-emerald-600 focus:ring-emerald-500"
              activeClassName="text-emerald-600"
              onClick={() => onToggleRepost(post.id)}
            />
            <PostAction
              label={`${post.metrics.likes} likes`}
              icon={Heart}
              value={formatCount(post.metrics.likes)}
              active={post.liked}
              colorClassName="hover:bg-rose-50 hover:text-rose-600 focus:ring-rose-500"
              activeClassName="text-rose-600"
              fillIcon={post.liked}
              onClick={() => onToggleLike(post.id)}
            />
            <PostAction
              label={`${post.metrics.views} views`}
              icon={BarChart3}
              value={post.metrics.views}
              colorClassName="hover:bg-sky-50 hover:text-pulse-blue focus:ring-pulse-blue"
            />
            <div className="flex justify-end gap-1">
              <button
                type="button"
                onClick={() => onToggleBookmark(post.id)}
                className={`flex min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 hover:bg-sky-50 hover:text-pulse-blue focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 ${
                  post.bookmarked ? 'text-pulse-blue' : ''
                }`}
                aria-label={post.bookmarked ? 'Remove bookmark' : 'Bookmark post'}
                aria-pressed={post.bookmarked}
              >
                <Bookmark
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill={post.bookmarked ? 'currentColor' : 'none'}
                />
              </button>
              <button
                type="button"
                className="hidden min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 hover:bg-sky-50 hover:text-pulse-blue focus:outline-none focus:ring-2 focus:ring-pulse-blue focus:ring-offset-2 sm:flex"
                aria-label="Share post"
              >
                <Share className="h-5 w-5" aria-hidden="true" />
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
  fillIcon?: boolean;
  icon: typeof MessageCircle;
  label: string;
  onClick?: () => void;
  value: string;
};

function PostAction({
  active,
  activeClassName = 'text-pulse-blue',
  colorClassName,
  fillIcon,
  icon: Icon,
  label,
  onClick,
  value,
}: PostActionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-10 cursor-pointer items-center gap-1 rounded-full pr-2 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${colorClassName} ${
        active ? activeClassName : ''
      }`}
      aria-label={label}
      aria-pressed={onClick ? Boolean(active) : undefined}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-current/10">
        <Icon className="h-5 w-5" aria-hidden="true" fill={fillIcon ? 'currentColor' : 'none'} />
      </span>
      <span className="hidden sm:inline">{value}</span>
    </button>
  );
}
