
import "./globals.css";
import { body_font, heading_font, heading_font_2, dm_mono } from "./lib/fonts"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { seoMetadata } from "./lib/config";
import { cn } from "@/lib/utils";

export const metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(body_font.variable, heading_font.variable, heading_font_2.variable, dm_mono.variable)}>
      <body className={`${body_font.variable} ${heading_font.variable} ${heading_font_2.variable} ${dm_mono.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
