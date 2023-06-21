import Frame from "@/components/shared/Frame";
import { primaryFont } from "@/lib/primaryFont";
import { Toaster } from "react-hot-toast";
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

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 10000,
          style: {
            border: "1px solid #242f78",
            borderRadius: 0,
            maxWidth: "unset",
            color: "#242f78",
          },
          success: {
            style: {
              borderColor: "#10b981",
            },
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            style: {
              borderColor: "#ef4444",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </section>
  );
}
