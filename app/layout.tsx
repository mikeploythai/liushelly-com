import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "HOME | Shelly Liu, Social Media Manager",
  description:
    "Shelly Liu is a professional social media manager and digital marketing expert based in southern California.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
