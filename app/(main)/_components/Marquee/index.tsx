import { Marquee } from "@/lib/types";
import MarqueeText from "./MarqueeText";

export default function Marquee({ data }: { data: Marquee[] }) {
  return (
    <section className="bg-brand-dark">
      <div className="group flex relative max-w-screen-lg w-full mx-auto p-4 gap-2 overflow-hidden">
        <MarqueeText data={data} />
        <MarqueeText data={data} />
        <span className="absolute top-0 left-0 h-full w-1/5 bg-gradient-to-r from-brand-dark to-transparent" />
        <span className="absolute top-0 right-0 h-full w-1/5 bg-gradient-to-l from-brand-dark to-transparent" />
      </div>
    </section>
  );
}
