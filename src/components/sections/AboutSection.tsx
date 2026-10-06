export function AboutSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[--muted] text-sm uppercase tracking-wider mb-4">
              About AUTOSHINE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[--foreground] mb-6">
              Professional Car Detailing Excellence
            </h2>
            <p className="text-[--muted] leading-relaxed mb-6">
              Based in 838ALLEMANSDRIFT D MBIBANE 0449, Mpumalanga, AUTOSHINE DETAILING AND SPRAYPAINTING has been serving the automotive community with distinction. Our team combines technical expertise with artistic passion to deliver exceptional results for every vehicle that passes through our facility.
            </p>
            <p className="text-[--muted] leading-relaxed">
              We understand that your vehicle is an investment, which is why we use only the highest quality materials and proven techniques. From subtle paint restoration to complete color changes, we approach every project with the same level of care and attention to detail.
            </p>
          </div>

          {/* Statistics/Highlights */}
          <div className="space-y-4">
            <div className="glass glass-hover p-6 rounded-2xl backdrop-blur-xl">
              <p className="text-4xl md:text-5xl font-bold text-[--gold]">+150</p>
              <p className="text-[--muted]">Vehicles Served</p>
            </div>
            <div className="glass glass-hover p-6 rounded-2xl backdrop-blur-xl">
              <p className="text-4xl md:text-5xl font-bold text-[--gold]">8</p>
              <p className="text-[--muted]">Years Experience</p>
            </div>
            <div className="glass glass-hover p-6 rounded-2xl backdrop-blur-xl">
              <p className="text-4xl md:text-5xl font-bold text-[--gold]">98%</p>
              <p className="text-[--muted]">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}