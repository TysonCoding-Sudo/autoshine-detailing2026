import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";

export function GlassNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(37,43,59,0.75)] border-b border-[rgba(0,168,255,0.12)]">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo Area */}
        <Logo />

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