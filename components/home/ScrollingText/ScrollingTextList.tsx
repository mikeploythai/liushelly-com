import { motion } from "framer-motion";
import { Unbounded } from "next/font/google";
import { ScrollingTextProps } from ".";

const logoFont = Unbounded({ subsets: ["latin"] });

export default function ScrollingTextList({
  data,
}: {
  data: ScrollingTextProps[];
}) {
  const variants = {
    scroll: {
      x: ["0%", "-100.6%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.ul
      variants={variants}
      animate="scroll"
      className="flex gap-2 whitespace-nowrap text-brand-light"
    >
      {data?.map(({ text }, index) => {
        return (
          <li
            key={index}
            className={`${logoFont.className} font-semibold text-xs`}
          >
            {text}
          </li>
        );
      })}
    </motion.ul>
  );
}
