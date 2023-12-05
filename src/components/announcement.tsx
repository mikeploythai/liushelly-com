import type { Announcement } from "sanity-studio/types";

import { Fragment } from "react";
import { cn } from "~/lib/cn";

/*
  TODO
  - Modify for prefers-reduced-motion later
*/
export default async function Announcement({
  announcement,
}: {
  announcement: Announcement;
}) {
  return (
    <section
      role="marquee"
      aria-label="Scrolling banner"
      className="group bg-indigo-950 py-3 md:hover:bg-indigo-900"
    >
      <div className="relative mx-auto flex max-w-screen-2xl overflow-x-hidden font-heading font-medium uppercase text-violet-200">
        <AnnouncementText text={announcement.text} type="primary" />
        <AnnouncementText text={announcement.text} type="secondary" />

        <BannerBound side="left" />
        <BannerBound side="right" />
      </div>
    </section>
  );
}

function AnnouncementText({
  text,
  type,
}: {
  text: string;
  type: "primary" | "secondary";
}) {
  return (
    <div
      className={cn(
        "whitespace-nowrap ease-linear duration-60s repeat-infinite md:group-hover:paused",
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

function BannerBound({ side }: { side: "left" | "right" }) {
  return (
    <span
      className={cn(
        "absolute hidden h-full w-1/6 from-indigo-950 to-transparent 2xl:block 2xl:group-hover:from-indigo-900",
        side === "left" && "left-0 bg-gradient-to-r",
        side === "right" && "right-0 bg-gradient-to-l",
      )}
    />
  );
}
