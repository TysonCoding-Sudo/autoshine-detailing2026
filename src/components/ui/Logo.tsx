"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("838 Allemandsdrift D, Mbibane 0449, Mpumalanga");

export function Logo() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="View AUTOSHINE logo full screen"
        className="flex items-center gap-3 group cursor-pointer bg-transparent border-0 p-0 text-left"
      >
        <Image
          src="/logo.jpg"
          alt="AUTOSHINE logo"
          width={40}
          height={40}
          priority
          className="h-10 w-auto rounded-lg object-contain group-hover:shadow-[0_0_15px_rgba(0,168,255,0.4)] transition-shadow duration-300"
        />
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-wider uppercase text-[--foreground] leading-none">
            AUTOSHINE
          </span>
          <span className="text-[10px] text-[--blue] tracking-[0.2em] uppercase">
            Detailing & Spraypainting
          </span>
        </div>
      </button>

      {open && (
        <div
          className="lightbox-backdrop fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0f1a]/95 backdrop-blur-md p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="AUTOSHINE logo full screen"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] text-[--foreground] hover:border-[--blue] hover:text-[--blue] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="lightbox-image flex flex-col items-center gap-6"
          >
            <Image
              src="/logo.jpg"
              alt="AUTOSHINE DETAILING AND SPRAYPAINTING logo"
              width={800}
              height={800}
              className="max-w-[90vw] max-h-[78vh] w-auto h-auto rounded-xl shadow-[0_0_60px_rgba(0,168,255,0.25)] object-contain"
            />
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[--blue] text-center">
              AUTOSHINE DETAILING AND SPRAYPAINTING
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs md:text-sm text-[--muted] hover:text-[--blue] transition-colors text-center"
            >
              838 Allemandsdrift D, Mbibane 0449, Mpumalanga
            </a>
          </div>
        </div>
      )}
    </>
  );
}