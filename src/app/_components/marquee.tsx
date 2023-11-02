import { Fragment } from "react";
import { cn } from "~/lib/cn";

export default function Marquee() {
  const text = "Bookings for winter 2023 are now open";

  return (
    <section
      role="marquee"
      aria-label="Scrolling banner"
      className="group bg-indigo-950 py-3 hover:bg-indigo-900"
    >
      <div className="relative mx-auto flex max-w-screen-2xl overflow-x-hidden font-heading font-medium uppercase text-violet-200">
        <MarqueeText text={text} type="primary" />
        <MarqueeText text={text} type="secondary" />

        <MarqueeBound side="left" />
        <MarqueeBound side="right" />
      </div>
    </section>
  );
}

function MarqueeText({
  text,
  type,
}: {
  text: string;
  type: "primary" | "secondary";
}) {
  return (
    <div
      className={cn(
        "whitespace-nowrap ease-linear duration-60s repeat-infinite group-hover:paused",
        type === "primary" && "animate-out slide-out-to-left",
        type === "secondary" && "absolute animate-in slide-in-from-right",
      )}
    >
      {Array(5)
        .fill(text)
        .map((text, key) => (
          <Fragment key={key}>
            <span className="mx-3">{text}</span>
            <span className="mx-3">✨</span>
          </Fragment>
        ))}
    </div>
  );
}

function MarqueeBound({ side }: { side: "left" | "right" }) {
  return (
    <span
      className={cn(
        "absolute hidden h-full w-1/6 from-indigo-950 to-transparent group-hover:from-indigo-900 2xl:block",
        side === "left" && "left-0 bg-gradient-to-r",
        side === "right" && "right-0 bg-gradient-to-l",
      )}
    />
  );
}
