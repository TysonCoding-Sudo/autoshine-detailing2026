import { Phone, Mail, MapPin, Calendar } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-[--foreground]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div>
            <p className="text-[--muted] text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[--foreground] mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-[--muted] leading-relaxed mb-8">
              Ready to transform your vehicle? Contact us today for a free consultation and quote.
            </p>
          </div>

          {/* Contact Form */}
          <div className="glass glass-hover p-8 md:p-12 rounded-2xl backdrop-blur-xl max-w-md">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[--foreground] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[--foreground] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[--foreground] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+27 66 296 8646"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[--foreground] mb-2">
                  Service Interest
                </label>
                <select
                  className="form-input bg-[--card] py-2 pr-3"
                >
                  <option value="">Select service</option>
                  <option value="respray">Standard Car Respray - R10 950</option>
                  <option value="basecoat">Basecoat + Clearcoat - R13 950</option>
                  <option value="colourchange">Colour Change - R15 000</option>
                  <option value="panelbeating">Panelbeating</option>
                  <option value="polishing">Full Body Polishing</option>
                  <option value="restoration">Paint Restoration</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[--foreground] mb-2">
                  Message
                </label>
                <textarea
                  className="form-input h-24 p-3 resize-none"
                  placeholder="Describe your vehicle's needs..."
                  rows={3}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-skeuomorphic w-full py-3 px-8"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}