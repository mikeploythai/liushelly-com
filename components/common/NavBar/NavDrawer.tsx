import { SocialProps } from "@/lib/socialProps";
import { Dialog } from "@headlessui/react";
import { Unbounded } from "next/font/google";
import { useState } from "react";
import { FaEquals, FaTimes } from "react-icons/fa";
import Socials from "../Socials";
import NavRoutes from "./NavRoutes";

const logoFont = Unbounded({ subsets: ["latin"] });

export default function NavDrawer({
  socialData,
}: {
  socialData: SocialProps[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Navigation drawer button"
        className="h-full p-4 bg-brand-dark text-brand-light transition ease-in-out hover:bg-brand-dark/90 active:bg-brand-dark/80 sm:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FaEquals />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-20 sm:hidden"
      >
        <div className="flex fixed inset-0 justify-end">
          <Dialog.Panel className="flex flex-col w-full justify-between bg-brand-dark">
            <header className="flex max-w-screen-lg justify-between border-b border-b-brand-light">
              <Dialog.Title
                className={`${logoFont.className} p-4 font-semibold text-lg text-brand-light`}
              >
                Navigation
              </Dialog.Title>

              <button
                type="button"
                className="p-4 bg-brand-light transition ease-in-out sm:hidden hover:bg-brand-light/90 active:bg-brand-light/80"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
            </header>

            <nav className="flex flex-col justify-center p-4">
              <NavRoutes isDrawer={true} setIsOpen={setIsOpen} />
            </nav>

            <footer className="mx-auto px-4 pb-4">
              <Socials data={socialData} isDrawer={true} />
            </footer>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
