import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { company } from "@/data/company";
import logo from "../../public/favicon.svg";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/program", label: "Program" },
  { to: "/tentang", label: "Tentang" },
  { to: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Halaman yang menggunakan navbar transparan di atas hero
  const overHero =
    pathname === "/" || pathname === "/program" || pathname === "/tentang";

  const light = overHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Tutup mobile menu ketika berpindah halaman
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        light
          ? "bg-transparent text-background"
          : "border-b border-border bg-background/95 text-foreground backdrop-blur",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        {/* Logo / Company Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt={`${company.name} logo`}
            className="h-9 w-auto object-contain"
          />

          <span className="font-serif text-base uppercase tracking-[0.16em] sm:text-lg">
            {company.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const active =
              link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "link-underline text-[0.8rem] uppercase tracking-[0.14em] transition-opacity",
                  active ? "opacity-100" : "opacity-60 hover:opacity-100",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border bg-background text-foreground md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((link) => {
              const active =
                link.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "border-b border-border py-4 text-sm uppercase tracking-[0.14em] last:border-0",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
