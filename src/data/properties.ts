import homestayImage from "@/assets/homestay.jpg";
import hotelImage from "@/assets/hotel.jpg";
import kosImage from "@/assets/kos.jpg";

export type Property = {
  slug: string;
  name: string;
  location: string;
  description: string;
  image?: string;
  gallery?: string[];
  facilities?: string[];
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  properties: Property[];
};

/**
 * Add properties to the `properties` array of a category when they are ready.
 * While the array is empty the site shows a "Coming Soon" state.
 */
export const categories: Category[] = [
  {
    slug: "homestay",
    name: "Homestay",
    tagline: "Akomodasi yang nyaman dengan suasana yang lebih personal.",
    description:
      "Ruang menginap berskala kecil yang dekat dengan keseharian masyarakat sekitar, dirancang agar tamu merasa diterima seperti di rumah sendiri.",
    image: homestayImage,
    properties: [],
  },
  {
    slug: "hotel",
    name: "Hotel",
    tagline: "Kenyamanan dan pelayanan untuk pengalaman menginap yang lebih baik.",
    description:
      "Akomodasi dengan standar pelayanan yang konsisten, menghadirkan ketenangan, kebersihan, dan keramahan pada setiap detail.",
    image: hotelImage,
    properties: [],
  },
  {
    slug: "kos",
    name: "Kos",
    tagline: "Ruang tinggal yang nyaman untuk kehidupan sehari-hari.",
    description:
      "Hunian jangka panjang yang tertata, aman, dan tenang, untuk mereka yang menjadikan sebuah kamar sebagai tempat pulang.",
    image: kosImage,
    properties: [],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProperty(categorySlug: string, propertySlug: string): Property | undefined {
  return getCategory(categorySlug)?.properties.find((item) => item.slug === propertySlug);
}
