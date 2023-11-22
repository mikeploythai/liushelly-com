import type { SanityImage } from "sanity-studio/types";

import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { sanityImage } from "sanity-studio/lib/image";
import { cn } from "~/lib/cn";
import { Card, CardContent } from "./ui/card";

interface CardGridProps extends HTMLAttributes<HTMLDivElement> {
  images: SanityImage[];
  width: number;
  height: number;
}

const PhotoGrid = forwardRef<HTMLDivElement, CardGridProps>(
  ({ images, width, height, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("grid grid-cols-2 gap-3 md:grid-cols-4", className)}
      {...props}
    >
      {images.map((image, key) => (
        <Card
          key={key}
          className="group p-0 md:hover:border-indigo-900 md:hover:shadow-boxy-hover md:hover:!shadow-indigo-900"
        >
          <CardContent className="h-full overflow-hidden">
            <Image
              src={sanityImage(image).format("webp").url()}
              alt=""
              placeholder="blur"
              blurDataURL={image.lqip}
              width={width}
              height={height}
              className="h-full bg-white object-cover transition duration-300 ease-in-out md:group-hover:scale-105"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  ),
);
PhotoGrid.displayName = "PhotoGrid";

export default PhotoGrid;
