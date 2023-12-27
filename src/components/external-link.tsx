import { forwardRef } from "react";
import { cn } from "~/lib/cn";
import { buttonVariants } from "./ui/button";

const ExternalLink = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    target="_blank"
    rel="noreferrer"
    ref={ref}
    className={cn(buttonVariants({ variant: "link" }), "p-0", className)}
    {...props}
  />
));
ExternalLink.displayName = "ExternalLink";

export default ExternalLink;
