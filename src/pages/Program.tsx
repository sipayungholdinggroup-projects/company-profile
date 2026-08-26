import hotelImage from "@/assets/hotel.jpg";
import { categories } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import ComingSoonPanel from "@/components/ComingSoonPanel";
const ProgramPage = () => {
  return (
    <>
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <img
          src={hotelImage}
          alt="Lobi hotel dengan material batu dan kayu"
          width={1600}
          height={1100}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/55 to-charcoal/70" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-32 pb-16 text-background md:px-10 md:pb-24">
          <p className="eyebrow opacity-90">Program</p>
          <h1 className="mt-6 max-w-3xl font-serif text-[2.5rem] leading-[1.08] sm:text-6xl">
            Tempat yang kami kembangkan dan kelola.
          </h1>
          <p className="mt-7 max-w-xl text-[0.95rem] leading-[1.85] opacity-90 sm:text-base">
            Setiap kategori memiliki daftar propertinya sendiri — homestay, hotel, dan kos — dengan
            lokasi, gambaran singkat, dan halaman detail masing-masing.
          </p>
        </div>
      </section>

      {/* Category index */}
      <nav
        aria-label="Kategori program"
        className="border-b border-border bg-card/60 backdrop-blur-none"
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-x-10 gap-y-3 px-6 py-5 md:px-10">
          {categories.map((category, index) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="link-underline text-sm font-medium tracking-[0.14em] uppercase"
            >
              <span className="mr-2 text-muted-foreground">0{index + 1}</span>
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {categories.map((category, index) => (
          <section
            key={category.slug}
            id={category.slug}
            className="scroll-mt-24 border-b border-border py-20 last:border-0 md:py-28"
          >
            <header className="grid gap-8 md:grid-cols-12 md:gap-14">
              <div className="md:col-span-5">
                <p className="eyebrow text-muted-foreground">0{index + 1} — Kategori</p>
                <h2 className="mt-5 font-serif text-[2.5rem] leading-[1.1] sm:text-5xl">
                  {category.name}
                </h2>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="font-serif text-xl leading-[1.5] text-foreground sm:text-2xl">
                  {category.tagline}
                </p>
                <p className="mt-5 text-[0.95rem] leading-[1.9] text-muted-foreground sm:text-base">
                  {category.description}
                </p>
              </div>
            </header>

            <div className="mt-12 md:mt-16">
              {category.properties.length === 0 ? (
                <ComingSoonPanel image={category.image} categoryName={category.name} />
              ) : (
                <>
                  <p className="eyebrow text-muted-foreground">
                    {category.properties.length} Properti
                  </p>
                  <div className="mt-8 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {category.properties.map((property) => (
                      <PropertyCard
                        key={property.slug}
                        property={property}
                        categorySlug={category.slug}
                        fallbackImage={category.image}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default ProgramPage;