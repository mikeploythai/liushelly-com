"use client";

import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/cn";
import { buttonVariants } from "./ui/button";

export default function NavbarItems({ isDrawer }: { isDrawer: boolean }) {
  const pathname = usePathname();
  const routes: string[] = ["about", "services", "portfolio", "contact"];

  return (
    <nav
      className={cn(
        "my-auto",
        !isDrawer && "hidden pr-1.5 sm:block",
        isDrawer && "flex flex-col",
      )}
    >
      {routes.map((route) => (
        <Link
          key={route}
          href={`/${route}`}
          className={cn(
            buttonVariants({ size: !isDrawer ? "default" : "lg" }),
            pathname === `/${route}` && "bg-indigo-900",
            isDrawer && "justify-start",
          )}
        >
          {route}
          <IconChevronRight
            size={20}
            className={!isDrawer ? "hidden" : "block"}
          />
        </Link>
      ))}
    </nav>
  );
}
