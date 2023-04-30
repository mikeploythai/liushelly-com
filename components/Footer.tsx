import { Unbounded } from "next/font/google";
import Link from "next/link";
import Socials from "./Socials";

const logoFont = Unbounded({ subsets: ["latin"] });

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex justify-center">
      <div className="flex flex-col gap-8 max-w-screen-md w-full items-center justify-between mx-12 py-16 sm:flex-row">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <p
            className={`${logoFont.className} text-base font-semibold text-center`}
          >
            &copy; Shelly Liu {year}
          </p>

          <small className="text-[10px]">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            &middot;{" "}
            <a
              href="https://mikeploythai.com"
              target="_blank"
              referrerPolicy="strict-origin-when-cross-origin"
              className="hover:underline"
            >
              Built by Mike
            </a>
          </small>
        </div>

        <Socials />
      </div>
    </footer>
  );
}
