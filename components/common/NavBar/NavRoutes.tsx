import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function NavRoutes({ isDrawer }: { isDrawer?: boolean }) {
  const routes = ["about", "services", "portfolio", "contact"];

  return (
    <>
      {routes.map((route, index) => {
        return (
          <Link
            key={index}
            href={`/${route}`}
            className={`w-fit font-medium uppercase text-brand-light transition ease-in-out ${
              isDrawer
                ? "flex items-center gap-2 text-lg p-4 hover:bg-brand-light/10 active:bg-brand-light/20"
                : "text-xs p-2.5 bg-brand-dark hover:bg-brand-dark/90 active:bg-brand-dark/80"
            }`}
          >
            {route}

            {isDrawer && <FaAngleDoubleRight />}
          </Link>
        );
      })}
    </>
  );
}
