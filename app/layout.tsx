import type { Metadata } from "next";

import localFont from "next/font/local";

import FooterSection from "@/components/FooterSection";

import Nav from "@/components/Nav";

import "./globals.css";

const helveticaThin = localFont({
  src: "./fonts/HelveticaNeueThin.otf",
  variable: "--font-helvetica-thin",
});

const helveticaBlack = localFont({
  src: "./fonts/HelveticaNeueBlack.otf",
  variable: "--font-helvetica-black",
});

const helveticaMedium = localFont({
  src: "./fonts/HelveticaNeueMedium.otf",
  variable: "--font-helvetica-medium",
});

const helveticaBold = localFont({
  src: "./fonts/HelveticaNeueBold.otf",
  variable: "--font-helvetica-bold",
});

const helveticaLight = localFont({
  src: "./fonts/HelveticaNeueLight.otf",
  variable: "--font-helvetica-light",
});

export const metadata: Metadata = {
  title: "Nike store",
  description: "A store where you can buy all nike shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaBlack.variable}
           ${helveticaThin.variable}
           ${helveticaMedium.variable}
           ${helveticaBold.variable}
           ${helveticaLight.variable}
            antialiased`}
      >
        <Nav />
        <main className="w-full">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
