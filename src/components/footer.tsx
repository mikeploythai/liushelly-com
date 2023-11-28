import { IconArrowUpRight } from "@tabler/icons-react";
import { sanityFetch } from "sanity-studio/lib/fetch";
import ExternalLink from "./external-link";
import SocialLinks from "./social-links";

export default async function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const mikeLink = await sanityFetch<{ href: string }>({
    query: `*[_type == "links" && name == "Mike's website"][0]`,
    tags: ["links"],
  });

  return (
    <footer>
      <div className="mx-auto flex max-w-screen-md flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center md:py-12">
        <div className="space-y-1.5">
          <p className="font-heading text-lg font-medium">
            &copy; Shelly Liu {year}
          </p>

          <ExternalLink href={mikeLink.href} className="gap-0.5 text-xs">
            Built by Mike
            <IconArrowUpRight size={14} />
          </ExternalLink>
        </div>

        <div className="flex gap-1.5">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
