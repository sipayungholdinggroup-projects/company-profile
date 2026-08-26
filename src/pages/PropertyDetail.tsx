import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getCategory, getProperty } from "@/data/properties";
import { company, whatsappUrl, mapsLinkUrl } from "@/data/company";

function PropertyDetail() {
  const { category: categorySlug, slug } = useParams<{
    category: string;
    slug: string;
  }>();

  const category = categorySlug ? getCategory(categorySlug) : undefined;
  const property =
    categorySlug && slug ? getProperty(categorySlug, slug) : undefined;

  if (!category || !property) {
    return (
      <div className="mx-auto flex min-h-[80vh] max-w-2xl flex-col justify-center px-6 py-40 text-center">
        <p className="eyebrow text-muted-foreground">Coming Soon</p>

        <h1 className="mt-6 font-serif text-4xl leading-tight">
          Properti ini belum tersedia untuk ditampilkan.
        </h1>

        <p className="mt-6 text-sm leading-[1.9] text-muted-foreground">
          Informasi detail sedang kami siapkan. Silakan hubungi kami untuk
          pertanyaan mengenai ketersediaan.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
          <Link
            to="/program"
            className="link-underline text-sm tracking-[0.14em] uppercase"
          >
            <ArrowLeft className="mr-2 inline size-4" />
            Kembali ke Program
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm tracking-[0.14em] uppercase opacity-85"
          >
            Hubungi Kami →
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <img
          src={property.image ?? category.image}
          alt={property.name}
          className="absolute inset-0 size-full object-cover"
        />

        <div className="absolute inset-0 bg-charcoal/60" />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-32 pb-16 text-background md:px-10 md:pb-24">
          <p className="eyebrow opacity-85">{category.name}</p>

          <h1 className="mt-5 font-serif text-4xl sm:text-6xl">
            {property.name}
          </h1>

          <p className="mt-4 text-sm opacity-90">
            {property.location}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <section className="grid gap-10 border-b border-border py-20 md:grid-cols-12 md:py-28">
          <h2 className="eyebrow text-muted-foreground md:col-span-3">
            Overview
          </h2>

          <p className="text-base leading-[1.9] text-muted-foreground md:col-span-8">
            {property.description}
          </p>
        </section>

        {property.gallery && property.gallery.length > 0 && (
          <section className="border-b border-border py-20 md:py-28">
            <h2 className="eyebrow text-muted-foreground">Gallery</h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {property.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={property.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              ))}
            </div>
          </section>
        )}

        <section className="grid gap-10 border-b border-border py-20 md:grid-cols-12 md:py-28">
          <h2 className="eyebrow text-muted-foreground md:col-span-3">
            Facilities
          </h2>

          <div className="md:col-span-8">
            {property.facilities && property.facilities.length > 0 ? (
              <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {property.facilities.map((facility) => (
                  <li
                    key={facility}
                    className="border-b border-border pb-3 text-sm text-muted-foreground"
                  >
                    {facility}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                Coming Soon
              </p>
            )}
          </div>
        </section>

        <section className="grid gap-10 border-b border-border py-20 md:grid-cols-12 md:py-28">
          <h2 className="eyebrow text-muted-foreground md:col-span-3">
            Location
          </h2>

          <div className="md:col-span-8">
            <p className="text-base leading-[1.9] text-muted-foreground">
              {property.location}
            </p>

            <a
              href={mapsLinkUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-6 inline-block text-sm tracking-[0.14em] uppercase"
            >
              Open in Google Maps →
            </a>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Tertarik dengan properti ini?
          </h2>

          <p className="mt-5 text-sm text-muted-foreground">
            {company.director} — {company.phone}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline mt-8 inline-block text-sm tracking-[0.14em] uppercase"
          >
            Hubungi via WhatsApp →
          </a>
        </section>
      </div>
    </>
  );
}

export default PropertyDetail;