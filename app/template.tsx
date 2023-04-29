"use client";

import { motion } from "framer-motion";
import "./globals.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      className="flex flex-1 flex-col w-full justify-center items-center"
    >
      {children}
    </motion.div>
  );
}
