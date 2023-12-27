import { forwardRef } from "react";
import { cn } from "~/lib/cn";
import { buttonVariants, type ButtonProps } from "./ui/button";

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  buttonProps?: ButtonProps;
}

const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ className, buttonProps = { variant: "link" }, ...props }, ref) => (
    <a
      target="_blank"
      rel="noreferrer"
      ref={ref}
      className={cn(
        buttonVariants({ variant: buttonProps.variant }),
        "p-0",
        className,
      )}
      {...props}
    />
  ),
);
ExternalLink.displayName = "ExternalLink";

export default ExternalLink;
