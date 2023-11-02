"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/cn";
import { buttonVariants } from "./ui/button";

export default function NavbarItems() {
  const pathname = usePathname();
  const routes: string[] = ["about", "services", "portfolio", "contact"];

  return (
    <nav className="my-auto pr-1.5">
      {routes.map((route) => (
        <Link
          key={route}
          href={`/${route}`}
          className={cn(
            buttonVariants(),
            pathname === `/${route}` && "bg-indigo-900",
          )}
        >
          {route}
        </Link>
      ))}
    </nav>
  );
}
