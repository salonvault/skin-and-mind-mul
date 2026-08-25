import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { siteIdentity } from "@/configurations";

const items = [
  {
    step: "1",
    title: "Do I need a consultation before treatment?",
    text: "Yes. Acne, pigmentation, hair loss, rashes, and aesthetic concerns can have different causes. A consultation helps us recommend appropriate care instead of guessing from symptoms alone.",
  },
  {
    step: "2",
    title: "How quickly will I see improvement?",
    text: "Timelines vary with the diagnosis, severity, treatment, and consistency. We explain what is realistic for your case and review progress rather than promising an instant or guaranteed result.",
  },
  {
    step: "3",
    title: "Can I come for acne, pigmentation, or hair loss?",
    text: `${siteIdentity.brandName} provides consultation-led care for common skin, scalp, hair, laser, and aesthetic concerns, with treatment selected after assessment.`,
  },
  {
    step: "4",
    title: `Where is ${siteIdentity.brandName} located?`,
    text: `The clinic is located at ${siteIdentity.fullLocation}. For directions or an appointment, call or WhatsApp ${siteIdentity.phone}.`,
  },
];

export default function ProcessFaqSection() {
  return (
    <section id="faq" className="bg-[var(--warm-cream)] py-12 text-[var(--color-foreground)] lg:py-20">
      <div className="container">
        <div className="rounded-[8px] border border-zinc-900/14 bg-white px-5 py-8 shadow-[var(--shadow-soft)] md:px-8 lg:px-9 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1fr]">
            <div>
              <p className="eyebrow">Before your visit</p>
              <Reveal>
                <h2 className="mt-3 max-w-[560px] font-heading text-[clamp(42px,5vw,76px)] font-semibold leading-[0.96]">
                  Clear answers{" "}
                  <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
                    before you book
                  </span>{" "}
                  at {siteIdentity.brandName}.
                </h2>
              </Reveal>
              <a
                href={siteIdentity.whatsappHref}
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-[7px] bg-[var(--color-primary-1)] px-5 text-[13px] font-bold text-[var(--warm-cream)] transition hover:bg-[var(--color-primary-2)]"
              >
                Book a Consultation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid">
              {items.map((item) => (
                <div
                  className="grid grid-cols-[52px_1fr] gap-4 border-b border-zinc-900/14 py-5 transition duration-300 first:border-t hover:bg-[var(--warm-cream)]/62"
                  key={item.step}
                >
                  <p className="pt-1 font-heading text-[25px] font-semibold text-[var(--color-primary-1)]">
                    {item.step}
                  </p>
                  <div>
                    <h3 className="font-heading text-[clamp(27px,2.5vw,38px)] font-semibold leading-[1]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[560px] text-[12px] leading-[1.65] text-[var(--color-ink-2)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
