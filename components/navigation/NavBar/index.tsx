import { primaryFont } from "@/lib/primaryFont";
import Link from "next/link";
import ExitDraftButton from "./ExitDraftButton";
import NavRoutes from "./NavRoutes";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ExitDraftButton />
      <header className="fixed flex top-0 w-full justify-center bg-brand-light border-b border-b-brand-dark z-10">
        <div className="flex max-w-screen-lg w-full justify-between items-center">
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
    </>
  );
}
