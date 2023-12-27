import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { serverEnv } from "~/env/server.mjs";
import { cn } from "~/lib/cn";
import { routes } from "~/lib/routes";
import ExternalLink from "./external-link";
import SocialLinks from "./social-links";
import { buttonVariants } from "./ui/button";

export default async function Footer() {
  const res = await fetch(`${serverEnv.BASE_URL}/api/get-year`, {
    next: { tags: ["year"] },
  });
  const year =
    process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"
      ? new Date().getFullYear()
      : await res.text();
  const navRoutes = ["home", ...routes];

  return (
    <footer className="bg-indigo-950 text-violet-200">
      <section className="mx-auto grid w-full max-w-screen-lg grid-cols-2 gap-y-6 p-6 text-sm *:flex *:flex-col *:items-start *:gap-3 sm:flex sm:gap-6 sm:py-12">
        <hgroup className="col-span-2 sm:mr-auto sm:w-1/2">
          <h2 className="font-heading text-lg font-medium">
            &copy; Shelly Liu {year}
          </h2>

          <p>
            Shelly Liu is a SoCal-based freelance digital marketing expert
            specialized in helping diverse businesses flourish on social media
            through organic growth and personalized strategy.
          </p>
        </hgroup>

        <div>
          <h3 className="font-heading font-medium">Explore</h3>
          <nav className="flex flex-col items-start gap-1.5">
            {navRoutes.map((route) => (
              <Link
                key={route}
                href={route !== "home" ? `/${route}` : "/"}
                className={cn(
                  buttonVariants({ variant: "secondary-link", size: "sm" }),
                  "p-0",
                )}
              >
                {route}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="font-heading font-medium">Connect</h3>
          <div className="flex flex-col items-start gap-1.5">
            <SocialLinks
              buttonProps={{ variant: "secondary-link" }}
              withLabel
            />
          </div>
        </div>
      </section>

      <section className="border-t border-indigo-900">
        <div className="mx-auto w-full max-w-screen-lg px-6 py-2">
          <ExternalLink
            href="https://mikeploythai.com"
            buttonProps={{ variant: "secondary-link" }}
            className="text-xs no-underline"
          >
            Built by Mike
            <IconArrowUpRight size={14} />
          </ExternalLink>
        </div>
      </section>
    </footer>
  );
}
