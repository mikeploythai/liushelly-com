import { forwardRef } from "react";
import { cn } from "~/lib/cn";

const PageWrapper = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={cn(
      "flex-1 duration-500 ease-in-out animate-in fade-in-0 slide-in-from-bottom-6",
      className,
    )}
    {...props}
  />
));
PageWrapper.displayName = "PageWrapper";

export default PageWrapper;
