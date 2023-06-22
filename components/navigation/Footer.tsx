import { primaryFont } from "@/lib/primaryFont";
import { Social } from "@/lib/types";
import Link from "next/link";
import Socials from "./Socials";

export default function Footer({ socialData }: { socialData: Social[] }) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex flex-col max-w-screen-md w-full items-center justify-between mx-auto p-16 gap-4 sm:flex-row">
      <div className="flex flex-col items-center gap-1.5 sm:items-start">
        <p className={`${primaryFont.className} font-semibold text-base`}>
          &copy; Shelly Liu {year}
        </p>

        <small className="text-[10px] text-center font-medium">
          <Link href="/privacy" className="hover:underline">
            Privacy
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

      <Socials data={socialData} />
    </footer>
  );
}
