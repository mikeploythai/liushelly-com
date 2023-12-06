import type { SocialLink } from "~/lib/types";

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
import ExternalLink from "../external-link";
import { buttonVariants } from "../ui/button";

export default function SocialLinks({ data }: { data: SocialLink[] }) {
  if (!data) return;

  return (
    <>
      {data.map(({ name, href }) => {
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
