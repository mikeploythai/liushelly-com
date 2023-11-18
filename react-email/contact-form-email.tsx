import type { ContactFormSchema } from "~/lib/contact-form/schema";

import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";

export default function ContactFormEmail({
  name,
  email,
  subject,
  message,
}: ContactFormSchema) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white font-sans text-indigo-900">
          <Container className="mx-auto my-12 border border-solid border-indigo-900 bg-violet-100 p-12 shadow-xl">
            <Heading className="">Socials by Shelly</Heading>

            <Text className="text-lg font-medium uppercase">
              New form message
            </Text>

            <Section>
              <Text>
                From {name} &lt;{email}&gt;,
              </Text>
              <Text>{message}</Text>
              <Button
                href={`mailto:${email}?subject=RE:${subject}`}
                className="bg-indigo-900 px-4 py-2 text-sm uppercase text-violet-100"
              >
                Click here to reply &rsaquo;
              </Button>
            </Section>

            <Section>
              <Hr className="mb-2 mt-6 border border-indigo-900" />

              <Text>
                Before you reply, <b className="uppercase">please</b> ensure
                that this email is sent from the correct address! If unsure, ask
                your developer. They *should* be able to verify.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
