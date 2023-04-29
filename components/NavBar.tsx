import { Unbounded } from "next/font/google";
import Link from "next/link";

const logoFont = Unbounded({ subsets: ["latin"] });

export default function NavBar() {
  const routes = ["about", "services", "portfolio", "contact"];

  return (
    <header
      className={`
        flex sticky top-0 justify-center bg-brand-light border-b border-b-brand-dark
        dark:bg-brand-dark dark:border-b-brand-light
      `}
    >
      <div className="flex max-w-screen-md w-full justify-between items-center">
        <Link
          href="/"
          className={`
            ${logoFont.className} p-4 font-semibold text-lg transition ease-in-out
            hover:bg-brand-dark/10 active:bg-brand-dark/20
            dark:hover:bg-brand-light/10 dark:active:bg-brand-light/20
          `}
        >
          Shelly Liu
        </Link>

        <nav
          className={`
            hidden pr-2.5
            sm:flex
          `}
        >
          {routes.map((val, index) => {
            return (
              <Link
                key={index}
                href={`/${val}`}
                className={`
                  p-2.5 text-xs uppercase bg-brand-dark text-brand-light transition ease-in-out
                  hover:bg-brand-dark/90 active:bg-brand-dark/80
                  dark:text-brand-dark dark:bg-brand-light
                  dark:hover:bg-brand-light/90 dark:active:bg-brand-light/80
                `}
              >
                {val}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
