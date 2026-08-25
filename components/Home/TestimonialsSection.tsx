import Image from "next/image";
import Reveal from "./Reveal";
import { siteIdentity } from "@/configurations";

const textReviews = [
  {
    name: "Patient feedback",
    service: "Acne Consultation",
    image: "/assets/new/person1.jpeg",
    text: "Clear explanations, a considered consultation, and a treatment plan shaped around the patient’s skin concerns.",
  },
  {
    name: "Patient feedback",
    service: "Pigmentation Care",
    image: "/assets/new/person2.jpeg",
    text: "Professional guidance, practical aftercare, and realistic expectations throughout the pigmentation-care journey.",
  },
  {
    name: "Patient feedback",
    service: "Hair Loss Consultation",
    image: "/assets/new/person4.jpeg",
    text: "A focused discussion of hair concerns, available options, and the purpose of every recommended step.",
  },
];

const imageCards = [
  { name: `${siteIdentity.brandName} care`, service: "Acne Scar Treatment", image: "/assets/new/review1.jpeg" },
  { name: `${siteIdentity.brandName} care`, service: "HydraFacial", image: "/assets/new/review3.jpeg" },
  { name: `${siteIdentity.brandName} care`, service: "Melasma Care", image: "/assets/new/review_4.jpeg" },
  { name: `${siteIdentity.brandName} care`, service: "Laser Hair Removal", image: "/assets/new/review_2.jpeg" },
];

function ReviewCard({ name, service, image, text }: { name: string; service: string; image: string; text: string }) {
  return (
    <article className="rounded-[8px] border border-[#009EC8]/18 bg-[linear-gradient(135deg,#ffffff_0%,#eef8fa_48%,#e4f5f9_100%)] p-5 shadow-[0_14px_34px_rgba(24,24,27,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(24,24,27,0.14)]">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[var(--color-primary-3)]">
          <Image src={image} alt={`${name} portrait`} fill sizes="40px" className="object-cover" />
        </div>
        <div>
          <p className="text-[13px] font-extrabold text-[var(--color-foreground)]">{name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">{service}</p>
        </div>
      </div>
      <p className="mt-5 text-[12px] leading-[1.7] text-[var(--color-ink-2)]">{text}</p>
    </article>
  );
}

function ImageReviewCard({ name, service, image, tall = false }: { name: string; service: string; image: string; tall?: boolean }) {
  return (
    <article className={`relative overflow-hidden rounded-[8px] bg-[var(--color-primary-3)] shadow-[0_14px_34px_rgba(24,24,27,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(24,24,27,0.18)] ${tall ? "min-h-[410px]" : "min-h-[280px]"}`}>
      <Image src={image} alt={`${service} patient story at ${siteIdentity.brandName}`} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0)_38%,rgba(9,9,11,0.7)_100%)]" />
      <div className="absolute bottom-5 left-5 right-5 text-white">
        <p className="text-[14px] font-extrabold">{name}</p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.08em] text-white/74">
          {service}
        </p>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[var(--warm-cream)] py-14 text-[var(--color-foreground)] lg:py-20">
      <div className="container">
        <div className="mx-auto mb-9 max-w-[760px] text-center">
          <p className="eyebrow">Patient perspectives</p>
          <div className="mt-3">
            <Reveal>
              <h2 className="heading-h2 mx-auto max-w-[660px]">
                Care for {siteIdentity.city} patients seeking{" "}
                <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
                  clearer guidance
                </span>
                .
              </h2>
            </Reveal>
            <p className="mx-auto mt-4 max-w-[580px] text-[12px] leading-[1.7] text-[var(--color-ink-2)]">Explore the concerns patients commonly bring to {siteIdentity.brandName}, then open the latest public review results for first-hand feedback.</p>
            <a href={siteIdentity.googleReviewsHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full border border-[#009EC8]/30 bg-white px-5 py-2 text-[12px] font-bold text-[#007D9F] transition hover:bg-[#009EC8] hover:text-white">View public reviews</a>
            
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-3">
            <ReviewCard {...textReviews[0]} />
            <ImageReviewCard {...imageCards[0]} tall />
          </div>
          <div className="grid gap-3">
            <ImageReviewCard {...imageCards[1]} tall />
            <ReviewCard {...textReviews[1]} />
          </div>
          <div className="grid gap-3">
            <ReviewCard {...textReviews[2]} />
            <ImageReviewCard {...imageCards[2]} tall />
          </div>
          <div className="grid gap-3">
            <ImageReviewCard {...imageCards[3]} tall />
            <ReviewCard {...textReviews[0]} />
          </div>
        </div>
      </div>
    </section>
  );
}
