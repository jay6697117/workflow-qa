import type { Post, SuggestedUser, Trend } from '../types';

export const initialPosts: Post[] = [
  {
    id: 'post-1',
    author: {
      name: 'Maya Chen',
      handle: 'maya_builds',
      avatar: 'MC',
      verified: true,
    },
    content:
      'Shipping an MVP gets easier when the product surface is small: one feed, one composer, visible feedback, and clear next actions.',
    timestamp: '8m',
    metrics: {
      replies: 48,
      reposts: 122,
      likes: 924,
      views: '38K',
    },
    liked: false,
    reposted: false,
    bookmarked: false,
    topic: 'Product Design',
  },
  {
    id: 'post-2',
    author: {
      name: 'Jordan Lee',
      handle: 'jordanux',
      avatar: 'JL',
    },
    content:
      'A social feed should feel instant. Optimistic local updates, compact cards, and keyboard-friendly forms make the prototype believable before the backend exists.',
    timestamp: '26m',
    metrics: {
      replies: 17,
      reposts: 76,
      likes: 481,
      views: '15K',
    },
    liked: true,
    reposted: false,
    bookmarked: true,
    topic: 'UX Systems',
  },
  {
    id: 'post-3',
    author: {
      name: 'Nora Patel',
      handle: 'nora_codes',
      avatar: 'NP',
      verified: true,
    },
    content:
      'React local state is enough for this stage. Keep post mutation logic in a custom hook, keep rendering components small, and mock the API boundary with typed data.',
    timestamp: '1h',
    metrics: {
      replies: 31,
      reposts: 204,
      likes: 1300,
      views: '62K',
    },
    liked: false,
    reposted: true,
    bookmarked: false,
    topic: 'React Architecture',
  },
  {
    id: 'post-4',
    author: {
      name: 'Alex Morgan',
      handle: 'alexships',
      avatar: 'AM',
    },
    content:
      'Validation detail that matters: block empty posts, show remaining characters, and keep the publish button disabled until the draft is valid.',
    timestamp: '3h',
    metrics: {
      replies: 9,
      reposts: 44,
      likes: 289,
      views: '9K',
    },
    liked: false,
    reposted: false,
    bookmarked: false,
    topic: 'Frontend Validation',
  },
];

export const trends: Trend[] = [
  {
    id: 'trend-1',
    category: 'Technology · Trending',
    label: 'React 18',
    posts: '18.4K posts',
  },
  {
    id: 'trend-2',
    category: 'Design · Trending',
    label: 'Micro-interactions',
    posts: '8,920 posts',
  },
  {
    id: 'trend-3',
    category: 'Startup · Trending',
    label: 'MVP Launch',
    posts: '22.1K posts',
  },
];

export const suggestedUsers: SuggestedUser[] = [
  {
    id: 'user-1',
    name: 'Sam Rivera',
    handle: 'sam_frontend',
    avatar: 'SR',
    bio: 'Frontend systems and accessibility',
    verified: true,
    following: false,
  },
  {
    id: 'user-2',
    name: 'Priya Shah',
    handle: 'priyaproduct',
    avatar: 'PS',
    bio: 'Product notes for fast teams',
    following: false,
  },
  {
    id: 'user-3',
    name: 'Theo Brooks',
    handle: 'theobuilds',
    avatar: 'TB',
    bio: 'Design engineer, prototyping daily',
    following: true,
  },
];
