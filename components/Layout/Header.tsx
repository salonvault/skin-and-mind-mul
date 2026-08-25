"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteIdentity } from "@/configurations";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Results", href: "#services" },
  { label: "Clinic", href: "#studio" },
  { label: "Services", href: "#treatments" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const hero = document.querySelector("#hero");
      const threshold = hero instanceof HTMLElement ? hero.offsetTop + hero.offsetHeight - 90 : window.innerHeight - 90;
      setPastHero(window.scrollY >= threshold);
    };

    updateHeaderTheme();
    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-4 md:px-6">
      <div
        className={`mx-auto grid max-w-[1320px] grid-cols-[120px_1fr_auto] items-center gap-4 rounded-full border px-1 ps-4 py-1.5 shadow-[0_18px_46px_rgba(65,34,9,0.14)] backdrop-blur-[18px] backdrop-saturate-150 transition-colors duration-300 md:grid-cols-[170px_1fr_238px] md:px-6 ${
          pastHero
            ? "border-zinc-900/14 bg-white/90"
            : "border-white/22 bg-white/12"
        }`}
      >
        <a
          href="#"
          aria-label={`${siteIdentity.brandName} home`}
          className="flex h-11 w-[106px] items-center font-heading text-[22px] font-semibold leading-none tracking-[-0.02em] md:w-[150px] md:text-[26px]"
        >
          <span title={siteIdentity.brandName} className={`max-w-full  ${pastHero ? "text-[var(--color-foreground)]" : "text-white"}`}>{siteIdentity.brandName}</span>
        </a>

        <nav
          className={`mx-auto hidden h-9 items-center rounded-full p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-colors lg:flex ${
            pastHero ? "bg-zinc-900/6" : "bg-white/10"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-label flex h-7 items-center rounded-full px-4 transition ${
                index === 0
                  ? "bg-[#009EC8] text-white shadow-[0_12px_28px_rgba(0,78,100,0.2)]"
                  : pastHero
                    ? "text-[var(--color-foreground)]/82 hover:bg-[#009EC8]/10 hover:text-[var(--color-foreground)]"
                    : "text-white/88 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <a
            href={siteIdentity.whatsappHref}
            className="nav-label inline-flex h-9 items-center gap-2.5 rounded-full bg-primary-1 py-1 pl-4 pr-1 text-white shadow-[0_16px_34px_rgba(0,78,100,0.2)] transition hover:bg-[#007D9F]"
          >
            Book Appointment
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#009EC8]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
            </span>
          </a>
        </div>

        <Sheet>
          <SheetTrigger
            className={`ms-auto inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors lg:hidden ${
              pastHero
                ? "border-zinc-900/18 bg-white/70 text-[var(--color-foreground)]"
                : "border-white/30 bg-white/18 text-white"
            }`}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent className="border-zinc-900/18 bg-[var(--warm-cream)] p-5 text-[var(--color-foreground)] shadow-[0_20px_70px_rgba(24,24,27,0.18)]">
            <div className="flex items-center gap-3">
              <span className="heading-h3 tracking-[-0.02em]">{siteIdentity.brandName}</span>
            </div>

            <nav className="mt-6 grid gap-2">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <a href={item.href} className="para-p2 rounded-[8px] border border-transparent bg-white/64 px-4 py-3 transition hover:border-[#009EC8]/30 hover:text-[#007D9F]">
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>

            <SheetClose asChild>
              <a href={siteIdentity.whatsappHref} className="nav-label mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#009EC8] px-5 text-white">
                Book Appointment
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
