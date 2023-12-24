import "../globals.css";

import type { Metadata } from "next";

import { Montserrat, Unbounded } from "next/font/google";
import { Toaster } from "sonner";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { serverEnv } from "~/env/server.mjs";
import { cn } from "~/lib/cn";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

const title =
  "Shelly Liu | Social Media Manager, Strategist, and Content Writer";
const description =
  "Helping your business flourish through organic social media growth.";

export const metadata: Metadata = {
  title: {
    template: "%s | Shelly Liu",
    default: title,
  },
  description,
  metadataBase: new URL(serverEnv.BASE_URL),
  openGraph: {
    title,
    description,
    url: serverEnv.BASE_URL,
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
      <body className="flex min-h-screen flex-col text-pretty bg-violet-200 font-body text-indigo-950 antialiased selection:bg-indigo-600 selection:text-white">
        <Navbar />
        {children}
        <Footer />
        <Toaster closeButton richColors />
      </body>
    </html>
  );
}
