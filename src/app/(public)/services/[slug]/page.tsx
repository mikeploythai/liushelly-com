import type { ListItem } from "sanity-studio/types";

import { PortableText } from "@portabletext/react";
import { IconArrowUpRight, IconChevronLeft } from "@tabler/icons-react";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { client } from "sanity-studio/lib/client";
import { sanityImage } from "sanity-studio/lib/image";
import { BlockImage, BlockLink } from "sanity-studio/portable-text/components";
import PageWrapper from "~/app/(public)/_components/page-wrapper";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/app/(public)/_components/ui/tabs";
import { cn } from "~/lib/cn";
import MarkdownWrapper from "../../_components/markdown-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../_components/ui/accordion";
import { buttonVariants } from "../../_components/ui/button";

export default async function ServicePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const service: ListItem = await client.fetch(query, {
    slug,
    next: { tags: ["services"] },
  });

  if (!service) return;

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
            src={sanityImage(service.image).format("webp").url()}
            alt={service.name}
            placeholder="blur"
            blurDataURL={service.image.lqip}
            className="border border-indigo-950 bg-white object-cover"
            fill
          />
        </figure>

        <PortableText
          value={service.content}
          components={{
            types: { image: BlockImage },
            marks: { link: BlockLink },
          }}
        />
      </MarkdownWrapper>

      <Link href={`/`} className={buttonVariants({ class: "w-full" })}>
        Book a discovery call
        <IconArrowUpRight size={18} className="ml-auto" />
      </Link>

      <Tabs defaultValue="packages">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="packages">Packages</TabsTrigger>
          <TabsTrigger value="contents">Contents</TabsTrigger>
        </TabsList>

        <TabsContent value="packages">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="contents">Change your password here.</TabsContent>
      </Tabs>

      <h3 className="font-heading text-lg font-medium md:text-xl">FAQ</h3>

      <Accordion type="single" className="!mt-1.5" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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
}
`;
