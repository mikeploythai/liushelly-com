import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "src/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium uppercase ring-offset-transparent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default:
          "bg-indigo-950 text-violet-200 hover:bg-indigo-900 focus-visible:bg-indigo-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
        destructive:
          "bg-red-500 text-gray-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
        outline:
          "border border-gray-200 bg-transparent shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        secondary:
          "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        ghost:
          "hover:bg-violet-100 focus-visible:bg-violet-100 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        link: "underline-offset-4 hover:text-indigo-900 hover:underline focus-visible:text-indigo-900 focus-visible:underline dark:text-gray-50",
      },
      size: {
        default: "gap-1 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "gap-1.5 px-6 py-3 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
