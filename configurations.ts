export type SiteConfiguration = {
  brandName: string;
  location: string;
  city: string;
  region: string;
  country: string;
  countryCode: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  baseUrl: string;
};

export const configurations: SiteConfiguration = {
  brandName: "Asthetics",
  location: "Hospital Road, Highway Officers Colony, Civil Lines",
  city: "Gujranwala",
  region: "Punjab",
  country: "Pakistan",
  countryCode: "PK",
  phone: "+92 321 4089006",
  whatsapp: "+92 321 4089006",
  instagram: "https://www.instagram.com/dermotique_skin_laser_centre/",
  facebook: "",
  baseUrl: "https://dermotique.vercel.app",
};

const digitsOnly = (value: string) => value.replace(/\D/g, "");
const phoneNumber = configurations.phone.trim();
const baseUrl = configurations.baseUrl.replace(/\/+$/, "");

export const siteIdentity = {
  ...configurations,
  baseUrl,
  fullLocation: [configurations.location, configurations.city]
    .filter(Boolean)
    .join(", "),
  phoneHref: `tel:${phoneNumber.startsWith("+") ? "+" : ""}${digitsOnly(phoneNumber)}`,
  whatsappHref: `https://wa.me/${digitsOnly(configurations.whatsapp)}`,
  googleReviewsHref: `https://www.google.com/search?q=${encodeURIComponent(
    `${configurations.brandName} ${configurations.city} reviews`,
  )}`,
};
