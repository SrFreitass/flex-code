import type { Metadata } from "next";
import { Inter, Onest, Outfit } from 'next/font/google';
import localFont from "next/font/local";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const degularFont = localFont({
  src: "./fonts/Degular.woff",
  weight: "600",
  variable: "--font-degular",
});

const interFont = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

const onsetFont = Onest({
  variable: "--font-onest",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

const segoeUIFont = localFont({
  src: "./fonts/segoe-ui.woff",
  weight: "100 900",
  variable: "--font-segoe-ui",
});



export const metadata: Metadata = {
  title: "Flex Code",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${degularFont.variable}
          ${interFont.variable}
          ${onsetFont.variable}
          ${segoeUIFont.variable}
          ${outfitFont.variable}
          antialiased
        `}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
