import type { ListItem, SanityImage, Testimonial } from "sanity-studio/types";

import { IconArrowUpRight, IconChevronRight } from "@tabler/icons-react";
import { groq, type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { sanityImage } from "sanity-studio/lib/image";
import Announcement from "~/components/announcement";
import CardGrid from "~/components/card-grid";
import ExternalLink from "~/components/external-link";
import PageWrapper from "~/components/page-wrapper";
import PhotoGrid from "~/components/photo-grid";
import Testimonials from "~/components/testimonials";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/cn";

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
  const home = await sanityFetch<Home>({ query: homeQuery, tags: ["home"] });
  const services = await sanityFetch<ListItem[]>({
    query: slicedServicesQuery,
    params: { type: "services" },
    tags: ["services"],
  });
  const instagramLink = await sanityFetch<{ href: string }>({
    query: `*[_type == "links" && name == "Instagram"][0]`,
    tags: ["links"],
  });

  if (!home || !services) return;
  const { hero, testimonials, featuredInstagramPosts } = home;

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
            src={sanityImage(hero.image).url()}
            alt={hero.image.alt}
            placeholder="blur"
            blurDataURL={hero.image.lqip}
            width={288}
            height={432}
            className="h-full w-full bg-white object-cover transition duration-300 ease-in-out sm:w-72 md:group-hover:scale-105"
            priority
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

        <CardGrid list={services} className="md:grid-cols-3" />
      </section>

      <section className="bg-indigo-950">
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="mx-auto max-w-screen-xl space-y-6 p-6">
        <div className="space-y-3 md:text-center">
          <h2 className="font-heading text-xl font-medium md:text-2xl">
            Follow my Instagram for free social media growth advice!
          </h2>

          <ExternalLink href={instagramLink.href ?? "/"}>
            Visit my Instagram
            <IconArrowUpRight size={18} />
          </ExternalLink>
        </div>

        <PhotoGrid images={featuredInstagramPosts} width={1080} height={1350} />
      </section>
    </PageWrapper>
  );
}

const homeQuery = groq`
*[_type == "home"][0] {
  ...,
  hero {
    ...,
    image {
      ...,
      'lqip': asset->metadata.lqip,
    },
    cta {
      text,
      'href': reference->href
    },
  },
  featuredInstagramPosts[] {
    ...,
    'lqip': asset->metadata.lqip,
  },
}`;

const slicedServicesQuery = groq`
*[_type == $type] | order(orderRank) [0..2] {
  ...,
  image {
    ...,
    'lqip': asset->metadata.lqip,
  },
}`;
