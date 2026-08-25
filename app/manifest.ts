import type { MetadataRoute } from "next";
import { siteIdentity } from "@/configurations";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteIdentity.brandName,
    short_name: siteIdentity.brandName,
    description: `Dermatologist-led skin, hair, laser, and aesthetic care in ${siteIdentity.city}.`,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F4F7F8",
    theme_color: "#009EC8",
    icons: [{ src: "/assets/logo-2.png", sizes: "1536x1024", type: "image/png" }],
  };
}
