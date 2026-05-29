import { useMemo, useState } from 'react';
import { currentUser, initialPosts, suggestedUsers } from '../data/mockData';
import type { FeedTab, Post, SuggestedUser, ToastMessage } from '../types';

const MAX_POST_LENGTH = 280;

export function useFeed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [activeTab, setActiveTab] = useState<FeedTab>('for-you');
  const [people, setPeople] = useState<SuggestedUser[]>(suggestedUsers);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const visiblePosts = useMemo(() => {
    if (activeTab === 'following') {
      return posts.filter((post) => post.author.verified || post.reposted);
    }

    return posts;
  }, [activeTab, posts]);

  function showToast(message: string) {
    setToast({ id: `${Date.now()}`, message });
  }

  function dismissToast() {
    setToast(null);
  }

  function createPost(content: string) {
    const trimmed = content.trim();

    if (!trimmed || trimmed.length > MAX_POST_LENGTH) {
      return false;
    }

    const post: Post = {
      id: `post-${crypto.randomUUID()}`,
      author: currentUser,
      content: trimmed,
      timestamp: 'now',
      metrics: {
        replies: 0,
        reposts: 0,
        likes: 0,
        views: '0',
      },
      liked: false,
      reposted: false,
      bookmarked: false,
      topic: 'Your update',
    };

    setPosts((currentPosts) => [post, ...currentPosts]);
    setActiveTab('for-you');
    showToast('Posted to your mock timeline.');
    return true;
  }

  function toggleLike(postId: string) {
    setPosts((currentPosts) =>
      currentPosts.map((post) => {
        if (post.id !== postId) {
          return post;
        }

        const liked = !post.liked;

        return {
          ...post,
          liked,
          metrics: {
            ...post.metrics,
            likes: Math.max(0, post.metrics.likes + (liked ? 1 : -1)),
          },
        };
      }),
    );
  }

  function toggleRepost(postId: string) {
    setPosts((currentPosts) =>
      currentPosts.map((post) => {
        if (post.id !== postId) {
          return post;
        }

        const reposted = !post.reposted;

        return {
          ...post,
          reposted,
          metrics: {
            ...post.metrics,
            reposts: Math.max(0, post.metrics.reposts + (reposted ? 1 : -1)),
          },
        };
      }),
    );
  }

  function toggleBookmark(postId: string) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post,
      ),
    );
  }

  function toggleFollow(userId: string) {
    setPeople((currentPeople) =>
      currentPeople.map((person) =>
        person.id === userId ? { ...person, following: !person.following } : person,
      ),
    );
  }

  return {
    activeTab,
    createPost,
    dismissToast,
    maxPostLength: MAX_POST_LENGTH,
    people,
    setActiveTab,
    showToast,
    toast,
    toggleBookmark,
    toggleFollow,
    toggleLike,
    toggleRepost,
    visiblePosts,
  };
}
