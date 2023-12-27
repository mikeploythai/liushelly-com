import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "src/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-sm font-medium uppercase ring-offset-transparent transition duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-indigo-950 text-violet-200 hover:bg-indigo-900 hover:text-violet-200 focus-visible:bg-indigo-900 focus-visible:text-violet-200",
        destructive: "bg-red-500 text-gray-50 shadow-sm hover:bg-red-500/90",
        outline:
          "border border-indigo-950 bg-transparent hover:bg-violet-100 focus-visible:bg-violet-100",
        secondary:
          "bg-violet-200 text-indigo-950 hover:bg-violet-100 hover:text-indigo-950 focus-visible:bg-violet-100 focus-visible:text-indigo-950",
        ghost:
          "hover:bg-violet-100 hover:text-indigo-900 focus-visible:bg-violet-100 focus-visible:text-indigo-900",
        link: "font-semibold underline underline-offset-4 hover:text-indigo-800 focus-visible:text-indigo-800",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 text-sm",
        lg: "px-6 py-3 text-lg",
        icon: "h-10 w-10",
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
