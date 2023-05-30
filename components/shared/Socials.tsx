import { SocialProps } from "@/lib/socialProps";
import { FaInstagram, FaLinkedin, FaShareAlt, FaTiktok } from "react-icons/fa";

interface IconProps {
  [x: string]: JSX.Element;
}

export default function Socials({
  data,
  isDrawer,
}: {
  data: SocialProps[];
  isDrawer?: boolean;
}) {
  const icons: IconProps = {
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
    linkedin: <FaLinkedin />,
  };

  return (
    <ul className="flex">
      {data?.map((value, index) => {
        return (
          <li key={index}>
            <a
              href={value.link}
              aria-label={`Shelly's ${value.platform}`}
              target="_blank"
              referrerPolicy="strict-origin-when-cross-origin"
              className={`flex p-3.5 text-lg transition ease-in-out ${
                isDrawer
                  ? "text-brand-light hover:bg-brand-light/10 active:bg-brand-light/20"
                  : "hover:bg-brand-dark/10 active:bg-brand-dark/20"
              }`}
            >
              {icons[value.platform.toLowerCase()] || <FaShareAlt />}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
