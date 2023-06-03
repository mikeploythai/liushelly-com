import { primaryFont } from "@/lib/primaryFont";
import Link from "next/link";
import SkipNav from "../SkipNav";
import ExitDraftButton from "./ExitDraftButton";
import NavRoutes from "./NavRoutes";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed top-0 w-full bg-brand-light border-b border-b-brand-dark z-10">
        <ExitDraftButton />

        <div className="flex max-w-screen-lg w-full justify-between mx-auto sm:items-center">
          <Link
            href="/"
            className={`${primaryFont.className} p-4 font-semibold text-lg transition ease-in-out hover:bg-brand-dark/10 active:bg-brand-dark/20`}
          >
            Shelly Liu
          </Link>

          <nav className="hidden pr-2.5 sm:flex">
            <NavRoutes />
          </nav>

          {children}
        </div>
      </header>

      <SkipNav />
    </>
  );
}
