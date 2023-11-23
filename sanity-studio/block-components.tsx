import type {
  PortableTextMarkComponentProps,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import type { SanityDocument } from "next-sanity";
import type { SanityImage } from "sanity-studio/types";

import {
  getImageDimensions,
  type SanityImageSource,
} from "@sanity/asset-utils";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import { sanityImage } from "sanity-studio/lib/image";
import ExternalLink from "~/components/external-link";

export const BlockImage = ({
  value,
}: PortableTextTypeComponentProps<SanityImage>) => {
  const { width, height } = getImageDimensions(value as SanityImageSource);

  function ImageWrapper({ children }: { children: React.ReactNode }) {
    if (value.href)
      return <ExternalLink href={value.href}>{children}</ExternalLink>;
    else return children;
  }

  return (
    <ImageWrapper>
      <Image
        src={sanityImage(value).format("webp").url()}
        alt={value.alt}
        placeholder="blur"
        blurDataURL={value.lqip}
        width={width}
        height={height}
        className="border border-indigo-950"
      />
    </ImageWrapper>
  );
};

interface BlockLink extends SanityDocument {
  href: string;
}

export const BlockLink = ({
  children,
  value,
}: PortableTextMarkComponentProps<BlockLink>) => (
  <ExternalLink href={value?.href}>
    <span className="line-clamp-1">{children}</span>
    <IconArrowUpRight size={14} />
  </ExternalLink>
);
