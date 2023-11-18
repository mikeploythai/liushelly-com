import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "~/lib/cn";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface CardGridProps extends HTMLAttributes<HTMLDivElement> {
  list: {
    name: string;
    link: string;
  }[];
}

const CardGrid = forwardRef<HTMLDivElement, CardGridProps>(
  ({ list, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("grid gap-3 sm:grid-cols-2", className)}
      {...props}
    >
      {list.map(({ name, link }, i) => (
        <Card
          key={i}
          className={cn(
            list.length % 2 &&
              i === list.length - 1 &&
              "sm:col-span-2 md:col-span-1",
          )}
        >
          <CardContent className="relative h-32 sm:h-40">
            <Image
              src=""
              alt=""
              className="border border-indigo-950 bg-white"
              fill
            />
          </CardContent>

          <CardFooter>
            <Link href={link} className={buttonVariants({ class: "w-full" })}>
              <span className="truncate">{name}</span>
              <IconChevronRight size={18} className="ml-auto" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
);
CardGrid.displayName = "CardGrid";

export default CardGrid;
