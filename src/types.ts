import type { LucideIcon } from 'lucide-react';

export type FeedTab = 'for-you' | 'following';

export type Post = {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
  };
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
};

export type Trend = {
  id: string;
  category: string;
  label: string;
  posts: string;
};

export type SuggestedUser = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  verified?: boolean;
  following: boolean;
};

export type SidebarItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};
