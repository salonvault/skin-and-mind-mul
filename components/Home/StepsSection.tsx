import Image from "next/image";
import { CircleSmall } from "lucide-react";
import { siteIdentity } from "@/configurations";

const steps = [
  {
    number: "01",
    label: "Assess",
    heading: "Begin with your concern, history, routine, and skin examination.",
    bullets: [
      "Discuss symptoms, previous treatments, sensitivities, medicines, and daily skincare.",
      "Understand what is bothering you most and what a realistic improvement looks like.",
    ],
  },
  {
    number: "02",
    label: "Diagnose",
    heading: "Identify the condition before choosing products or procedures.",
    bullets: [
      "Receive a focused clinical assessment based on visible signs and relevant history.",
      "Discuss suitable options, expected timelines, limitations, and possible downtime.",
    ],
  },
  {
    number: "03",
    label: "Treat",
    heading: "Follow a plan selected for your diagnosis and day-to-day life.",
    bullets: [
      "Combine prescriptions, clinical procedures, or home care only where appropriate.",
      "Keep every recommendation clear, manageable, and medically responsible.",
    ],
  },
  {
    number: "04",
    label: "Review",
    heading: "Monitor progress and adjust your care as your skin responds.",
    bullets: [
      "Leave with written aftercare, warning signs to watch for, and a review timeline.",
      "Refine the plan at follow-up instead of relying on one-size-fits-all promises.",
    ],
  },
];

export default function StepsSection() {
  return (
    <section id="process" className="relative overflow-visible bg-[var(--color-primary-3)] py-16 text-[var(--color-foreground)] lg:py-24">
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(39,39,42,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,42,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-5 lg:min-h-[180vh]">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="sticky rounded-[8px] border border-zinc-900/14 bg-white/88 p-6 shadow-[var(--shadow-card)] backdrop-blur lg:min-h-[430px] lg:p-8"
                style={{ top: `calc(6rem + ${index * 18}px)`, zIndex: index + 1 }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary-1)]">
                      {step.number} / {step.label}
                    </p>
                    <h3 className="mt-5 max-w-[640px] font-heading text-[clamp(40px,5vw,76px)] font-semibold leading-[0.96]">
                      {step.heading}
                    </h3>
                  </div>
                  <span className="hidden font-heading text-[68px] font-semibold leading-none text-[#009EC8]/14 sm:block">
                    {step.number}
                  </span>
                </div>

                <ul className="mt-8 grid gap-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 rounded-[8px] border border-zinc-900/12 bg-[var(--warm-cream)]/72 p-4 text-[13px] leading-[1.65] text-[var(--color-ink-2)]">
                      <CircleSmall aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-primary-1)]" strokeWidth={2.5} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-zinc-900/14 bg-white shadow-[var(--shadow-lift)] lg:h-[min(620px,calc(100vh-7rem))] lg:min-h-0">
              <Image
                src="/assets/new/happy.jpeg"
                quality={100}
                alt={`Patient receiving a professional skin treatment at ${siteIdentity.brandName}`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "65% 50%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.02)_0%,rgba(9,9,11,0.62)_100%)]" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-white/78">The {siteIdentity.brandName} care journey</p>
                <h2 className="mt-3 max-w-[420px] font-heading text-[clamp(38px,4vw,62px)] font-semibold leading-[0.96]">
                  From first consultation to thoughtful follow-up.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
