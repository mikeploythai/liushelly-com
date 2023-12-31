import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Shelly Liu | Social Media Manager, Strategist, and Content Writer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const unbounded = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/unbounded@latest/latin-700-normal.ttf",
  );
  const montserrat = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/latin-600-normal.ttf",
  );

  const headingFont = await unbounded.arrayBuffer();
  const bodyFont = await montserrat.arrayBuffer();

  return new ImageResponse(
    (
      <div
        style={{ fontFamily: "'Montserrat'" }}
        tw="flex h-full w-full flex-col items-center justify-center bg-violet-200 p-8 text-2xl text-indigo-900"
      >
        <h1 style={{ fontFamily: "'Unbounded'" }} tw="text-6xl">
          Shelly Liu
        </h1>

        <p>Social Media Manager, Strategist, and Content Writer</p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Unbounded",
          data: headingFont,
          style: "normal",
        },
        {
          name: "Montserrat",
          data: bodyFont,
          style: "normal",
        },
      ],
    },
  );
}
