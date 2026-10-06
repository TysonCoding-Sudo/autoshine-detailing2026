import { Phone, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-hero-gradient">
      {/* Top blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[--blue]/10 rounded-full blur-[120px]"></div>
      {/* Bottom blue glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[--blue]/15 rounded-full blur-3xl opacity-60"></div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto min-h-screen px-6 py-24 flex flex-col items-center justify-center text-center relative z-10">
        <div className="glass p-8 md:p-14 rounded-3xl max-w-4xl backdrop-blur-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--blue]/30 bg-[--blue]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[--blue] animate-pulse"></span>
            <span className="text-[--blue] text-sm font-medium tracking-wide">Professional Automotive Care</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[--foreground] leading-tight mb-6">
            AUTOSHINE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--blue] to-[--blue-dark]">
              DETAILING
            </span>{" "}
            AND SPRAYPAINTING
          </h1>

          <p className="text-[--muted] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional car respray, panel beating, full body polishing, and comprehensive automotive restoration services. Based in Mpumalanga, serving the entire region with excellence.
          </p>

          {/* Location badge */}
          <div className="flex items-center justify-center gap-2 text-[--muted] text-sm mb-8">
            <MapPin className="w-4 h-4 text-[--blue]" />
            <span>838 Allemandsdrift D, Mbibane 0449, Mpumalanga</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-10">
          <a
            href="tel:+27662968646"
            className="btn-skeuomorphic text-lg px-8 py-4 flex items-center justify-center gap-3 text-[--foreground]"
          >
            <Phone className="w-5 h-5 text-[--blue]" />
            Call Now: +27 66 296 8646
          </a>
          <a
            href="https://wa.me/+27662968646"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta text-lg px-8 py-4 hover:shadow-lg flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" stroke="none">
              <path d="M17 2h10v2H17zm0 5h10v2H17zm0 5h10v2H17zm-7-10v20h2V12H10zm-7 7v4h2v-4H10zm7-4h2v14h-2v-14zM7 7h2v14H7V7zm7 2h2v6h-2V9z" />
            </svg>
            WhatsApp Consultation
          </a>
        </div>
      </div>
    </section>
  );
}