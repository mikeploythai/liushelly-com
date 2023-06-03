"use client";

import { Unbounded } from "next/font/google";
import ContactForm from "./(components)/ContactForm";

const logoFont = Unbounded({ subsets: ["latin"] });

export default function Contact() {
  return (
    <section className="flex flex-col gap-4 max-w-[640px] p-4 sm:gap-16 sm:px-4 sm:py-16">
      <hgroup className="flex flex-col gap-2 md:items-center">
        <h1
          className={`${logoFont.className} text-lg font-semibold sm:text-2xl sm:text-center`}
        >
          Let&apos;s chat!
        </h1>

        <p className="text-sm sm:text-center">
          Feel free to reach out to me anytime via the form below or via
          contact(at)liushelly.com! I&apos;ll do my best to respond as soon as I
          can :)
        </p>
      </hgroup>

      <div className="flex flex-col gap-4 bg-brand-light mr-2 mb-2 p-4 border border-brand-dark shadow-normal shadow-brand-dark">
        <ContactForm />
      </div>
    </section>
  );
}
