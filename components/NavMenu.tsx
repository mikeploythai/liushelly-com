import { Dialog, Transition } from "@headlessui/react";
import { Unbounded } from "next/font/google";
import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";
import NavRoutes from "./NavRoutes";
import Socials from "./Socials";

const logoFont = Unbounded({ subsets: ["latin"] });

export default function NavMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        onClose={() => setIsOpen(false)}
        className="relative z-20 sm:hidden"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </Transition.Child>

        <div className="flex fixed inset-0 justify-end">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-150"
            enterFrom="opacity-0 translate-x-8"
            enterTo="opacity-100 translate-x-0"
            leave="ease-in-out duration-150"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-8"
          >
            <Dialog.Panel className="flex flex-col w-5/6 justify-between bg-brand-dark">
              <header className="flex max-w-screen-lg w-full justify-between border-b border-b-brand-light">
                <Dialog.Title
                  className={`${logoFont.className} p-4 font-semibold text-lg text-brand-light`}
                >
                  Navigation
                </Dialog.Title>

                <button
                  type="button"
                  className="p-4 text-brand-dark bg-brand-light transition ease-in-out sm:hidden hover:bg-brand-light/90 active:bg-brand-light/80"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes />
                </button>
              </header>

              <nav className="flex flex-col justify-center p-4">
                <NavRoutes isDrawer={true} setIsOpen={setIsOpen} />
              </nav>

              <footer className="mx-auto px-4 pb-4">
                <Socials />
              </footer>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
