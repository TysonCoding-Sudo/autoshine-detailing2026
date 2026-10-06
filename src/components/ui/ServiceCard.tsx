import { Uml } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  features?: string[];
  icon: any;
  ctaText?: string;
  ctaLink?: string;
}

export function ServiceCard({
  title,
  description,
  price,
  features = [],
  icon,
  ctaText = "Get Quote",
  ctaLink = "#",
}: ServiceCardProps) {
  return (
    <div className="service-card group hover:shadow-xl cursor-pointer overflow-hidden">
      <div className="p-6 flex flex-col min-h-[350px]">
        {/* Icon Section */}
        <div className="mt-2 flex items-center justify-center h-14 w-14 rounded-lg bg-[--card] mb-4">
          <icon className="w-6 h-6 text-[--gold]" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[--muted] text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Price (if provided) */}
        {price && (
          <div className="price-tag mb-4">
            <span className="font-semibold text-[--gold]">R {price}</span>
            <span className="text-[--muted] ml-2 per-mile">per vehicle</span>
          </div>
        )}

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-1 text-[--muted] text-sm line-clamp-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[--gold] mt-0.5 flex-srink-0"></span>
                <span className="ml-2">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <div className="mt-4 pt-4 border-t border-[--border]">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[--muted] text-sm font-medium hover:text-[--foreground] transition-colors"
            >
              {ctaText}
              <svg className="-ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}