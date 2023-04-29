import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import "./globals.css";

const bodyFont = Montserrat({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: {
    template: "%s | Shelly Liu, Social Media Manager",
    default: "Shelly Liu, Social Media Manager",
  },
  description:
    "Shelly Liu is a social media manager based in southern California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
