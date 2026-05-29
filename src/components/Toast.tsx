import { useEffect } from 'react';
import type { ToastMessage } from '../types';

type ToastProps = {
  toast: ToastMessage | null;
  onDismiss: () => void;
};

export function Toast({ toast, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = window.setTimeout(onDismiss, 2400);
    return () => window.clearTimeout(timer);
  }, [onDismiss, toast]);

  if (!toast) {
    return null;
  }

  return (
    <div
      className="fixed bottom-24 left-1/2 z-40 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full bg-pulse-black px-5 py-3 text-center text-sm font-bold text-white shadow-panel lg:bottom-6"
      role="status"
      aria-live="polite"
    >
      {toast.message}
    </div>
  );
}
