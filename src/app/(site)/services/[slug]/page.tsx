import type { Service } from "sanity-studio/types";

import { IconArrowUpRight, IconChevronLeft } from "@tabler/icons-react";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { client } from "sanity-studio/lib/client";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { sanityImage } from "sanity-studio/lib/image";
import ContentBlock from "~/components/content-block";
import MarkdownWrapper from "~/components/markdown-wrapper";
import PageWrapper from "~/components/page-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { buttonVariants } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/cn";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const query = groq`
  *[_type == "services" && slug.current == $slug][0] {
    name
  }`;

  const page = await client.fetch<{ name: string }>(query, params);
  if (!page) return;

  return {
    title: page.name.toUpperCase(),
  };
}

export default async function ServicePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const service: Service = await sanityFetch({
    query,
    params: { slug },
    tags: ["services"],
  });

  if (!service) return;
  const { name, image, cta, content, tabs, faq } = service;

  return (
    <PageWrapper className="mx-auto max-w-screen-md space-y-6 p-6 md:p-12">
      <Link
        href="/services"
        className={cn(buttonVariants({ variant: "link", size: "sm" }), "p-0")}
      >
        <IconChevronLeft size={12} />
        Back to services
      </Link>

      <h1 className="sr-only">Service details</h1>

      <MarkdownWrapper>
        <figure className="relative min-h-[208px] sm:aspect-[16/6] sm:min-h-0">
          <Image
            src={sanityImage(image).url()}
            alt={name}
            placeholder="blur"
            blurDataURL={image.lqip}
            className="border border-indigo-950 bg-white object-cover"
            fill
          />
        </figure>

        <ContentBlock content={content} />
      </MarkdownWrapper>

      <Link href={cta.href} className={buttonVariants({ class: "w-full" })}>
        {cta.text}
        <IconArrowUpRight size={18} className="ml-auto" />
      </Link>

      {tabs && (
        <Tabs defaultValue={tabs[0]?.name}>
          <TabsList className="flex">
            {tabs.map(({ name }) => (
              <TabsTrigger key={name} value={name} className="flex-1 uppercase">
                {name}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map(({ name, content }) => (
            <TabsContent key={name} value={name} asChild>
              <MarkdownWrapper>
                <ContentBlock content={content} />
              </MarkdownWrapper>
            </TabsContent>
          ))}
        </Tabs>
      )}

      {faq && (
        <>
          <h3 className="font-heading text-lg font-medium md:text-xl">FAQ</h3>

          <Accordion type="single" className="!mt-1.5" collapsible>
            {faq.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger>{question}</AccordionTrigger>

                <AccordionContent>
                  <MarkdownWrapper>
                    <ContentBlock content={answer} />
                  </MarkdownWrapper>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
    </PageWrapper>
  );
}

const query = groq`
*[_type == "services" && slug.current == $slug][0] {
  ...,
  image {
    ...,
    'lqip': asset->metadata.lqip,
  },
  cta {
    text,
    'href': reference->href
  },
}`;
