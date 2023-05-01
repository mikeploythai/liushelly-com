import { Unbounded } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";
import NavRoutes from "./NavRoutes";

const logoFont = Unbounded({ subsets: ["latin"] });

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="flex sticky top-0 justify-center bg-brand-light border-b border-b-brand-dark z-10 dark:bg-brand-dark dark:border-b-brand-light">
      <div className="flex max-w-screen-lg w-full justify-between items-center">
        <Link
          href="/"
          className={`${logoFont.className} p-4 font-semibold text-lg transition ease-in-out hover:bg-brand-dark/10 active:bg-brand-dark/20 dark:hover:bg-brand-light/10 dark:active:bg-brand-light/20`}
          onClick={() => pathname === "/" && window.scrollTo(0, 0)}
        >
          Shelly Liu
        </Link>

        <nav className="hidden pr-2.5 sm:flex">
          <NavRoutes />
        </nav>

        <NavMenu />
      </div>
    </header>
  );
}
