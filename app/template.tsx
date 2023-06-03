"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="flex flex-col flex-1 justify-center"
    >
      {children}
    </motion.main>
  );
}
