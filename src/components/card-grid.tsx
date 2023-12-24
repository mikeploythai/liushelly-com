import type { ListItem } from "~/lib/types";

import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, type HTMLAttributes } from "react";
import { sanityImage } from "sanity-studio/lib/image";
import { cn } from "~/lib/cn";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface CardGridProps extends HTMLAttributes<HTMLDivElement> {
  list?: ListItem[];
}

const CardGrid = forwardRef<HTMLDivElement, CardGridProps>(
  ({ list, className, ...props }, ref) => {
    if (!list?.length) {
      return (
        <p className="border border-dashed border-indigo-950 p-8 md:text-center">
          No content yet!
        </p>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("grid gap-3 sm:grid-cols-2", className)}
        {...props}
      >
        {list.map(({ name, image, slug, _type, _id }, i) => (
          <Card
            key={_id}
            className={cn(
              list.length % 2 &&
                i === list.length - 1 &&
                "sm:col-span-2 md:col-span-1",
            )}
          >
            <CardContent className="relative h-32 sm:h-40">
              <Image
                src={
                  image?.asset
                    ? sanityImage(image).url()
                    : "https://placekitten.com/160/280"
                }
                alt={name ?? "Placekitten"}
                placeholder={image?.asset ? "blur" : "empty"}
                blurDataURL={image?.lqip}
                className="rounded-sm border border-indigo-950  bg-white object-cover"
                fill
              />
            </CardContent>

            <CardFooter>
              <Link
                href={`/${_type}/${slug.current}`}
                className={buttonVariants({ class: "w-full" })}
              >
                <span className="truncate">{name ?? "Add a name"}</span>
                <IconChevronRight size={18} className="ml-auto" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  },
);
CardGrid.displayName = "CardGrid";

export default CardGrid;
