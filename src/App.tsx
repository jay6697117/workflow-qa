import { Feed } from './components/Feed';
import { MobileNav } from './components/MobileNav';
import { RightPanel } from './components/RightPanel';
import { Sidebar } from './components/Sidebar';
import { useFeed } from './hooks/useFeed';

function App() {
  const {
    activeTab,
    createPost,
    maxPostLength,
    people,
    setActiveTab,
    toggleBookmark,
    toggleFollow,
    toggleLike,
    toggleRepost,
    visiblePosts,
  } = useFeed();

  return (
    <div className="min-h-screen bg-white text-pulse-black antialiased">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl justify-center">
        <Sidebar />
        <Feed
          activeTab={activeTab}
          maxPostLength={maxPostLength}
          onCreatePost={createPost}
          onSetActiveTab={setActiveTab}
          onToggleBookmark={toggleBookmark}
          onToggleLike={toggleLike}
          onToggleRepost={toggleRepost}
          posts={visiblePosts}
        />
        <RightPanel people={people} onToggleFollow={toggleFollow} />
      </div>
      <MobileNav />
    </div>
  );
}

export default App;
