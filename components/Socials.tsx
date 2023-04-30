import { sanity } from "@/lib/sanity.client";
import { Transition } from "@headlessui/react";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaShareAlt, FaTiktok } from "react-icons/fa";

const query = groq`
  *[_type == "socials"] {
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

export default function Socials() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await sanity.fetch(query);
      if (data) setData(data);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const icons: IconProps = {
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
    linkedin: <FaLinkedin />,
  };

  return (
    <>
      {data && (
        <Transition
          appear
          as="ul"
          show={data !== null}
          enter="ease-in-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="flex"
        >
          {data.map((value: DataProps, index: number) => {
            return (
              <li key={index}>
                <a
                  href={value.link}
                  target="_blank"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="flex p-3.5 text-lg transition ease-in-out hover:bg-brand-dark/10 active:bg-brand-dark/20 dark:hover:bg-brand-light/10 dark:active:bg-brand-light/20"
                >
                  {icons[value.platform.toLowerCase()] || <FaShareAlt />}
                </a>
              </li>
            );
          })}
        </Transition>
      )}
    </>
  );
}
