/* eslint-disable new-cap */
/* eslint-disable camelcase */
import Navigation from "@/components/Navigation";
import "./globals.css";
import { Urbanist, Istok_Web } from "next/font/google";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const istok = Istok_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-istok",
});

export const metadata = {
  title: "RISHI at UCR",
  description: "Project RISHI at UCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} ${istok.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
