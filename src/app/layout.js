/* eslint-disable new-cap */
/* eslint-disable camelcase */
import "./globals.css";
import { Urbanist, Istok_Web } from "next/font/google";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const istok = Istok_Web({
  subsets: ["latin"],
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
      <body
        className={`${urbanist.className} ${istok.variable} overscroll-none flex flex-col min-h-screen`}
      >
        <div className="py-5">
          <Navigation />
        </div>
        {children}
        <div className="p-4 flex-grow" />
        <Footer />
      </body>
    </html>
  );
}
