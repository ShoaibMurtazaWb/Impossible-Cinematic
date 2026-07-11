"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import type { VideoItem } from "@/data/site-content";
import { useVideoModal } from "@/components/layout/video-modal-provider";

export function VideoCard({ item }: { item: VideoItem }) {
  const { openVideo } = useVideoModal();

  return (
    <article
      className="group min-w-[85vw] snap-center cursor-pointer transition-transform duration-500 hover:scale-[1.015] md:min-w-[600px]"
      onClick={() => openVideo(item)}
    >
      <div className="relative mb-6 h-[410px] overflow-hidden rounded-xl border border-white/10 bg-[#ffffff06]">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 600px, 85vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-20 w-20 place-items-center rounded-full border border-white/30 bg-black/45 text-[#be0000] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#be0000]">
            <Play size={32} fill="currentColor" />
          </div>
        </div>
      </div>
      <h3 className="font-display text-3xl uppercase text-[#e5e2e1] transition-colors group-hover:text-[#be0000]">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-[#e7bdb6]/80">{item.meta}</p>
    </article>
  );
}
