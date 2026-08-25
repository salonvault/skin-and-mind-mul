import { Poppins , Crushed} from "next/font/google";
import localFont from "next/font/local";


export const body_font = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const dm_mono = Poppins({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const heading_font = Crushed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400",],
});

// export const heading_font = localFont({
//   src: "./Seraphine.otf",
//   variable: "--font-heading",
//   weight: "400",
//   display: "swap",
// });

export const heading_font_2 = localFont({
  src: "./Philosopher-Regular.ttf",
  variable: "--font-heading_2",
  weight: "400",
  display: "swap",
});