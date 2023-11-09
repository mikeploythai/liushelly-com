import "~/styles/globals.css";

import { IconArrowUpRight, IconLink } from "@tabler/icons-react";
import { Montserrat, Unbounded } from "next/font/google";
import Link from "next/link";
import { cn } from "~/lib/cn";
import { socials } from "~/lib/fake-db";
import NavbarItems from "./_components/navbar-items";
import { buttonVariants } from "./_components/ui/button";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(unbounded.variable, montserrat.variable)}>
      <body className="min-h-screen bg-violet-200 font-body text-indigo-950 antialiased [text-wrap:pretty]">
        <Navbar />
        {children}
        <Footer />
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

        <NavbarItems />
      </div>
    </header>
  );
}

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="border-b-8 border-b-indigo-950">
      <div className="mx-auto flex max-w-screen-md flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center md:py-12">
        <div className="space-y-1.5">
          <p className="font-heading text-lg font-medium">
            &copy; Shelly Liu {year}
          </p>

          <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "link" }), "p-0 text-xs")}
            >
              Privacy
            </Link>

            <span className="hidden sm:block">&middot;</span>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "link" }), "p-0 text-xs")}
            >
              Built by Mike
              <IconArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="flex gap-1.5">
          {socials.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "icon" })}
            >
              <IconLink size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
