import { IconSend } from "@tabler/icons-react";
import PageWrapper from "../_components/page-wrapper";
import { Button } from "../_components/ui/button";
import { Card, CardContent } from "../_components/ui/card";

export default function ContactPage() {
  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-sm flex-col items-center gap-6 p-6">
      <hgroup className="space-y-3 md:py-6 md:text-center">
        <h1 className="font-heading text-3xl font-medium md:text-4xl">
          Get in touch!
        </h1>
        <p>
          Feel free to reach out to me anytime via the form below or via
          contact(at)liushelly.com! I'll do my best to respond as soon as I can
          :)
        </p>
      </hgroup>

      <Card className="w-full">
        <CardContent>
          <form className="grid gap-3">
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm font-medium">
                What&apos;s your name? *
              </label>
              <input
                name="name"
                id="name"
                className="border-current transition focus:ring-2 focus:ring-current"
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                What&apos;s your email address? *
              </label>
              <input
                name="email"
                id="email"
                className="border-current transition focus:ring-2 focus:ring-current"
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="subject" className="text-sm font-medium">
                What&apos;s the subject of your message? *
              </label>
              <input
                name="subject"
                id="subject"
                className="border-current transition focus:ring-2 focus:ring-current"
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm font-medium">
                Tell me more! *
              </label>
              <textarea
                name="message"
                id="message"
                className="min-h-[160px] border-current transition focus:ring-2 focus:ring-current"
              />
            </div>

            <Button type="submit" className="w-full">
              Send message
              <IconSend size={18} className="ml-auto" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
