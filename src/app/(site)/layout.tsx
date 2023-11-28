import "~/styles/globals.css";

import type { Metadata } from "next";

import { IconArrowUpRight, IconMenu } from "@tabler/icons-react";
import { Montserrat, Unbounded } from "next/font/google";
import Link from "next/link";
import ExternalLink from "~/components/external-link";
import NavbarItems from "~/components/navbar-items";
import SocialLinks from "~/components/social-links";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(unbounded.variable, montserrat.variable)}>
      <body className="flex min-h-screen flex-col bg-violet-200 font-body text-indigo-950 antialiased [text-wrap:pretty] selection:bg-indigo-600 selection:text-white">
        <noscript className="bg-indigo-950 p-2 text-center text-sm font-medium text-violet-200">
          Please enable JavaScript for the best experience.
        </noscript>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-b-indigo-950 bg-violet-200">
      <div className="mx-auto flex max-w-screen-2xl justify-between">
        <Link
          href="/"
          className={buttonVariants({
            size: "lg",
            variant: "ghost",
            class: "font-heading capitalize",
          })}
        >
          Shelly Liu
        </Link>

        <NavbarItems isDrawer={false} />

        <Sheet>
          <SheetTrigger className="block sm:hidden" asChild>
            <Button>
              <IconMenu />
              <span className="sr-only">Navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>

            <NavbarItems isDrawer={true} />

            <SheetFooter>
              <SocialLinks />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="mx-auto flex max-w-screen-md flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center md:py-12">
        <div className="space-y-1.5">
          <p className="font-heading text-lg font-medium">
            &copy; Shelly Liu {year}
          </p>

          <ExternalLink
            href="https://mikeploythai.com"
            className="gap-0.5 text-xs"
          >
            Built by Mike
            <IconArrowUpRight size={14} />
          </ExternalLink>
        </div>

        <div className="flex gap-1.5">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
