import Image from "next/image";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import footerBackground from "../../public/assets/bg-zink.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { siteIdentity } from "@/configurations";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Results", href: "#services" },
  { label: "Clinic", href: "#studio" },
  { label: "Services", href: "#treatments" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const services = ["Acne Care", "Pigmentation", "Hair Loss", "Laser Treatments", "Injectables", "Skin Screening"];

const socialLinks = [
  { label: "Instagram", href: siteIdentity.instagram, icon: FaInstagram },
  { label: "Facebook", href: siteIdentity.facebook, icon: FaFacebookF },
].filter((social) => Boolean(social.href));

export default function Footer() {
  return (
    <footer className="bg-[var(--warm-cream)] px-4 py-6 text-white md:px-7">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[8px] border border-[#009EC8]/30 bg-zinc-950 shadow-[var(--shadow-soft)]">
        <Image
          src={footerBackground}
          alt=""
          fill
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.86),rgba(0,61,78,0.58)),linear-gradient(180deg,rgba(9,9,11,0.22),rgba(9,9,11,0.88))]" />

        <div className="relative z-10 grid gap-10 px-5 py-8 md:px-8 lg:grid-cols-[1.45fr_0.8fr_0.8fr_1fr] lg:py-10">
          <div>
            <a href="#hero" className="inline-flex min-h-[60px] items-center font-heading text-[36px] font-semibold leading-none tracking-[-0.025em] text-white" aria-label={`${siteIdentity.brandName} home`}>
              {siteIdentity.brandName}
            </a>
            <p className="mt-5 max-w-[380px] text-[13px] leading-[1.8] text-white/72">
              Dermatologist-led skin, hair, laser, and aesthetic care with individual treatment plans in {siteIdentity.city}.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/18 bg-white/10 text-white/78 transition hover:border-[#5ED8F5]/60 hover:bg-[#009EC8] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#5ED8F5]">Explore</h3>
            <nav className="mt-5 grid gap-3 text-[13px] text-white/72">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-[#5ED8F5]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#5ED8F5]">Services</h3>
            <div className="mt-5 grid gap-3 text-[13px] text-white/72">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#5ED8F5]">Book</h3>
            <p className="mt-5 max-w-[280px] text-[13px] leading-[1.75] text-white/72">
              Have a skin, hair, or aesthetic concern? Start with a focused consultation at {siteIdentity.brandName}.
            </p>
            <a
              href={siteIdentity.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-[7px] bg-[var(--color-primary-1)] px-5 text-[12px] font-bold text-white transition hover:bg-[#007D9F]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp the clinic
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 border-t border-white/14 bg-black/10 px-5 py-5 text-[12px] text-white/62 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {siteIdentity.brandName}. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
            <a href={siteIdentity.phoneHref} className="inline-flex items-center gap-2 hover:text-white"><Phone className="h-3.5 w-3.5" /> {siteIdentity.phone}</a>
            <p className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {siteIdentity.fullLocation}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
