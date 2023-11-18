import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "~/lib/fake-db";
import CardGrid from "../_components/card-grid";
import MarkdownWrapper from "../_components/markdown-wrapper";
import Marquee from "../_components/marquee";
import PageWrapper from "../_components/page-wrapper";
import { buttonVariants } from "../_components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../_components/ui/card";

export default function ServicesPage() {
  const servicesList = services.slice(1, services.length);

  return (
    <PageWrapper>
      <section className="mx-auto flex max-w-screen-md flex-col items-center gap-6 p-6">
        <h1 className="font-heading text-3xl font-medium md:py-6 md:text-center md:text-4xl">
          Take your brand&apos;s social media presence to the next level.
        </h1>

        <Card className="w-full">
          <CardHeader className="relative min-h-[208px] sm:aspect-[16/6] sm:min-h-0">
            <Image
              src=""
              alt=""
              className="border border-indigo-950 bg-white"
              fill
            />
          </CardHeader>

          <CardContent className="border border-dashed border-indigo-950 p-3">
            <MarkdownWrapper className="prose-headings:capitalize">
              <h2>
                <b>DONE FOR YOU</b>
                <br></br>
                social media management
              </h2>

              <p>
                This is my flagship service, where I get hands-on and take
                charge of your social media platforms!
              </p>

              <p>
                With four different tiers to choose from, you can select the one
                that&apos;s best suited for your business&apos; budget and
                specific needs. Each tier offers different levels of account
                management, post creation, and audience engagement, ensuring
                maximum flexibility and customization.
              </p>
            </MarkdownWrapper>
          </CardContent>

          <CardFooter>
            <Link
              href={services[0]?.link ?? ""}
              className={buttonVariants({ class: "w-full" })}
            >
              View details
              <IconChevronRight size={18} className="ml-auto" />
            </Link>
          </CardFooter>
        </Card>
      </section>

      <Marquee />

      <section className="mx-auto max-w-screen-lg space-y-6 p-6">
        <hgroup className="space-y-3 md:text-center">
          <h2 className="font-heading text-xl font-medium md:text-2xl">
            Not ready for social media management?
          </h2>

          <p className="text-sm md:text-base">
            My one-time services are the perfect solution! Whether you need an
            expert opinion or just a little guidance, I&apos;m here to help you
            make the best decisions for your business without the long-term
            commitment.
          </p>
        </hgroup>

        <CardGrid list={servicesList} />
      </section>
    </PageWrapper>
  );
}
