
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
  brandName: "Skin & Mind wellness clinic",
  location: "Danish street office 1 chowk, Bosan Rd, Bahadurpur, Multan, 60000, Pakistan",
  city: "Multan",
  region: "Punjab",
  country: "Pakistan",
  countryCode: "PK",
  phone: "+923361416666",
  whatsapp: "+923361416666",
  instagram: "",
  facebook: "",
  baseUrl: "https://skin-and-mind-mul.vercel.app",
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
