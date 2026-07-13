"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { PressKitDocument } from "@/data/site-content";

export function PressKitViewer({ documents }: { documents: PressKitDocument[] }) {
  const [activeId, setActiveId] = useState(documents[0]?.id ?? "");
  const activeDoc = documents.find((doc) => doc.id === activeId) ?? documents[0];

  if (!activeDoc) return null;

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Press kit documents"
        className="flex flex-col gap-2 sm:flex-row sm:gap-0"
      >
        {documents.map((doc) => {
          const isActive = doc.id === activeDoc.id;
          return (
            <button
              key={doc.id}
              type="button"
              role="tab"
              id={`tab-${doc.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${doc.id}`}
              onClick={() => setActiveId(doc.id)}
              className={`cursor-pointer border px-5 py-3 text-left text-xs font-medium uppercase tracking-[0.18em] transition-colors sm:flex-1 sm:text-center ${
                isActive
                  ? "border-[#be0000]/60 bg-[#be0000]/10 text-[#e5e2e1]"
                  : "border-white/10 bg-[#0e0e0e] text-[#e7bdb6]/70 hover:border-white/20 hover:text-[#e5e2e1]"
              } ${doc.id === documents[0]?.id ? "rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none" : ""} ${
                doc.id === documents[documents.length - 1]?.id
                  ? "rounded-b-none sm:rounded-r-xl sm:rounded-bl-none"
                  : ""
              }`}
            >
              {doc.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeDoc.id}`}
        aria-labelledby={`tab-${activeDoc.id}`}
        className="overflow-hidden rounded-b-xl rounded-tr-xl border border-white/10 border-t-[#be0000]/40 bg-[#0a0a0a] sm:rounded-tr-none"
      >
        <div className="border-b border-white/10 px-5 py-4 md:px-6">
          <h2 className="font-display text-xl uppercase text-[#e5e2e1] md:text-2xl">
            {activeDoc.title}
          </h2>
          {activeDoc.description ? (
            <p className="mt-1 text-sm text-[#e7bdb6]/80">{activeDoc.description}</p>
          ) : null}
        </div>

        <iframe
          key={activeDoc.id}
          src={activeDoc.pdfUrl}
          title={activeDoc.title}
          className="h-[min(78vh,880px)] w-full bg-[#1a1a1a]"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4 md:px-6">
          <p className="text-xs text-[#e7bdb6]/60">
            Scroll inside the viewer or open the PDF in a new tab.
          </p>
          <a
            href={activeDoc.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#be0000] transition-colors hover:text-[#ffb4a8]"
          >
            Open PDF
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
