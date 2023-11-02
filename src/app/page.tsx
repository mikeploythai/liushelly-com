import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Marquee from "./_components/marquee";
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

        <figure className="mb-2 mr-2 max-w-fit border border-indigo-950 shadow-boxy shadow-indigo-950 transition duration-300 hover:border-indigo-900 hover:shadow-boxy-hover hover:shadow-indigo-900">
          <Image
            src=""
            alt=""
            width={288}
            height={432}
            className="h-full bg-violet-50"
          />
        </figure>
      </section>

      <Marquee />
    </main>
  );
}
