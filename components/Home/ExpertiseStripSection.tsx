import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollZoom from "./ScrollZoom";
import { siteIdentity } from "@/configurations";

const avatars = [
"/assets/new/person1.jpeg",
"/assets/new/person2.jpeg",
"/assets/new/person3.jpeg",
"/assets/new/person4.jpeg",
];

export default function ExpertiseStripSection() {
  return (
    <section className="bg-[var(--warm-cream)] px-[2px] py-16 text-[var(--color-foreground)] lg:py-22">
      <div className="container">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="heading-h2 mx-auto max-w-[720px]">
            <span className="inline-block rounded-[7px] bg-[var(--color-primary-1)] px-2 text-white">
              Dermatologist-led care
            </span>{" "}
            for every stage of your skin.
          </h2>
          <p className="para-p3 mx-auto mt-4 max-w-[520px]">
            From persistent acne and pigmentation to hair loss, laser care, and aesthetic concerns, every plan begins with a focused consultation at our {siteIdentity.city} clinic.
          </p>
          <a
            href={siteIdentity.whatsappHref}
            className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[var(--color-primary-1)] py-1 pl-5 pr-1 text-[12px] font-bold text-white shadow-[0_14px_30px_rgba(0,158,200,0.2)] transition hover:bg-[var(--color-primary-2)]"
          >
            Book Appointment
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[var(--color-primary-1)]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </a>
        </div>

        <div className="relative mx-auto mt-6 max-w-[1040px] overflow-hidden rounded-[18px] border border-[#009EC8]/25 bg-white p-2 shadow-[0_24px_70px_rgba(24,24,27,0.12)]">
          <ScrollZoom className="absolute inset-0" scale={1.185}>
            <Image
              src="/assets/bg-zink.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1040px"
              className="object-cover"
            />
          </ScrollZoom>
          <div className="absolute inset-0 bg-white/10" />

          <div className="relative z-10 grid gap-2 lg:grid-cols-4 lg:grid-rows-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-[14px] lg:col-span-1 lg:row-span-2 lg:min-h-[500px]">
            <ScrollZoom className="absolute inset-0" scale={1.19}>
              <Image
                src="/assets/new/treatment3.jpeg"
                alt={`Clinical skin treatment at ${siteIdentity.brandName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </ScrollZoom>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(24,24,27,0.16)_100%)]" />
          </div>

          <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-[14px] bg-[#201915] p-5 text-white lg:col-span-2 lg:row-span-1">
            <ScrollZoom className="absolute inset-0" scale={1.12}>
              <Image
                src="/assets/new/treatment_2.jpeg"
                alt={`Dermatology treatment setting at ${siteIdentity.brandName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </ScrollZoom>
          
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-[14px] bg-white p-6 lg:col-span-1 lg:row-span-1">
            <ScrollZoom className="absolute inset-0" scale={1.16}>
              <Image
                src="/assets/new/treatment.jpeg"
                alt="Dermatologist-guided aesthetic treatment"
                fill
                sizes="(max-width: 1024px) 100vw, 260px"
                className="object-cover"
              />
            </ScrollZoom>
          </div>

          <div className="min-h-[220px] bg-white/50 backdrop-blur-lg  rounded-[14px] p-7 lg:col-span-1 lg:row-span-1">
            <p className="font-heading text-[clamp(46px,5vw,72px)] leading-none text-[var(--color-black)]">1:1</p>
            <p className="para-p3 mt-2">Focused consultations<br/>Individual care plans</p>
            <div className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#111] px-3 py-2 text-white">
              <div className="flex -space-x-2">
                {avatars.map((avatar) => (
                  <span key={avatar} className="relative block h-8 w-8 overflow-hidden rounded-full border-2 border-[#111]">
                    <Image src={avatar} alt="" fill sizes="32px" className="object-cover" />
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-[11px] font-bold">
                {siteIdentity.city}
              </span>
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-[14px] lg:col-span-2 lg:row-span-1">
            <ScrollZoom className="absolute inset-0" scale={1.23}>
              <Image
                src="/assets/new/treatment4.jpeg"
                alt={`Personalised facial treatment at ${siteIdentity.brandName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
                style={{ objectPosition: "62% 52%" }}
              />
            </ScrollZoom>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(24,24,27,0.14)_100%)]" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
