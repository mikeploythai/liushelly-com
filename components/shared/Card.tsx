"use client";

import sanityImage from "@/lib/sanity/image";
import { MainService, Service } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import ServiceDetails from "./Service/Details";
import ServiceModal from "./Service/Modal";

type CardProps = {
  data: MainService | Service;
  isService?: boolean;
  colorTheme?: "light" | "dark";
};

export default function Card({
  data,
  isService,
  colorTheme = "light",
}: CardProps) {
  const [open, setIsOpen] = useState(false);
  const textColor =
    colorTheme === "dark" ? "text-brand-light" : "text-brand-dark";

  return (
    <>
      <article
        className={`group relative border border-brand-${colorTheme} hover:cursor-pointer`}
        onClick={() => isService && setIsOpen(true)}
      >
        <figure>
          {data.image && (
            <div className="relative h-28 md:h-36">
              <Image
                src={sanityImage(data.image).format("webp").url()}
                alt=""
                placeholder="blur"
                blurDataURL={data.image.blur}
                sizes="(max-width:640px) 70vw, 30vw"
                className="object-cover transition ease-in-out group-hover:opacity-90 group-active:opacity-80"
                fill
              />
            </div>
          )}

          {data.name && (
            <figcaption
              className={`p-2.5 uppercase font-medium text-start text-xs bg-brand-${colorTheme} transition ease-in-out group-hover:bg-opacity-90 group-active:bg-opacity-80 ${textColor}`}
            >
              {data.name}
            </figcaption>
          )}
        </figure>
      </article>

      {isService && (
        <ServiceModal open={open} setIsOpen={setIsOpen}>
          <ServiceDetails data={data} colorTheme="dark" />
        </ServiceModal>
      )}
    </>
  );
}
