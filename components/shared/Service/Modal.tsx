import { primaryFont } from "@/lib/primaryFont";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

type ServiceModalProps = {
  open: boolean;
  setIsOpen: (state: boolean) => void;
  children: React.ReactNode;
};

export default function ServiceModal({
  open,
  setIsOpen,
  children,
}: ServiceModalProps) {
  const expandedStyles =
    "sm:min-h-fit sm:mt-4 sm:ml-4 sm:mr-6 sm:mb-6 sm:border sm:border-brand-light sm:shadow-normal sm:shadow-brand-light";

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={() => setIsOpen(false)}
          className="relative z-20"
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{
              type: "spring",
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="flex fixed inset-0 justify-center overflow-y-auto"
          >
            <Dialog.Panel
              className={`flex flex-col max-w-screen-md w-full min-h-full h-fit p-4 gap-4 text-brand-light bg-brand-dark ${expandedStyles}`}
            >
              <header className="flex justify-between -mx-4 -mt-4 mb-1 border-b border-b-brand-light">
                <Dialog.Title
                  as="h1"
                  className={`${primaryFont.className} p-4 font-semibold text-xl`}
                >
                  Service Details
                </Dialog.Title>

                <motion.button
                  type="button"
                  className="p-4 text-brand-dark bg-brand-light transition ease-in-out hover:bg-brand-light/90 active:bg-brand-light/80 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes />
                </motion.button>
              </header>

              {children}
            </Dialog.Panel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
