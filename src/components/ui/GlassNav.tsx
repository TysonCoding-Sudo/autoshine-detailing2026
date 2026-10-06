import Link from "next/link";
import { Car, Phone } from "lucide-react";

export function GlassNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(6,9,15,0.7)] border-b border-[rgba(0,168,255,0.1)]">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[--blue] to-[--blue-dark] flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,168,255,0.4)] transition-shadow duration-300">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wider uppercase text-[--foreground] leading-none">AUTOSHINE</span>
            <span className="text-[10px] text-[--blue] tracking-[0.2em] uppercase">Detailing & Spraypainting</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="nav-link text-sm font-medium transition-colors"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="nav-link text-sm font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="#gallery"
            className="nav-link text-sm font-medium transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="nav-link text-sm font-medium transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+27662968646"
            className="btn-skeuomorphic text-sm font-medium text-foreground hidden sm:flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[--blue]" />
            Call Now
          </a>
          <a
            href="https://wa.me/+27662968646"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta text-sm px-4 py-2"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}