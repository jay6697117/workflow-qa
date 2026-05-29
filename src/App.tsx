import { Feed } from './components/Feed';
import { MobileNav } from './components/MobileNav';
import { RightPanel } from './components/RightPanel';
import { Sidebar } from './components/Sidebar';
import { Toast } from './components/Toast';
import { useFeed } from './hooks/useFeed';

function App() {
  const {
    activeTab,
    createPost,
    dismissToast,
    maxPostLength,
    people,
    setActiveTab,
    showToast,
    toast,
    toggleBookmark,
    toggleFollow,
    toggleLike,
    toggleRepost,
    visiblePosts,
  } = useFeed();

  return (
    <div className="min-h-[100dvh] bg-white text-pulse-black antialiased dark:bg-pulse-dark dark:text-slate-100">
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-7xl justify-center">
        <Sidebar />
        <Feed
          activeTab={activeTab}
          maxPostLength={maxPostLength}
          onCreatePost={createPost}
          onSetActiveTab={setActiveTab}
          onShowToast={showToast}
          onToggleBookmark={toggleBookmark}
          onToggleLike={toggleLike}
          onToggleRepost={toggleRepost}
          posts={visiblePosts}
        />
        <RightPanel people={people} onShowToast={showToast} onToggleFollow={toggleFollow} />
      </div>
      <MobileNav />
      <Toast toast={toast} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
