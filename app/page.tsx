
import Hero from "@/components/Home/Hero"
import ExperienceSection from "@/components/Home/ExperienceSection"
import ExpertiseStripSection from "@/components/Home/ExpertiseStripSection"
import StepsSection from "@/components/Home/StepsSection"
import ProcessFaqSection from "@/components/Home/ProcessFaqSection"
import TestimonialsSection from "@/components/Home/TestimonialsSection"
import GallerySection from "@/components/Home/GallerySection"
import ServicesSection from "@/components/Home/ServicesSection"
import CarePathwaysSection from "@/components/Home/CarePathwaysSection"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import WhatsAppFloat from "@/components/Layout/WhatsAppFloat"
import { siteIdentity } from "@/configurations"

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: siteIdentity.brandName,
  description: `Dermatologist-led skin, hair, laser, and aesthetic care in ${siteIdentity.city}.`,
  image: `${siteIdentity.baseUrl}/assets/og-image.png`,
  url: siteIdentity.baseUrl,
  telephone: siteIdentity.phone,
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteIdentity.location,
    addressLocality: siteIdentity.city,
    addressRegion: siteIdentity.region,
    addressCountry: siteIdentity.countryCode,
  },
  sameAs: [siteIdentity.instagram, siteIdentity.facebook].filter(Boolean),
  availableService: [
    "Dermatology consultation",
    "Acne and acne scar treatment",
    "Pigmentation and melasma care",
    "Laser hair removal",
    "HydraFacial",
    "Hair loss and PRP treatment",
    "Microneedling",
    "Mole and skin tag removal",
  ],
};


function page() {
  return (
    <div className="atelier-shell min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <ExpertiseStripSection />
        <CarePathwaysSection />
        <ExperienceSection />
        <ServicesSection />
        <GallerySection />
        <StepsSection />
        <ProcessFaqSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default page
