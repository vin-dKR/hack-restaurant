import type { Metadata } from "next";
import { Raleway, Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});


export const metadata: Metadata = {
  title: "Modern Restaurant & Cafe",
  description: "Experience culinary excellence in an atmosphere of elegance and comfort",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${merriweather.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
