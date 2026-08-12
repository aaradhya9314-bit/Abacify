import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { StickyEnquire } from "@/components/sticky-enquire";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

const SITE_URL = "https://www.abacify.com";
const SITE_TITLE = "Abacify | Abacus, Chess, AI & Robotics, Maths & Science";
const SITE_DESCRIPTION =
  "Abacify offers structured learning programs in Abacus, Chess, AI & Robotics, and Maths & Science, with online and offline formats. Send an enquiry to learn more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Abacus classes",
    "Chess classes",
    "AI and robotics for kids",
    "Maths and Science tuition",
    "Abacify",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Abacify",
    type: "website",
    images: [{ url: "/abacify_logo.png" }],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/abacify_logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} dark`}>
      <body className="min-h-screen bg-midnight text-white antialiased">
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
        <StickyEnquire />
      </body>
    </html>
  );
}
