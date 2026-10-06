import Link from "next/link";
import { Sun, Moon, Shield, MapPin, Phone, Mail, Settings, Loader2, Calendar } from "lucide-react";

export function GlassNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(10,10,10,0.6)] border-b border-[rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[--gold] to-[--metallic] flex items-center justify-center">
            <Sun className="w-6 h-6 text-background" />
          </div>
          <span className="text-xl font-bold tracking-wider uppercase">AUTOSHINE</span>
        </div>

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
        </div>

        {/* CTA Button - Mobile + Desktop */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+27662968646"
            className="btn-skeuomorphic text-sm font-medium text-foreground hover:bg-[--card] hover:text-[--foreground]"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/+27662968646"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta text-sm px-4"
          >
            WhatsApp Chat
          </a>
        </div>
      </div>
    </nav>
  );
}