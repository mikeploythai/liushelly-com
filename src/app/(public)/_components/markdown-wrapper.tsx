import { forwardRef } from "react";
import { cn } from "~/lib/cn";

interface MarkdownHTMLAttributes extends React.HTMLAttributes<HTMLDivElement> {
  theme?: "default" | "secondary";
}

const MarkdownWrapper = forwardRef<HTMLDivElement, MarkdownHTMLAttributes>(
  ({ theme = "default", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "prose prose-sm max-w-none space-y-6 md:prose-base prose-headings:font-heading prose-headings:font-medium prose-a:normal-case prose-blockquote:border-none prose-blockquote:p-0 prose-blockquote:font-normal",
        theme === "default" &&
          "text-indigo-950 marker:text-indigo-950 prose-headings:text-indigo-950 prose-a:text-indigo-950 prose-blockquote:text-indigo-950",
        theme === "secondary" &&
          "text-violet-200 marker:text-violet-200 prose-headings:text-violet-200 prose-a:text-violet-200 prose-blockquote:text-violet-200",
        className,
      )}
      {...props}
    />
  ),
);
MarkdownWrapper.displayName = "MarkdownWrapper";

export default MarkdownWrapper;
