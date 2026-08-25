import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Flower2 } from "lucide-react";
import heroBackground from "../../public/assets/bg-zink.png";
import ScrollZoom from "./ScrollZoom";
import { siteIdentity } from "@/configurations";



function MiniImage() {
  return (
    <div className="relative h-[104px] w-[104px] shrink-0 overflow-hidden rounded-[14px] bg-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] md:h-[118px] md:w-[118px]">
      <Image
        src="/assets/new/hydra_facial.png"
        alt={`Clinical facial treatment at ${siteIdentity.brandName} in ${siteIdentity.city}`}
        fill
        sizes="168px"
        className="object-cover"
        style={{ objectPosition: "62% 54%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(87,41,8,0.18))]" />
    </div>
  );
}

function ArrowBadge() {
  return (
    <span className="hero-cta-icon bg-white text-[#009EC8]">
      <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2.3} />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white p-[2px] text-white">
      <div className="relative min-h-[calc(100vh-4px)] overflow-hidden bg-zinc-950 shadow-[0_26px_70px_rgba(9,9,11,0.24)]">
        <Image
          src={heroBackground}
          alt=""
          fill
          sizes="100vw"
          className="z-0 object-cover"
          placeholder="blur"
          preload
        />
      
       

        <div className="absolute inset-y-0 right-[17%] z-0 hidden w-[60%] min-w-[560px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_72%,transparent_99%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_72%,transparent_99%)] lg:block">
          <ScrollZoom className="absolute inset-0" scale={1.125} start="top top" end="bottom top">
            <Image
              src="/assets/new/hero.png"
              alt="Woman caring for her skin with dermatologist-guided advice"
              fill
              sizes="(max-width: 768px) 110vw, 920px"
              className="object-contain object-right-top"
              preload
            />
          </ScrollZoom>
        </div>


        <div className="relative z-30 flex min-h-[calc(100vh-4px)] flex-col px-5 pb-6 pt-24 sm:px-7 md:px-12 md:pt-28 lg:grid lg:grid-rows-[auto_1fr_auto] lg:px-16 lg:pb-9 lg:pt-36">
          <div className="max-w-[690px]">
            <p className="hero-kicker">
              <BadgeCheck className="h-3.5 w-3.5" />
              Dermatologist-led care in {siteIdentity.city}
            </p>

            <h1 className="heading-h1 hero-title mt-5">
              Expert Skin Care,
              <span className="hero-title-accent block">Made Personal.</span>
            </h1>

            <div className="mt-5 flex max-w-[410px] items-center gap-4 text-[#5ED8F5]/74">
              <span className="h-px flex-1 bg-current" />
              <Flower2 className="h-4 w-4 shrink-0" strokeWidth={1.7} />
              <span className="h-px flex-1 bg-current" />
            </div>

            <p className="hero-copy mt-6">
              Skin, hair, laser, and aesthetic care guided by qualified professionals at {siteIdentity.brandName} in {siteIdentity.city}.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteIdentity.whatsappHref} className="hero-cta bg-[#009EC8] text-white shadow-[0_18px_38px_rgba(0,78,100,0.28)] transition hover:bg-[#007D9F]">
                Book Appointment
                <ArrowBadge />
              </a>
              <a href="#services" className="hero-cta border border-white/24 bg-white/8 text-white/88 backdrop-blur-md transition hover:bg-white/14">
                Explore Treatments
                <span className="hero-cta-icon border border-white/24 bg-white/8 text-white">
                  <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2.3} />
                </span>
              </a>
            </div>
          </div>

          <div className="relative z-0 -mx-5 mt-6 h-[360px] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_0%,#000_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_78%,transparent_100%)] sm:-mx-7 sm:h-[430px] md:-mx-12 md:h-[520px] lg:hidden">
            <ScrollZoom className="absolute inset-0" scale={1.125} start="top 70%" end="bottom top">
              <Image
                src="/assets/new/hero.png"
                alt="Woman caring for her skin with dermatologist-guided advice"
                fill
                sizes="100vw"
                className="object-contain object-bottom"
                preload
              />
            </ScrollZoom>
          </div>

          <div className="relative z-10 mt-[-46px] flex items-center gap-3 rounded-[14px] border border-white/16 bg-[#006E8B]/64 p-4 shadow-[0_22px_54px_rgba(0,35,46,0.28)] backdrop-blur-xl md:max-w-[520px] lg:hidden">
            <MiniImage />
            <div>
              <p className="offer-title text-white">Consult First</p>
              <p className="offer-subtitle mt-1 text-white">Treat With Clarity</p>
              <p className="offer-note mt-2 max-w-[190px] text-white/62">
                A focused doctor consultation before your treatment plan.
              </p>
            </div>
          </div>

          {/* <div className="relative hidden lg:block">
            <div className="absolute -bottom-8 -right-10  flex w-[360px] items-center gap-4 rounded-[14px] border border-white/16 bg-[#006E8B]/58 p-3 shadow-[0_24px_70px_rgba(0,35,46,0.28)] backdrop-blur-xl  xl:w-[410px]">
              <MiniImage />
              <div>
                <p className="offer-subtitle text-white">Treat With Clarity</p>
                <p className="offer-subtitle mt-1 text-white/92">Dermatology & Aesthetic Care</p>
                <p className="offer-note mt-3 max-w-[210px] text-white/62">
                  Your skin is assessed carefully before a treatment plan is recommended.
                </p>
              </div>
            </div>
          </div> */}

         
        </div>
      </div>
    </section>
  );
}
