"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/cn";
import { buttonVariants } from "../ui/button";
import { DrawerClose } from "../ui/drawer";

export default function NavbarItems({ isDrawer }: { isDrawer: boolean }) {
  const pathname = usePathname();
  const routes: string[] = ["about", "services", "portfolio", "contact"];

  function ItemWrapper({ children }: { children: React.ReactNode }) {
    if (isDrawer) return <DrawerClose asChild>{children}</DrawerClose>;
    else return <>{children}</>;
  }

  return (
    <nav
      className={cn(
        "my-auto",
        !isDrawer && "hidden pr-1.5 sm:block",
        isDrawer && "mt-4 flex flex-col",
      )}
    >
      {routes.map((route) => (
        <ItemWrapper key={route}>
          <Link
            href={`/${route}`}
            className={cn(
              buttonVariants({ size: !isDrawer ? "default" : "lg" }),
              pathname === `/${route}` && "bg-indigo-900",
              isDrawer && "justify-start",
              "rounded-none sm:first-of-type:rounded-l-sm sm:last-of-type:rounded-r-sm",
            )}
          >
            {route}
            <IconArrowRight
              size={20}
              className={!isDrawer ? "hidden" : "block"}
            />
          </Link>
        </ItemWrapper>
      ))}
    </nav>
  );
}
