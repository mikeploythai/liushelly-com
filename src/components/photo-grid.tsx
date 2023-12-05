import type { SanityImage } from "~/lib/types";

import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { sanityImage } from "sanity-studio/lib/image";
import { cn } from "~/lib/cn";
import ExternalLink from "./external-link";
import { Card, CardContent } from "./ui/card";

interface CardGridProps extends HTMLAttributes<HTMLDivElement> {
  images: SanityImage[];
  width: number;
  height: number;
}

const PhotoGrid = forwardRef<HTMLDivElement, CardGridProps>(
  ({ images, width, height, className, ...props }, ref) => {
    if (!images) return;

    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-2 gap-3 md:grid-cols-4", className)}
        {...props}
      >
        {images.map((image) => {
          function ImageWrapper({ children }: { children: React.ReactNode }) {
            if (image.href)
              return <ExternalLink href={image.href}>{children}</ExternalLink>;
            else return children;
          }

          return (
            <ImageWrapper key={image._key}>
              <Card className="group flex p-0 md:hover:border-indigo-900 md:hover:shadow-boxy-hover md:hover:!shadow-indigo-900">
                <CardContent className="w-full overflow-hidden">
                  <Image
                    src={sanityImage(image).url()}
                    alt={image.alt}
                    placeholder="blur"
                    blurDataURL={image.lqip}
                    width={width}
                    height={height}
                    className="h-full w-full bg-white object-cover transition duration-300 ease-in-out md:group-hover:scale-105"
                  />
                </CardContent>
              </Card>
            </ImageWrapper>
          );
        })}
      </div>
    );
  },
);
PhotoGrid.displayName = "PhotoGrid";

export default PhotoGrid;
