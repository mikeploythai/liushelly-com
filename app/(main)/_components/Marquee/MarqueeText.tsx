"use client";

import { primaryFont } from "@/lib/primaryFont";
import { Marquee } from "@/lib/types";
import { motion } from "framer-motion";

export default function MarqueeText({ data }: { data: Marquee[] }) {
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
    <>
      <motion.ul
        variants={variants}
        animate="scroll"
        className="flex gap-2 whitespace-nowrap text-brand-light"
      >
        {data.map(({ _id, label }) => (
          <li
            key={_id}
            className={`${primaryFont.className} font-semibold text-xs`}
          >
            {label}.
          </li>
        ))}
      </motion.ul>
    </>
  );
}
