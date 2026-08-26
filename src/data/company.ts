export const company = {
  name: "PT. SIPAYUNG HOLDING GROUP",
  shortName: "Sipayung Holding Group",
  business: "Hospitality & Property",
  established: "29 August 2026",
  director: "Dodi Sugiarto Sipayung",
  phone: "+62 821-3491-7030",
  phoneRaw: "6282134917030",
  address:
    "Kayubimo, Kemadang, Kec. Tanjungsari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55854",
  mapsQuery: "Kayubimo, Kemadang, Tanjungsari, Gunungkidul, Daerah Istimewa Yogyakarta 55854",
  description:
    "PT. SIPAYUNG HOLDING GROUP merupakan perusahaan yang bergerak di bidang hospitality dan properti dengan fokus pada pengembangan serta pengelolaan homestay, hotel, dan kos-kosan.",
  vision:
    "Menjadi perusahaan hospitality, properti, dan pariwisata yang terpercaya dan inovatif dalam menciptakan pengalaman berkualitas serta memberikan nilai berkelanjutan bagi pelanggan, mitra, dan masyarakat.",
  missions: [
    "Menyediakan layanan hospitality dan akomodasi yang nyaman, berkualitas, dan berorientasi pada kepuasan pelanggan.",
    "Mengembangkan potensi properti dan destinasi wisata menjadi peluang usaha yang bernilai dan berkelanjutan.",
    "Menghadirkan produk dan pengalaman wisata yang kreatif, inovatif, dan sesuai dengan kebutuhan pelanggan.",
    "Membangun kemitraan yang kuat dengan masyarakat, pelaku usaha, dan berbagai pihak untuk menciptakan pertumbuhan bersama.",
    "Menjalankan bisnis secara profesional, transparan, dan berorientasi pada pertumbuhan jangka panjang.",
    "Memberikan kontribusi positif terhadap masyarakat dan lingkungan melalui pemberdayaan ekonomi serta kegiatan sosial yang berkelanjutan.",
  ],
};

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  company.mapsQuery,
)}&output=embed`;

export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.mapsQuery,
)}`;

export const whatsappUrl = `https://wa.me/${company.phoneRaw}`;
