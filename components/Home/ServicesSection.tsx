"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteIdentity } from "@/configurations";

const services = [
  {
    title: "HydraFacial",
    text: "Deep cleansing, exfoliation, hydration, and nourishment for refreshed, radiant-looking skin.",
    image: "/assets/services/hydrafacial.jpeg",
  },
  {
    title: "Acne & Acne Scars",
    text: "Personalized treatments to manage active acne and improve the appearance of acne scars.",
    image: "/assets/services/acne.jpeg",
  },
  {
    title: "Pigmentation & Melasma",
    text: "Targeted care for melasma, dark spots, uneven tone, and unwanted pigmentation.",
    image: "/assets/services/pigpentation.jpeg",
  },
  {
    title: "Laser Hair Removal",
    text: "Long-term hair reduction using advanced laser technology for smoother-looking skin.",
    image: "/assets/services/laser_hair_removal.jpeg",
  },
  {
    title: "Chemical Peels",
    text: "Professional exfoliation to improve skin texture, tone, pigmentation, and overall radiance.",
    image: "/assets/services/chemical_peel.jpeg",
  },
   {
    title: "Hair Loss & PRP",
    text: "Advanced hair and scalp treatments designed to support healthier growth and reduce hair loss.",
    image: "/assets/services/Hair_Loss_PRP.jpeg",
  },
  {
    title: "Microneedling",
    text: "Collagen-focused treatment to improve skin texture, pores, fine lines, and acne scars.",
    image: "/assets/services/Microneedling.jpeg",
  },
  {
    title: "Dermal Fillers",
    text: "Restorative facial treatments designed to enhance contours and replenish lost volume.",
    image: "/assets/services/Dermal_Fillers.jpeg",
  },
  {
    title: "Skin Rejuvenation",
    text: "Advanced treatments focused on improving firmness, texture, tone, and youthful-looking skin.",
    image: "/assets/services/Skin_Rejuvenation.jpeg",
  },
  {
    title: "Botox Treatment",
    text: "Precision injectable treatments to soften the appearance of fine lines and facial wrinkles.",
    image: "/assets/services/botox.jpeg",
  },
  {
    title: "Mole & Skin Tag Removal",
    text: "Professional assessment and removal of unwanted moles, skin tags, and other benign growths.",
    image: "/assets/services/Mole_Removal.jpeg",
  },
  {
    title: "Eczema & Psoriasis",
    text: "Expert dermatological care to manage chronic skin conditions, irritation, inflammation, and flare-ups.",
    image: "/assets/services/Eczema_Psoriasis.jpeg",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const context = gsap.context(() => {
      const setupHorizontalScroll = () => {
        const distance = track.scrollWidth - viewport.clientWidth;
        if (distance <= 0) return undefined;
        const isMobile = window.matchMedia("(max-width: 767px)").matches;

        return gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: viewport,
            start: isMobile ? "top 26%" : "top 16%",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      };

      setupHorizontalScroll();
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="treatments" className="overflow-hidden bg-zinc-950 bg-[url('/assets/bg-zink.png')] bg-cover bg-center py-16 text-white lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="eyebrow text-[var(--color-primary-1)]">{siteIdentity.brandName} treatments</p>
          <h2 className="heading-h2 mx-auto mt-4 max-w-[860px] text-white!">
            Doctor-guided care for{" "}
            <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
              skin, hair &amp; confidence
            </span>{" "}
            using modern dermatology and aesthetic treatments.
          </h2>
        </div>
      </div>

      <div ref={viewportRef} className="mt-12 overflow-hidden px-4 pb-2 [scrollbar-width:none] md:px-7 [&::-webkit-scrollbar]:hidden">
        <div ref={trackRef} className="flex w-max will-change-transform">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative aspect-[3/4] w-[calc(100vw-2rem)] overflow-hidden border-y border-r border-white/12 first:border-l sm:w-[78vw] md:w-[280px] lg:w-[310px]"
            >
              <Image
                src={service.image}
                alt={`${service.title} at ${siteIdentity.brandName}`}
                fill
                sizes="(min-width: 1024px) 310px, 260px"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: index === 6 ? "50% 10%" : "50% 50%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.12)_0%,rgba(24,24,27,0.42)_44%,rgba(9,9,11,0.92)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,158,200,0.2),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-heading text-[28px] font-normal uppercase leading-none text-white">
                  {service.title}
                </p>
                <p className="mt-3 max-w-[230px] text-[12px] font-medium leading-[1.55] text-white/76">
                  {service.text}
                </p>
                <a href={siteIdentity.whatsappHref} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase text-white backdrop-blur transition hover:bg-[var(--color-primary-1)]">
                  Book Now
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
             
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
