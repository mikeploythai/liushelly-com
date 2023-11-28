import "~/styles/globals.css";

import type { Metadata } from "next";

import { Montserrat, Unbounded } from "next/font/google";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { Toaster } from "~/components/ui/toaster";
import { cn } from "~/lib/cn";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Shelly Liu",
    default:
      "Shelly Liu | Social Media Manager, Strategist, and Content Writer",
  },
  description:
    "Helping your business flourish through organic social media growth.",
  openGraph: {
    title: "Shelly Liu | Social Media Manager, Strategist, and Content Writer",
    description:
      "Helping your business flourish through organic social media growth.",
    url: "https://liushelly.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(unbounded.variable, montserrat.variable)}>
      <body className="flex min-h-screen flex-col bg-violet-200 font-body text-indigo-950 antialiased [text-wrap:pretty] selection:bg-indigo-600 selection:text-white">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
