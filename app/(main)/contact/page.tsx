import Frame from "@/components/shared/Frame";
import { primaryFont } from "@/lib/primaryFont";
import ContactForm from "./_components/ContactForm";

export const metadata = {
  title: "CONTACT",
};

export default function Contact() {
  return (
    <section className="flex flex-col max-w-screen-sm w-full mx-auto p-4 gap-4 sm:gap-16 sm:px-4 sm:py-16">
      <hgroup className="flex flex-col gap-2 md:items-center">
        <h1
          className={`${primaryFont.className} font-semibold text-xl sm:text-2xl sm:text-center`}
        >
          Let&apos;s chat!
        </h1>

        <p className="text-sm sm:text-center">
          Feel free to reach out to me anytime via the form below or via
          contact(at)liushelly.com! I&apos;ll do my best to respond as soon as I
          can :)
        </p>
      </hgroup>

      <Frame isPadded>
        <ContactForm />
      </Frame>
    </section>
  );
}
