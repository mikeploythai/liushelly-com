import "~/styles/globals.css";

import { Montserrat, Unbounded } from "next/font/google";
import { cn } from "~/lib/cn";

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
      <body className="min-h-screen bg-violet-200 font-body text-indigo-950 antialiased">
        {children}
      </body>
    </html>
  );
}
