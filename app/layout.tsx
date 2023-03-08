import { Analytics } from "@vercel/analytics/react";
import Client from "./client";

export const metadata = {
  title: "Shelly Liu, Social Media Manager",
  description:
    "Shelly Liu is a professional social media manager and digital marketing expert based in southern California.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Client children={children} />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
