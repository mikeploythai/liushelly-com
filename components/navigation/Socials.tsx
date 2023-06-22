import { Social } from "@/lib/types";
import { FaInstagram, FaLinkedin, FaShareAlt, FaTiktok } from "react-icons/fa";

type SocialProps = {
  data: Social[];
  isDrawer?: boolean;
};

interface IconProps {
  [x: string]: JSX.Element;
}

export default function Socials({ data, isDrawer }: SocialProps) {
  const icons: IconProps = {
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
    linkedin: <FaLinkedin />,
  };

  return (
    <ul className="flex">
      {data.map(
        ({ _id, link, platform }) =>
          platform && (
            <li key={_id}>
              <a
                href={link}
                aria-label={`Shelly's ${platform}`}
                target="_blank"
                referrerPolicy="strict-origin-when-cross-origin"
                aria-disabled={link === undefined}
                className={`flex p-3.5 text-base transition ease-in-out aria-disabled:opacity-50 ${
                  isDrawer
                    ? "text-brand-light hover:bg-brand-light/10 active:bg-brand-light/20"
                    : "hover:bg-brand-dark/10 active:bg-brand-dark/20"
                }`}
              >
                {icons[platform.toLowerCase()] || <FaShareAlt />}
              </a>
            </li>
          )
      )}
    </ul>
  );
}
