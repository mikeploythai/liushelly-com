import sanity from "@/lib/sanityClient";
import { SocialProps } from "@/lib/socialProps";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import NavRoutes from "./NavRoutes";

const logoFont = Unbounded({ subsets: ["latin"] });

const query = groq`
  *[_type == "socials"] | order(orderRank) {
    platform,
    link
  }
`;

export default async function NavBar() {
  const data: SocialProps[] = await sanity.fetch(query);

  return (
    <header className="flex sticky top-0 justify-center bg-brand-light border-b border-b-brand-dark z-10 dark:bg-brand-dark dark:border-b-brand-light">
      <div className="flex max-w-screen-lg w-full justify-between items-center">
        <Link
          href="/"
          className={`${logoFont.className} p-4 font-semibold text-lg transition ease-in-out hover:bg-brand-dark/10 active:bg-brand-dark/20 dark:hover:bg-brand-light/10 dark:active:bg-brand-light/20`}
        >
          Shelly Liu
        </Link>

        <nav className="hidden pr-2.5 sm:flex">
          <NavRoutes />
        </nav>

        <NavDrawer socialData={data} />
      </div>
    </header>
  );
}
