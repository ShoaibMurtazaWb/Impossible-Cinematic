"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/primitives";
import { useFocusTrap } from "@/lib/use-focus-trap";

const PARTNER_EMAIL = "colin.dingelstad@gmail.com";

type PartnerModalContextValue = {
  openPartnerModal: () => void;
};

const PartnerModalContext = createContext<PartnerModalContextValue | null>(null);

export function usePartnerModal() {
  const context = useContext(PartnerModalContext);
  if (!context) {
    throw new Error("usePartnerModal must be used within PartnerModalProvider");
  }
  return context;
}

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-[#e5e2e1] outline-none transition-colors placeholder:text-[#e7bdb6]/40 focus:border-[#be0000]/50";

function PartnerFormModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dialogRef = useFocusTrap<HTMLDivElement>(true);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      `Name: ${name}`,
      `Title: ${title}`,
      `Company: ${company}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(subject || "IMPOSSIBLE Partnership Inquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#131313]/55 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="partner-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#131313] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] outline-none md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close partner form"
          className="absolute right-4 top-4 cursor-pointer rounded-full border border-white/20 bg-black/40 p-2 text-white hover:text-[#ffb4a8]"
        >
          <X size={20} />
        </button>

        <h2 id="partner-modal-title" className="font-display text-3xl uppercase text-[#e5e2e1]">Become a Partner</h2>
        <p className="mt-2 text-sm text-[#e7bdb6]/80">
          Share your details and we&apos;ll open an email to Colin with your message.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="partner-name" className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-[#e7bdb6]/80">
              Name
            </label>
            <input
              id="partner-name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="partner-title" className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-[#e7bdb6]/80">
              Title
            </label>
            <input
              id="partner-title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className={inputClass}
              placeholder="Your title"
            />
          </div>
          <div>
            <label htmlFor="partner-company" className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-[#e7bdb6]/80">
              Company
            </label>
            <input
              id="partner-company"
              required
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              className={inputClass}
              placeholder="Company name"
            />
          </div>
          <div>
            <label htmlFor="partner-subject" className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-[#e7bdb6]/80">
              Subject
            </label>
            <input
              id="partner-subject"
              required
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className={inputClass}
              placeholder="Partnership subject"
            />
          </div>
          <div>
            <label htmlFor="partner-message" className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-[#e7bdb6]/80">
              Message
            </label>
            <textarea
              id="partner-message"
              required
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={`${inputClass} resize-none`}
              placeholder="Tell us about your partnership interest"
            />
          </div>
          <Button type="submit" className="w-full">
            Send Inquiry
          </Button>
        </form>
      </div>
    </div>
  );
}

export function PartnerModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openPartnerModal = useCallback(() => setOpen(true), []);
  const closePartnerModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <PartnerModalContext.Provider value={{ openPartnerModal }}>
      {children}
      {open ? <PartnerFormModal onClose={closePartnerModal} /> : null}
    </PartnerModalContext.Provider>
  );
}
