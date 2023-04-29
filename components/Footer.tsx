import { sanity } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Unbounded } from "next/font/google";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const logoFont = Unbounded({ subsets: ["latin"] });

const query = groq`
  *[_type=='socials'] {
    _createdAt,
    platform,
    link
  } | order(_createdAt asc)
`;

interface DataProps {
  platform: string;
  link: string;
}

interface IconProps {
  [x: string]: JSX.Element;
}

export default async function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const data = await sanity.fetch(query);

  const icons: IconProps = {
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
    linkedin: <FaLinkedin />,
  };

  return (
    <footer className="flex justify-center">
      <div
        className={`
          flex flex-col gap-8 max-w-screen-sm w-full items-center justify-between mx-12 py-16
          sm:flex-row
        `}
      >
        <div
          className={`
            flex flex-col gap-2 items-center
            sm:items-start
          `}
        >
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
              href="https://github.com/mploythai"
              target="_blank"
              referrerPolicy="strict-origin-when-cross-origin"
              className="hover:underline"
            >
              Built by Mike
            </a>
          </small>
        </div>

        <ul className="flex">
          {data.map((value: DataProps, index: number) => {
            return (
              <li key={index}>
                <a
                  href={value.link}
                  target="_blank"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={`
                    flex p-3.5 text-lg transition ease-in-out
                    hover:bg-brand-dark/10 active:bg-brand-dark/20
                    dark:hover:bg-brand-light/10 dark:active:bg-brand-light/20
                  `}
                >
                  {icons[value.platform.toLowerCase()]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
