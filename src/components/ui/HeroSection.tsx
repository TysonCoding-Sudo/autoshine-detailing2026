import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[--background] to-[--accent]">
      {/* Decorative bottom shape */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[--gold]/20 rounded-full blur-3xl opacity-50"></div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto h-full px-6 py-20 flex flex-col items-center justify-center text-center">
        <div className="glass glass-hover p-8 md:p-12 rounded-2xl max-w-3xl backdrop-blur-xl">
          <p className="text-[--muted] text-sm uppercase tracking-wider mb-6">
            Premium Car Detailing & Spray Painting Services
          </p>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[--foreground] leading-tight mb-4">
            AUTOSHINE DETAILING AND SPRAYPAINTING
          </h1>
          
          <p className="text-[--muted] text-lg md:text-xl mb-8 max-w-2xl">
            Professional car respray, panel beating, full body polishing, and comprehensive automotive restoration services. Based in Mpumalanga, serving the entire region with excellence.
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-8">
          <a
            href="tel:+27662968646"
            className="btn-skeuomorphic text-lg px-8 py-4"
          >
            Call Now: +27 66 296 8646
          </a>
          <a
            href="https://wa.me/+27662968646"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta text-lg px-8 py-4 hover:shadow-lg"
          >
            WhatsApp Consultation
          </a>
        </div>
      </div>

      {/* Floating CTA on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="https://wa.me/+27662968646"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-cta text-lg px-6 py-3 rounded-full flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" stroke="none">
            <path d="M17 2h10v2H17zm0 5h10v2H17zm0 5h10v2H17zm-7-10v20h2V12H10zm-7 7v4h2v-4H10zm7-4h2v14h-2v-14zM7 7h2v14H7V7zm7 2h2v6h-2V9z" />
          </svg>
          Chat
        </a>
      </div>
    </section>
  );
}