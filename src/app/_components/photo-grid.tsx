import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "~/lib/cn";
import { Card, CardContent } from "./ui/card";

interface CardGridProps extends HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
}

const PhotoGrid = forwardRef<HTMLDivElement, CardGridProps>(
  ({ width, height, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("grid grid-cols-2 gap-3 md:grid-cols-4", className)}
      {...props}
    >
      {Array(4)
        .fill(null)
        .map((_, key) => (
          <Card
            key={key}
            className="p-0 md:hover:border-indigo-900 md:hover:shadow-boxy-hover md:hover:!shadow-indigo-900"
          >
            <CardContent>
              <Image
                src=""
                alt=""
                width={width}
                height={height}
                className="h-full bg-white"
              />
            </CardContent>
          </Card>
        ))}
    </div>
  ),
);
PhotoGrid.displayName = "PhotoGrid";

export default PhotoGrid;
