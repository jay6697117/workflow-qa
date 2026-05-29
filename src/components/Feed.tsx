import type { FeedTab, Post } from '../types';
import { Composer } from './Composer';
import { FeedTabs } from './FeedTabs';
import { PostCard } from './PostCard';

type FeedProps = {
  activeTab: FeedTab;
  maxPostLength: number;
  onCreatePost: (content: string) => boolean;
  onSetActiveTab: (tab: FeedTab) => void;
  onShowToast: (message: string) => void;
  onToggleBookmark: (postId: string) => void;
  onToggleLike: (postId: string) => void;
  onToggleRepost: (postId: string) => void;
  posts: Post[];
};

export function Feed({
  activeTab,
  maxPostLength,
  onCreatePost,
  onSetActiveTab,
  onShowToast,
  onToggleBookmark,
  onToggleLike,
  onToggleRepost,
  posts,
}: FeedProps) {
  return (
    <main
      id="main-content"
      className="min-h-[100dvh] w-full max-w-2xl border-x border-pulse-border bg-white pb-24 dark:border-slate-800 dark:bg-pulse-dark lg:pb-0"
    >
      <FeedTabs activeTab={activeTab} onChange={onSetActiveTab} />
      <Composer maxLength={maxPostLength} onCreatePost={onCreatePost} onShowToast={onShowToast} />

      <section aria-label="Timeline posts">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onShowToast={onShowToast}
              onToggleBookmark={onToggleBookmark}
              onToggleLike={onToggleLike}
              onToggleRepost={onToggleRepost}
            />
          ))
        ) : (
          <div className="px-6 py-16 text-center">
            <h2 className="text-2xl font-extrabold text-pulse-black dark:text-slate-100">
              No posts yet
            </h2>
            <p className="mt-2 text-pulse-muted dark:text-slate-400">
              Switch to For you or create the first post to fill this timeline.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
