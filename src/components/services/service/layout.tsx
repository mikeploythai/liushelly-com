import type { ServiceData } from "~/lib/types";

import { IconArrowUpRight, IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { sanityImage } from "sanity-studio/lib/image";
import BlockContent from "~/components/block-content";
import PageWrapper from "~/components/page-wrapper";
import MarkdownProvider from "~/components/providers/markdown";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { buttonVariants } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/cn";

export default function ServiceLayout({ data }: { data: ServiceData }) {
  if (!data) return;

  const { name, image, cta, content, tabs, faq } = data;

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

      <MarkdownProvider>
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

        <BlockContent content={content} />
      </MarkdownProvider>

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
              <MarkdownProvider>
                <BlockContent content={content} />
              </MarkdownProvider>
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
                  <MarkdownProvider>
                    <BlockContent content={answer} />
                  </MarkdownProvider>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
    </PageWrapper>
  );
}
