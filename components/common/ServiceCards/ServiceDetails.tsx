import ProductInfo from "@/components/services/MainProduct/ProductInfo";
import { ServicesProps } from "@/lib/servicesProps";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const logoFont = Unbounded({ subsets: ["latin"] });

export default function ServiceDetails({
  data,
  modal = false,
}: {
  data: ServicesProps;
  modal?: boolean;
}) {
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
            style={{ objectFit: "cover" }}
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

      {data?.contents && data?.packages && (
        <ProductInfo
          packages={data.packages}
          contents={data.contents}
          modal={modal}
        />
      )}

      <a
        href={data?.cta.link}
        target="_blank"
        referrerPolicy="strict-origin-when-cross-origin"
        className={`flex w-full justify-center items-center mt-auto gap-2 p-2.5 text-xs font-medium uppercase transition ease-in-out ${
          modal
            ? "text-brand-dark bg-brand-light hover:bg-brand-light/90 active:bg-brand-light/80"
            : "text-brand-light bg-brand-dark hover:bg-brand-dark/90 active:bg-brand-dark/80"
        }`}
      >
        {data?.cta.hook}
        <FaAngleDoubleRight />
      </a>
    </>
  );
}
