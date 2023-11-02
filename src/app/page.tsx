import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import { Fragment } from "react";
import { buttonVariants } from "./_components/ui/button";

export default function HomePage() {
  return (
    <main className="flex-1 duration-500 ease-in-out animate-in fade-in-0 slide-in-from-bottom-6">
      <section className="mx-auto flex max-w-screen-lg items-center gap-6 p-6">
        <div className="space-y-6">
          <h1 className="ring-offset- font-heading text-4xl font-medium">
            Let me help your business flourish through organic social media
            growth.
          </h1>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Book a discovery call
            <IconArrowUpRight size={20} />
          </a>
        </div>

        <div className="max-w-fit border border-current shadow-boxy shadow-current">
          <Image
            src=""
            alt=""
            width={288}
            height={432}
            className="h-full bg-violet-50"
          />
        </div>
      </section>

      <section
        role="marquee"
        aria-label="Scrolling banner"
        className="group bg-indigo-950 py-3"
      >
        <div className="relative mx-auto flex max-w-screen-2xl overflow-x-hidden font-heading font-medium uppercase text-violet-200">
          <div className="whitespace-nowrap ease-linear animate-out slide-out-to-left duration-60s repeat-infinite group-hover:paused">
            {Array(5)
              .fill("Bookings for winter 2023 are now open")
              .map((text, key) => (
                <Fragment key={key}>
                  <span className="mx-3">{text}</span>
                  <span className="mx-3">✨</span>
                </Fragment>
              ))}
          </div>

          <div className="absolute whitespace-nowrap ease-linear animate-in slide-in-from-right duration-60s repeat-infinite group-hover:paused">
            {Array(5)
              .fill("Bookings for winter 2023 are now open")
              .map((text, key) => (
                <Fragment key={key}>
                  <span className="mx-3">{text}</span>
                  <span className="mx-3">✨</span>
                </Fragment>
              ))}
          </div>

          <span className="absolute left-0 hidden h-full w-1/6 bg-gradient-to-r from-indigo-950 to-transparent 2xl:block" />
          <span className="absolute right-0 hidden h-full w-1/6 bg-gradient-to-l from-indigo-950 to-transparent 2xl:block" />
        </div>
      </section>
    </main>
  );
}
