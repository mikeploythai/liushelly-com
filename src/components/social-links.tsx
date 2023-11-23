import { groq, type SanityDocument } from "next-sanity";

import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandX,
  IconBrandYoutube,
  IconLink,
  type TablerIconsProps,
} from "@tabler/icons-react";
import { sanityFetch } from "sanity-studio/lib/fetch";
import ExternalLink from "./external-link";
import { buttonVariants } from "./ui/button";

interface SocialLink extends SanityDocument {
  name: string;
  href: string;
}

export default async function SocialLinks() {
  const socialLinks = await sanityFetch<SocialLink[]>({
    query,
    tags: ["socials"],
  });

  if (!socialLinks) return;

  return (
    <>
      {socialLinks.map(({ name, href }) => {
        const Icon = icons[name.toLowerCase()] ?? IconLink;

        return (
          <ExternalLink
            key={name}
            href={href}
            className={buttonVariants({
              variant: "secondary",
              size: "icon",
            })}
          >
            <Icon size={20} />
            <span className="sr-only">Link to Shelly&apos;s {name} page</span>
          </ExternalLink>
        );
      })}
    </>
  );
}

const query = groq`
*[_type == "socials"] | order(orderRank) {
  ...,
  'href': reference->href
}`;

type Icons = Record<string, (props: TablerIconsProps) => JSX.Element>;

const icons: Icons = {
  instagram: IconBrandInstagram,
  x: IconBrandX,
  twitter: IconBrandTwitter,
  linkedin: IconBrandLinkedin,
  pinterest: IconBrandPinterest,
  tiktok: IconBrandTiktok,
  youtube: IconBrandYoutube,
};
