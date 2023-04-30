"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Transition } from "@headlessui/react";
import "./globals.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />

      <Transition
        appear
        show={children !== null}
        enter="ease-in-out duration-150"
        enterFrom="opacity-0 translate-y-8"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in-out duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-8"
        className="flex flex-1 flex-col w-full justify-center items-center"
      >
        {children}
      </Transition>

      <Footer />
    </>
  );
}
