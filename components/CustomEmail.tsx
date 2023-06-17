import {
  Body,
  Button,
  Container,
  Heading,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type CustomEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function CustomEmail({
  name,
  email,
  subject,
  message,
}: CustomEmailProps) {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: {
                  light: "#d2cbff",
                  dark: "#242f78",
                },
              },
            },
          },
        }}
      >
        <Body className="bg-white font-sans m-0">
          <Container className="px-8 py-16">
            <Section className="flex flex-col">
              <Heading as="h1" className="my-4 text-brand-dark">
                Socials by Shelly
              </Heading>

              <Text className="uppercase font-medium text-brand-dark text-base">
                New form message
              </Text>
            </Section>

            <Section>
              <Text className="text-brand-dark">From {name},</Text>
              <Text className="p-4 bg-brand-dark text-brand-light dark:text-brand-light">
                {message}
              </Text>
            </Section>

            <Button
              href={`mailto:${email}?subject=RE:${subject}`}
              className="flex text-sm uppercase bg-brand-dark text-brand-light font-medium justify-center p-2 dark:text-brand-light"
            >
              Click here to reply
            </Button>

            <Hr className="border-brand-dark my-4" />

            <Text className="text-brand-dark">
              Before you reply, <b>PLEASE</b> ensure that this email is sent
              from the correct address! If unsure, ask your developer. They
              *should* be able to verify lol.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
