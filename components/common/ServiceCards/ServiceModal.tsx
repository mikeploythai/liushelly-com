import { Dialog } from "@headlessui/react";
import { Unbounded } from "next/font/google";
import { FaTimes } from "react-icons/fa";
import { ModalStateProps } from ".";

const logoFont = Unbounded({ subsets: ["latin"] });

interface ServiceModalProps {
  index: number;
  isOpen: ModalStateProps;
  setIsOpen: ({ state, index }: ModalStateProps) => void;
  children: React.ReactNode;
}

export default function ServiceModal({
  index,
  isOpen,
  setIsOpen,
  children,
}: ServiceModalProps) {
  return (
    <Dialog
      open={isOpen.index === index && isOpen.state}
      onClose={() =>
        setIsOpen({
          state: false,
          index: null,
        })
      }
      className="relative z-20"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="flex fixed inset-0 justify-center overflow-y-auto">
        <Dialog.Panel className="flex flex-col h-full w-full max-w-2xl overflow-y-auto overflow-x-hidden gap-4 p-4 bg-brand-dark sm:h-fit sm:mt-4 sm:ml-4 sm:mb-6 sm:mr-6 sm:border sm:border-brand-light sm:shadow-normal sm:shadow-brand-light">
          <header className="flex justify-between -mx-4 -mt-4 mb-1 border-b border-b-brand-light">
            <Dialog.Title
              as="h1"
              className={`${logoFont.className} p-4 font-semibold text-lg text-brand-light`}
            >
              Service Details
            </Dialog.Title>

            <button
              type="button"
              className="p-4 bg-brand-light transition ease-in-out hover:bg-brand-light/90 active:bg-brand-light/80"
              onClick={() =>
                setIsOpen({
                  state: false,
                  index: null,
                })
              }
            >
              <FaTimes />
            </button>
          </header>

          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
