import Footer from "@/components/navigation/Footer";
import NavBar from "@/components/navigation/NavBar";
import NavDrawer from "@/components/navigation/NavBar/NavDrawer";
import sanity from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { Montserrat } from "next/font/google";
import "./globals.css";

const bodyFont = Montserrat({ subsets: ["latin"] });
const query = groq`*[_type=="socials"] | order(orderRank)`;

export const metadata = {
  title: {
    template: "%s | Shelly Liu, Social Media Manager",
    default: "Shelly Liu, Social Media Manager",
  },
  description:
    "Shelly Liu is a social media manager based in southern California.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialData = await sanity.fetch(query);

  return (
    <html lang="en">
      <body className={`${bodyFont.className} flex flex-col min-h-screen`}>
        <NavBar>
          <NavDrawer socialData={socialData} />
        </NavBar>
        {children}
        <Footer socialData={socialData} />
      </body>
    </html>
  );
}
