import Image from "next/image";
import { Clock3, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import { siteIdentity } from "@/configurations";

const details = [
  { icon: Leaf, title: "Evidence-based choices", text: "Recommendations are guided by your diagnosis, skin type, and realistic treatment goals." },
  { icon: HeartHandshake, title: "Care built around you", text: "We listen to your concerns, daily routine, medical history, and comfort before planning care." },
  { icon: ShieldCheck, title: "Clinical hygiene", text: "A clean, professional setting with careful protocols for every consultation and procedure." },
  { icon: Clock3, title: `Convenient ${siteIdentity.city} care`, text: `Skin, hair, and laser care close to home in ${siteIdentity.city}, with clear follow-up guidance.` },
];

export default function GallerySection() {
  return (
    <section id="studio" className="relative overflow-hidden py-16 text-[var(--color-foreground)] lg:py-24">
    
      <div className="absolute inset-0 " />

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-zinc-900/14 bg-white shadow-[var(--shadow-lift)]">
            <Image
              src="/assets/new/laser.jpeg"
              alt={`Welcoming treatment space at ${siteIdentity.brandName}`}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "62% 50%" }}
            />

            <div className="absolute bottom-6 left-6 right-6 grid gap-2 sm:grid-cols-3">
              {["Skin Health", "Aesthetics", "Confidence"].map((label) => (
                <span key={label} className="rounded-[7px] border border-white/54 bg-white/78 px-4 py-3 text-center font-heading text-[24px] font-semibold text-[var(--color-primary-1)] backdrop-blur">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Your neighbourhood skin clinic</p>
            <Reveal>
              <h2 className="mt-4 max-w-[600px] font-heading text-[clamp(42px,5vw,78px)] font-semibold leading-[0.96]">
                Specialist care, {" "}
                <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
                  close to home.
                </span>
              </h2>
            </Reveal>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.85] text-[var(--color-ink-2)]">
              {siteIdentity.brandName} brings dermatology, laser technology, hair care, and considered aesthetic treatments to {siteIdentity.city}. We focus on careful assessment, understandable advice, and treatment plans designed around your goals and daily routine.
            </p>

            <div className="mt-9 grid gap-3">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <article key={detail.title} className="grid grid-cols-[44px_1fr] gap-4 rounded-[8px] border border-zinc-900/14 bg-white/64 p-4 shadow-[var(--shadow-card)]">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#009EC8]/10 text-[var(--color-primary-1)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-[25px] font-semibold leading-none">{detail.title}</h3>
                      <p className="mt-2 text-[12px] leading-[1.65] text-[var(--color-ink-2)]">{detail.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
