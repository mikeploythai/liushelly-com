import PreviewSuspense, { Loading } from "@/components/shared/PreviewSuspense";
import sanity from "@/lib/sanity/client";
import { Portfolio } from "@/lib/types";
import { Metadata } from "next";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import BrandShowcase from "./_components/BrandShowcase";
import PreviewBrand from "./_components/PreviewBrand";

type BrandPageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
    *[_type == "portfolio"] { slug }
  `;
  const slugs = await sanity.fetch(query);
  const routes = slugs.map((route: Portfolio) => route.slug?.current);

  return routes.map((slug: string) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: BrandPageProps): Promise<Metadata> {
  const query = groq`
    *[_type == "portfolio" && slug.current == $slug][0] { name }
  `;
  const data: Portfolio = await sanity.fetch(query, { slug });

  if (draftMode().isEnabled)
    return {
      title: "📝 PORTFOLIO | Shelly Liu, Social Media Manager",
    };

  return {
    title: `${data.name?.toUpperCase()} | Shelly Liu, Social Media Manager`,
  };
}

export default async function BrandPage({ params: { slug } }: BrandPageProps) {
  const query = groq`
  *[_type=="portfolio" && slug.current == $slug][0] {
    ...,
    description[] {
      ...,
      ...select(
        _type=="image" => {
          ...,
          'blur': asset->metadata.lqip,
        }
      )
    },
    image {
      ...,
      'blur': asset->metadata.lqip,
    }
  }
  `;
  const data = await sanity.fetch(query, { slug });

  if (draftMode().isEnabled)
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewBrand query={query} slug={slug} />
      </PreviewSuspense>
    );

  return <BrandShowcase data={data} />;
}
