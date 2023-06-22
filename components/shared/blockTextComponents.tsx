import { primaryFont } from "@/lib/primaryFont";
import sanityImage from "@/lib/sanity/image";
import { PortableTextComponents } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Link from "next/link";

export const blockTextComponents: PortableTextComponents = {
  block: {
    title: ({ children }) => (
      <h1
        className={`${primaryFont.className} font-semibold text-xl mb-1.5 sm:text-2xl`}
      >
        {children}
      </h1>
    ),
    h1: ({ children }) => <h1 className="font-bold text-xl">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-lg">{children}</h2>,
    h3: ({ children }) => (
      <h3 className="font-semibold text-base">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="font-semibold text-sm">{children}</h4>,
    normal: ({ children }) => (
      <>
        {children?.toString().length ? (
          <p className="text-sm">{children}</p>
        ) : (
          <br />
        )}
      </>
    ),
    blockquote: ({ children }) => (
      <blockquote className="text-sm">{children}</blockquote>
    ),
    small: ({ children }) => (
      <small className="ps-1.5 text-xs font-medium border-l-[1.5px] border-l-current">
        {children}
      </small>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-sm">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-sm">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-4">{children}</li>,
    number: ({ children }) => <li className="pl-4">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (value.asset) {
        const { width, height } = getImageDimensions(value);

        return (
          <Image
            src={sanityImage(value).url()}
            alt=""
            placeholder="blur"
            blurDataURL={value.blur}
            width={width}
            height={height}
            sizes="(max-width:640px) 70vw, 55vw"
            className="my-4 border border-brand-dark"
            priority
          />
        );
      }

      return <></>;
    },
  },
  marks: {
    link: ({ children, value }) =>
      !value.url ? (
        <p className="font-medium">{children}</p>
      ) : value.url.startsWith("/") ? (
        <Link href={value.url} className="font-medium hover:underline">
          {children}
        </Link>
      ) : (
        <a
          href={value.url}
          target="_blank"
          referrerPolicy="strict-origin-when-cross-origin"
          className="font-medium hover:underline"
        >
          {children}
        </a>
      ),
  },
};
