import type { ListItem, SanityImage, Testimonial } from "sanity-studio/types";

import { IconArrowUpRight, IconChevronRight } from "@tabler/icons-react";
import { groq, type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { sanityImage } from "sanity-studio/lib/image";
import { orderableQuery } from "sanity-studio/queries";
import { cn } from "~/lib/cn";
import Announcement from "./_components/announcement";
import CardGrid from "./_components/card-grid";
import ExternalLink from "./_components/external-link";
import PageWrapper from "./_components/page-wrapper";
import PhotoGrid from "./_components/photo-grid";
import Testimonials from "./_components/testimonials";
import { buttonVariants } from "./_components/ui/button";

interface Home extends SanityDocument {
  hero: {
    heading: string;
    cta: {
      text: string;
      href: string;
    };
    image: SanityImage;
  };
  testimonials: Testimonial[];
  featuredInstagramPosts: SanityImage[];
}

export default async function HomePage() {
  const home = await sanityFetch<Home>({ query, tags: ["home"] });
  const services = await sanityFetch<ListItem[]>({
    query: orderableQuery,
    params: { type: "services" },
    tags: ["services"],
  });

  if (!home || !services) return;
  const { hero, testimonials, featuredInstagramPosts } = home;
  const servicesList = services.slice(0, 3);

  return (
    <PageWrapper>
      <section className="relative mx-auto flex max-w-screen-lg flex-col items-center gap-6 sm:flex-row sm:p-6">
        <div className="absolute bottom-0 space-y-6 p-6 sm:relative sm:p-0">
          <h1 className="font-heading text-3xl font-medium text-violet-200 sm:text-indigo-950 md:text-4xl">
            {hero.heading}
          </h1>

          <ExternalLink
            href={hero.cta.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-violet-200 text-indigo-950 no-underline hover:bg-indigo-100 hover:text-indigo-950 focus-visible:bg-indigo-100 focus-visible:text-indigo-950",
              "sm:bg-indigo-950 sm:text-violet-200 sm:hover:bg-indigo-900 sm:hover:text-violet-200 sm:focus-visible:bg-indigo-900 sm:focus-visible:text-violet-200",
            )}
          >
            {hero.cta.text}
            <IconArrowUpRight size={20} />
          </ExternalLink>
        </div>

        <figure className="group relative -z-10 w-full overflow-hidden border-indigo-950 transition duration-300 ease-in-out sm:z-0 sm:mb-2 sm:mr-2 sm:max-w-fit sm:border sm:shadow-boxy md:hover:border-indigo-900 md:hover:shadow-boxy-hover md:hover:shadow-indigo-900">
          <Image
            src={sanityImage(hero.image).format("webp").url()}
            alt={hero.image.alt}
            placeholder="blur"
            blurDataURL={hero.image.lqip}
            width={288}
            height={432}
            className="h-full w-full bg-white object-cover transition duration-300 ease-in-out sm:w-72 md:group-hover:scale-105"
          />

          <span className="absolute inset-0 bg-gradient-to-tr from-indigo-950 from-15% to-transparent sm:hidden" />
        </figure>
      </section>

      <Announcement />

      <section className="mx-auto max-w-screen-xl space-y-6 p-6">
        <div className="space-y-3 md:text-center">
          <h2 className="font-heading text-xl font-medium md:text-2xl">
            Personalized services that&apos;ll skyrocket your socials.
          </h2>

          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "link" }), "p-0")}
          >
            Explore services
            <IconChevronRight size={18} />
          </Link>
        </div>

        <CardGrid list={servicesList} className="md:grid-cols-3" />
      </section>

      <section className="bg-indigo-950">
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="mx-auto max-w-screen-xl space-y-6 p-6">
        <div className="space-y-3 md:text-center">
          <h2 className="font-heading text-xl font-medium md:text-2xl">
            Follow my Instagram for free social media growth advice!
          </h2>

          <ExternalLink href="/">
            Visit my Instagram
            <IconArrowUpRight size={18} />
          </ExternalLink>
        </div>

        <PhotoGrid images={featuredInstagramPosts} width={1080} height={1350} />
      </section>
    </PageWrapper>
  );
}

const query = groq`
*[_type == "home"][0] {
  ...,
  hero {
    ...,
    image {
      ...,
      'lqip': asset->metadata.lqip,
    },
  },
  featuredInstagramPosts[] {
    ...,
    'lqip': asset->metadata.lqip,
  }
}`;
