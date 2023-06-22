"use client";

import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

type NavRouteProps = {
  isDrawer?: boolean;
  setIsOpen?: (state: boolean) => void;
};

export default function NavRoutes({ isDrawer, setIsOpen }: NavRouteProps) {
  const routes = ["about", "services", "portfolio", "contact"];

  return (
    <>
      {routes.map((route, index) => (
        <Link
          key={index}
          href={`/${route}`}
          className={`w-fit font-medium uppercase text-brand-light transition ease-in-out ${
            isDrawer
              ? "flex items-center p-3.5 gap-2 text-base hover:bg-brand-light/10 active:bg-brand-light/20"
              : "p-2.5 text-xs bg-brand-dark hover:bg-brand-dark/90 active:bg-brand-dark/80"
          }`}
          onClick={() => setIsOpen?.(false)}
        >
          {route}

          {isDrawer && <FaAngleDoubleRight />}
        </Link>
      ))}
    </>
  );
}
