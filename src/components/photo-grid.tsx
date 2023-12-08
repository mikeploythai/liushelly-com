import type { SanityImage } from "~/lib/types";

import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { sanityImage } from "sanity-studio/lib/image";
import { cn } from "~/lib/cn";
import { Card, CardContent } from "./ui/card";

interface CardGridProps extends HTMLAttributes<HTMLDivElement> {
  images?: SanityImage[];
  width: number;
  height: number;
}

const PhotoGrid = forwardRef<HTMLDivElement, CardGridProps>(
  ({ images, width, height, className, ...props }, ref) => {
    if (!images?.length) {
      return (
        <p className="border border-dashed border-indigo-950 p-8 md:text-center">
          No images yet!
        </p>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-2 gap-3",
          images.length && "md:grid-cols-4",
          className,
        )}
        {...props}
      >
        {images.map((image) => {
          function ImageWrapper({ children }: { children: React.ReactNode }) {
            if (image.href)
              return (
                <a href={image.href} target="_blank" rel="noreferrer">
                  {children}
                </a>
              );
            else return children;
          }

          return (
            <ImageWrapper key={image._key}>
              <Card className="group flex p-0 md:hover:border-indigo-900 md:hover:text-indigo-900 md:hover:shadow-boxy-hover">
                <CardContent className="w-full overflow-hidden">
                  <Image
                    src={
                      image.asset
                        ? sanityImage(image).url()
                        : `https://placekitten.com/${width}/${height}`
                    }
                    alt={image.alt ?? "Placekitten"}
                    placeholder={image.asset ? "blur" : "empty"}
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
