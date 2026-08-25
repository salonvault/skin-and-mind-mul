import { FaWhatsapp } from "react-icons/fa6";
import { siteIdentity } from "@/configurations";

export default function WhatsAppFloat() {
  return (
    <a
      href={siteIdentity.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteIdentity.brandName} on WhatsApp`}
      className="whatsapp-float"
    >
      <span className="whatsapp-wave" />
      <span className="whatsapp-wave whatsapp-wave-delay" />
      <FaWhatsapp className="relative z-10 h-6 w-6 text-white md:h-7 md:w-7" />
    </a>
  );
}
