import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function NavRoutes({
  isDrawer,
  setIsOpen,
}: {
  isDrawer?: boolean;
  setIsOpen?: (state: boolean) => void;
}) {
  const pathname = usePathname();
  const routes = ["about", "services", "portfolio", "contact"];

  return (
    <>
      {routes.map((route, index) => {
        return (
          <Link
            key={index}
            href={`/${route}`}
            className={`w-fit font-semibold uppercase transition ease-in-out ${
              isDrawer
                ? "flex items-center gap-2 text-lg p-4 hover:bg-brand-light/10 active:bg-brand-light/20"
                : "text-xs p-2.5 bg-brand-dark text-brand-light hover:bg-brand-dark/90 active:bg-brand-dark/80 dark:bg-brand-light dark:text-brand-dark dark:hover:bg-brand-light/90 dark:active:bg-brand-light/80"
            }`}
            onClick={() => {
              if (pathname === `/${route}`) {
                setIsOpen?.(false);
                window.scrollTo(0, 0);
              }
            }}
          >
            {route}

            {isDrawer && <FaAngleDoubleRight />}
          </Link>
        );
      })}
    </>
  );
}
