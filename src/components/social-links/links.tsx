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
import { cn } from "~/lib/cn";
import ExternalLink from "../external-link";
import { buttonVariants, type ButtonProps } from "../ui/button";

export default function SocialLinks({
  data,
  buttonProps,
  withLabel,
}: {
  data: SocialLink[];
  buttonProps?: ButtonProps;
  withLabel?: boolean;
}) {
  if (!data) return;

  return (
    <>
      {data.map(({ name, href }) => {
        const Icon = icons[name.toLowerCase()] ?? IconLink;

        return (
          <ExternalLink
            key={name}
            href={href}
            className={cn(
              buttonVariants({
                variant: buttonProps?.variant,
                size: !withLabel ? "icon" : "default",
              }),
              withLabel && "p-0",
            )}
          >
            <Icon size={!withLabel ? 24 : 16} />
            <span className={cn(!withLabel && "sr-only")}>{name}</span>
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
