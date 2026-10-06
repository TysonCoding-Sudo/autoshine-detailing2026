"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

const LogoLightbox = dynamic(
  () => import("./LogoLightbox").then((mod) => mod.LogoLightbox),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Logo() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

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

      <LogoLightbox open={open} close={close} />
    </>
  );
}