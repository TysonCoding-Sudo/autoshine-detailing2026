import { ServiceCard } from "@/components/ui/ServiceCard";
import { SprayCan, Layers, Palette, Hammer, Wrench, Sparkles } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-[--accent]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[--muted] text-sm uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[--foreground]">
            Comprehensive Automotive Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Standard Car Respray */}
          <ServiceCard
            title="Standard Car Respray"
            description="Complete vehicle respray with quality materials and professional finish"
            price="10950"
            features={[
              "Full surface preparation",
              "Multiple coating layers",
              "Professional color matching",
              "Clear protective finish",
            ]}
            icon={SprayCan}
            ctaLink="#quote"
          />

          {/* Basecoat + Clearcoat */}
          <ServiceCard
            title="Basecoat + Clearcoat"
            description="Premium basecoat and clearcoat system for enhanced depth and durability"
            price="13950"
            features={[
              "High-solid basecoat formula",
              "2K clearcoat protection",
              "UV resistant finish",
              "Showroom quality finish",
            ]}
            icon={Layers}
            ctaLink="#quote"
          />

          {/* Colour Change */}
          <ServiceCard
            title="Colour Change"
            description="Complete color transformation with extensive color palette"
            price="15000"
            features={[
              "Color consultation",
              "Full panel disassembly",
              "Custom mix formulation",
              "Final quality inspection",
            ]}
            icon={Palette}
            ctaLink="#quote"
          />

          {/* Panelbeating */}
          <ServiceCard
            title="Panelbeating"
            description="Expert panel repair and restoration for damaged vehicle panels"
            features={[
              "Dents removal",
              "Panel reshaping",
              "Surface preparation",
              "Paint readiness",
            ]}
            icon={Hammer}
            ctaLink="#quote"
          />

          {/* Bumper Repair */}
          <ServiceCard
            title="Bumper Repair"
            description="Complete bumper restoration and repair services"
            features={[
              "Crack repair and welding",
              "Surface refinishing",
              "Color matching",
              "Structural integrity check",
            ]}
            icon={Wrench}
            ctaLink="#quote"
          />

          {/* Full Body Polishing */}
          <ServiceCard
            title="Full Body Polishing"
            description="Restore your vehicle's shine with professional polishing"
            features={[
              "Compound polishing",
              "Paint restoration",
              "Protection sealing",
              "Showroom finish",
            ]}
            icon={Sparkles}
            ctaLink="#quote"
          />
        </div>
      </div>
    </section>
  );
}