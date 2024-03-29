import type { Metadata } from "next";

import ContactForm from "~/components/contact/form";
import PageWrapper from "~/components/page-wrapper";
import { Card, CardContent } from "~/components/ui/card";
import { serverEnv } from "~/env/server.mjs";

const title = "CONTACT";
const description =
  "Get in touch with Shelly Liu to inquire about her digital marketing services.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | Shelly Liu`,
    description,
    url: `${serverEnv.BASE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-sm flex-col items-center gap-6 p-6">
      <hgroup className="space-y-3 md:py-6 md:text-center">
        <h1 className="font-heading text-3xl font-medium md:text-4xl">
          Get in touch!
        </h1>
        <p className="text-sm md:text-base">
          Feel free to reach out to me anytime via the form below or via
          contact(at)liushelly.com! I&apos;ll do my best to respond as soon as I
          can :)
        </p>
      </hgroup>

      <Card className="w-full">
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
