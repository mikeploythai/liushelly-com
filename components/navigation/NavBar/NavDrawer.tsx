"use client";

import { primaryFont } from "@/lib/primaryFont";
import { Social } from "@/lib/types";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaEquals, FaTimes } from "react-icons/fa";
import Socials from "../Socials";
import NavRoutes from "./NavRoutes";

export default function NavDrawer({ socialData }: { socialData?: Social[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Navigation drawer button"
        className="p-4 text-brand-light bg-brand-dark transition ease-in-out hover:bg-brand-dark/90 active:bg-brand-dark/80 sm:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FaEquals />
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-20 sm:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                ease: "easeInOut",
                duration: 0.5,
              }}
              className="fixed inset-0 bg-black/50"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{
                type: "spring",
                ease: "easeInOut",
                duration: 0.5,
              }}
              className="flex fixed inset-0 justify-end"
            >
              <Dialog.Panel className="flex flex-col w-80 justify-between bg-brand-dark">
                <header className="flex justify-between border-b border-b-brand-light">
                  <Dialog.Title
                    as="h2"
                    className={`${primaryFont.className} p-4 font-semibold text-lg text-brand-light`}
                  >
                    Navigation
                  </Dialog.Title>

                  <button
                    type="button"
                    className="p-4 bg-brand-light transition ease-in-out hover:bg-brand-light/90 active:bg-brand-light/80"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes />
                  </button>
                </header>

                <nav className="flex flex-col justify-center p-4">
                  <NavRoutes isDrawer={true} setIsOpen={setIsOpen} />
                </nav>

                {socialData && (
                  <footer className="mx-auto px-4 pb-4">
                    <Socials data={socialData} isDrawer={true} />
                  </footer>
                )}
              </Dialog.Panel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
