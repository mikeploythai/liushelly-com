import ProductInfo from "@/components/shared/ProductInfo";
import { PortfolioProps } from "@/lib/portfolioProps";
import { ServicesProps } from "@/lib/servicesProps";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const logoFont = Unbounded({ subsets: ["latin"] });

interface CardDetailsProps {
  data: ServicesProps | PortfolioProps;
  modal?: boolean;
  pathname?: string;
}

export default function CardDetails({
  data,
  modal = false,
  pathname,
}: CardDetailsProps) {
  const descriptionComponent: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className={`text-sm ${modal && "text-brand-light"}`}>{children}</p>
      ),
    },
  };

  return (
    <>
      <figure>
        <div
          className={`relative h-48 border sm:h-56 ${
            modal ? "border-brand-light" : "border-brand-dark"
          }`}
        >
          <Image
            src={data?.img.asset.url}
            alt=""
            placeholder="blur"
            blurDataURL={data?.img.asset.metadata.lqip}
            style={{
              objectFit: pathname === "/portfolio" ? "contain" : "cover",
              backgroundColor: pathname === "/portfolio" ? "white" : undefined,
              padding: pathname === "/portfolio" ? "2rem" : undefined,
            }}
            sizes="(max-width: 480px) 80vw, 40vw"
            fill
            priority
          />
        </div>
      </figure>

      {modal ? (
        <h2
          className={`${logoFont.className} font-semibold text-lg text-brand-light`}
        >
          {data?.name.toLowerCase() === "social media management" && (
            <u>DONE FOR YOU</u>
          )}{" "}
          {data?.name}
        </h2>
      ) : (
        <h1 className={`${logoFont.className} font-semibold text-lg`}>
          {data?.name.toLowerCase() === "social media management" && (
            <u>DONE FOR YOU</u>
          )}{" "}
          {data?.name}
        </h1>
      )}

      <PortableText
        value={data?.description}
        components={descriptionComponent}
      />

      {(data as ServicesProps).contents && (data as ServicesProps).packages && (
        <ProductInfo
          packages={(data as ServicesProps).packages!}
          contents={(data as ServicesProps).contents!}
          modal={modal}
        />
      )}

      <a
        href={data?.button.link}
        target="_blank"
        referrerPolicy="strict-origin-when-cross-origin"
        className={`flex w-full justify-center items-center mt-auto gap-2 p-2.5 text-xs font-medium uppercase transition ease-in-out ${
          modal
            ? "text-brand-dark bg-brand-light hover:bg-brand-light/90 active:bg-brand-light/80"
            : "text-brand-light bg-brand-dark hover:bg-brand-dark/90 active:bg-brand-dark/80"
        }`}
      >
        {data?.button.cta}
        <FaAngleDoubleRight />
      </a>
    </>
  );
}
