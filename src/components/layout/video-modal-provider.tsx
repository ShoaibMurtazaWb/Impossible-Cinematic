"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import type { VideoItem } from "@/data/site-content";
import { useFocusTrap } from "@/lib/use-focus-trap";

type VideoModalContextValue = {
  openVideo: (item: VideoItem) => void;
};

const VideoModalContext = createContext<VideoModalContextValue | null>(null);

export function useVideoModal() {
  const context = useContext(VideoModalContext);
  if (!context) {
    throw new Error("useVideoModal must be used within VideoModalProvider");
  }
  return context;
}

function VideoModal({
  item,
  onClose,
}: {
  item: VideoItem;
  onClose: () => void;
}) {
  const dialogRef = useFocusTrap<HTMLDivElement>(true);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm md:p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        tabIndex={-1}
        className="relative w-full max-w-5xl outline-none"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-3 top-3 z-10 cursor-pointer rounded-full border border-white/20 bg-black/40 p-2 text-white hover:text-[#ffb4a8]"
        >
          <X size={20} />
        </button>
        <div
          className="mx-auto aspect-[9/16] w-full max-h-[85dvh] max-w-md overflow-hidden rounded-2xl border border-white/20 bg-black"
        >
          <video
            src={item.videoUrl}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const openVideo = useCallback((item: VideoItem) => setActiveVideo(item), []);
  const closeVideo = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <VideoModalContext.Provider value={{ openVideo }}>
      {children}
      {activeVideo ? <VideoModal item={activeVideo} onClose={closeVideo} /> : null}
    </VideoModalContext.Provider>
  );
}
