export function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-[--accent]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[--muted] text-sm uppercase tracking-wider mb-4">
            Photo Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[--foreground]">
            Before & After Transformations
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Before Image */}
          <div className="glass glass-hover aspect-[4/3] rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[--card] to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-[--muted] text-sm">
              Before
            </div>
          </div>

          {/* After Image */}
          <div className="glass glass-hover aspect-[4/3] rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-b from-[--blue]/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-[--blue] text-sm font-medium">
              After
            </div>
          </div>

          {/* Service Image 3 */}
          <div className="glass glass-hover aspect-[4/3] rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-b from-[--card] to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-[--muted] text-sm">
              Service
            </div>
          </div>

          {/* Service Image 4 */}
          <div className="glass glass-hover aspect-[4/3] rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-b from-[--blue]/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-[--blue] text-sm font-medium">
              Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}