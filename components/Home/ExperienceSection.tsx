import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Reveal from "./Reveal";
import ScrollZoom from "./ScrollZoom";
import { siteIdentity } from "@/configurations";

const treatments = [
  {
    title: "Dark Spot Treatment",
    beforeImage: "/assets/new/darkspots.jpeg",
    afterImage: "/assets/new/clear_darkspotes.jpeg",
    beforeAlt: "Skin with visible dark spots before treatment",
    afterAlt: "Clearer-looking skin after dark spot treatment",
  },
  {
    title: "Acne Treatment",
    beforeImage: "/assets/new/acne.jpeg",
    afterImage: "/assets/new/acne_clear.jpeg",
    beforeAlt: "Skin with visible acne before treatment",
    afterAlt: "Clearer-looking skin after acne treatment",
  },
];

export default function ExperienceSection() {
  return (
    <section id="services" className="bg-[var(--warm-cream)]  text-[var(--color-foreground)]">
      <div className="relative min-h-[540px] overflow-hidden bg-[#f7f1e9] lg:min-h-[520px]">
        <ScrollZoom className="absolute inset-0" scale={1.285}>
          <Image
            src="/assets/bg_2.jpeg"
            alt="Patient with healthy-looking skin after dermatology care"
            fill
            quality={100}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-left-bottom opacity-90"
            priority={false}
          />
        </ScrollZoom>

        <div className="container relative z-10 flex min-h-[540px] items-center py-10 lg:min-h-[520px] lg:justify-end lg:py-10">
            <div className="w-full rounded-[14px] border border-zinc-900/12 bg-white/90 p-5 shadow-[0_26px_80px_rgba(24,24,27,0.14)] backdrop-blur-xl sm:p-6 lg:w-[600px] lg:p-6">
            <p className="eyebrow">Progress you can see</p>
            <Reveal>
              <h2 className="heading-h2 mt-3 max-w-[560px]">
                Follow your skin&apos;s {" "}
                <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
                  treatment progress
                </span>{" "}
                with {siteIdentity.brandName}.
              </h2>
            </Reveal>
            <p className="para-p3 mt-4 max-w-[520px]">
              Drag each slider to explore typical treatment goals. Results vary by diagnosis, skin type, treatment choice, and consistency with aftercare.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {treatments.map((treatment) => (
                <BeforeAfterSlider key={treatment.title} {...treatment} />
              ))}
            </div>

            <a
              href="#services"
              className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-[var(--color-foreground)] px-5 text-[12px] font-bold text-[var(--warm-cream)] transition hover:bg-[var(--color-primary-2)]"
            >
              View Dermatology Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
