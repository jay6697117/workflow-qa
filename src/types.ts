import type { Icon } from '@phosphor-icons/react';

export type FeedTab = 'for-you' | 'following';

export type UserProfile = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  avatarColor: string;
  bio?: string;
  context?: string;
  verified?: boolean;
  following?: boolean;
};

export type Post = {
  id: string;
  author: UserProfile;
  content: string;
  timestamp: string;
  metrics: {
    replies: number;
    reposts: number;
    likes: number;
    views: string;
  };
  liked: boolean;
  reposted: boolean;
  bookmarked: boolean;
  topic?: string;
  media?: {
    alt: string;
    gradient: string;
    label: string;
  };
};

export type Trend = {
  id: string;
  category: string;
  label: string;
  posts: string;
};

export type SuggestedUser = UserProfile & {
  bio: string;
  following: boolean;
};

export type SidebarItem = {
  label: string;
  icon: Icon;
  active?: boolean;
};

export type ToastMessage = {
  id: string;
  message: string;
};
