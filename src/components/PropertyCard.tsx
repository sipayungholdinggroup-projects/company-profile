import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";

type Props = {
  property: Property;
  categorySlug: string;
  fallbackImage: string;
};

export default function PropertyCard({ property, categorySlug, fallbackImage }: Props) {
  return (
    <article className="group flex flex-col">
      <Link
        to="/program/$category/$slug"
        params={{ category: categorySlug, slug: property.slug }}
        className="block overflow-hidden"
      >
        <img
          src={property.image ?? fallbackImage}
          alt={property.name}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
      </Link>

      <h3 className="mt-6 font-serif text-[1.75rem] leading-snug">{property.name}</h3>

      <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4 shrink-0" aria-hidden />
        {property.location}
      </p>

      <p className="mt-4 text-[0.95rem] leading-[1.85] text-muted-foreground">
        {property.description}
      </p>

      <Link
        to="/program/$category/$slug"
        params={{ category: categorySlug, slug: property.slug }}
        className="link-underline mt-6 inline-flex items-center gap-2 self-start text-sm font-medium tracking-[0.14em] uppercase"
      >
        View Detail <ArrowUpRight className="size-4" />
      </Link>
    </article>
  );
}
