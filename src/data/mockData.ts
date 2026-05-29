import type { Post, SuggestedUser, Trend, UserProfile } from '../types';

export const currentUser: UserProfile = {
  id: 'user-you',
  name: 'You',
  handle: 'you',
  avatar: 'YO',
  avatarColor: 'from-slate-900 to-slate-700',
};

export const initialPosts: Post[] = [
  {
    id: 'post-1',
    author: {
      id: 'user-maya',
      name: 'Maya Chen',
      handle: 'maya_builds',
      avatar: 'MC',
      avatarColor: 'from-sky-500 to-indigo-600',
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
      id: 'user-jordan',
      name: 'Jordan Lee',
      handle: 'jordanux',
      avatar: 'JL',
      avatarColor: 'from-cyan-500 to-blue-700',
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
    media: {
      alt: 'Abstract dark interface blocks arranged like a product planning board',
      gradient: 'from-slate-950 via-blue-950 to-cyan-900',
      label: 'Prototype notes',
    },
  },
  {
    id: 'post-3',
    author: {
      id: 'user-nora',
      name: 'Nora Patel',
      handle: 'nora_codes',
      avatar: 'NP',
      avatarColor: 'from-violet-500 to-fuchsia-600',
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
      id: 'user-alex',
      name: 'Alex Morgan',
      handle: 'alexships',
      avatar: 'AM',
      avatarColor: 'from-emerald-500 to-teal-700',
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
  {
    id: 'post-5',
    author: {
      id: 'user-ines',
      name: 'Ines Walker',
      handle: 'ines_studio',
      avatar: 'IW',
      avatarColor: 'from-amber-500 to-orange-700',
    },
    content:
      'Dense products need restraint. Borders, spacing, and state color should do the work before cards, shadows, and decoration enter the page.',
    timestamp: '5h',
    metrics: {
      replies: 14,
      reposts: 88,
      likes: 642,
      views: '21K',
    },
    liked: false,
    reposted: false,
    bookmarked: true,
    topic: 'Interface Craft',
  },
  {
    id: 'post-6',
    author: {
      id: 'user-omar',
      name: 'Omar Reyes',
      handle: 'omar_lab',
      avatar: 'OR',
      avatarColor: 'from-rose-500 to-red-700',
      verified: true,
    },
    content:
      'Mock data should still read like product data. Realistic counts, clear handles, and no copied public posts keep the demo safe and useful.',
    timestamp: '7h',
    metrics: {
      replies: 22,
      reposts: 57,
      likes: 377,
      views: '12K',
    },
    liked: true,
    reposted: false,
    bookmarked: false,
    topic: 'Demo Safety',
  },
  {
    id: 'post-7',
    author: {
      id: 'user-lena',
      name: 'Lena Brooks',
      handle: 'lena_reads',
      avatar: 'LB',
      avatarColor: 'from-slate-600 to-zinc-900',
    },
    content:
      'Today’s reading list: feed ranking basics, accessible composer patterns, and why mobile bottom navigation still wins for thumb reach.',
    timestamp: '9h',
    metrics: {
      replies: 6,
      reposts: 33,
      likes: 214,
      views: '7K',
    },
    liked: false,
    reposted: false,
    bookmarked: false,
    topic: 'Reading List',
  },
];

export const trends: Trend[] = [
  {
    id: 'trend-1',
    category: 'Technology / Trending',
    label: 'Local first prototypes',
    posts: '18.4K posts',
  },
  {
    id: 'trend-2',
    category: 'Design / Trending',
    label: 'Micro interactions',
    posts: '8,920 posts',
  },
  {
    id: 'trend-3',
    category: 'Startup / Trending',
    label: 'MVP launch notes',
    posts: '22.1K posts',
  },
  {
    id: 'trend-4',
    category: 'Frontend / Popular',
    label: 'Accessible feeds',
    posts: '5,482 posts',
  },
  {
    id: 'trend-5',
    category: 'Creative coding / Popular',
    label: 'Tiny interfaces',
    posts: '3,174 posts',
  },
];

export const suggestedUsers: SuggestedUser[] = [
  {
    id: 'user-sam',
    name: 'Sam Rivera',
    handle: 'sam_frontend',
    avatar: 'SR',
    avatarColor: 'from-blue-500 to-sky-700',
    bio: 'Frontend systems and accessibility',
    verified: true,
    following: false,
  },
  {
    id: 'user-priya',
    name: 'Priya Shah',
    handle: 'priyaproduct',
    avatar: 'PS',
    avatarColor: 'from-fuchsia-500 to-violet-700',
    bio: 'Product notes for fast teams',
    following: false,
  },
  {
    id: 'user-theo',
    name: 'Theo Brooks',
    handle: 'theobuilds',
    avatar: 'TB',
    avatarColor: 'from-lime-500 to-emerald-700',
    bio: 'Design engineer, prototyping daily',
    following: true,
  },
  {
    id: 'user-ari',
    name: 'Ari Kim',
    handle: 'arikim_ui',
    avatar: 'AK',
    avatarColor: 'from-orange-500 to-amber-700',
    bio: 'Interface notes and small tools',
    following: false,
  },
];
