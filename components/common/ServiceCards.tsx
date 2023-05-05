import { ImageMetadata, TypedObject } from "@sanity/types";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface ServicesProps {
  name: string;
  description: TypedObject[];
  cta: {
    hook: string;
    link: string;
  };
  img: {
    asset: {
      url: string;
      metadata: ImageMetadata;
    };
  };
}

export default function ServiceCards({ data }: { data: ServicesProps[] }) {
  const pathname = usePathname();
  const shownData =
    pathname === "/services"
      ? data?.filter(({}, index) => index !== 0)
      : data?.filter(({}, index) => index <= 2);

  return (
    <div
      className={`grid w-full gap-4 ${
        pathname === "/services" ? "md:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {shownData?.map(({ name, img }, index) => {
        return (
          <article
            key={index}
            className="group border border-brand-dark hover:cursor-pointer dark:border-brand-light"
            onClick={() => console.log(name)}
          >
            <figure>
              <div className="relative h-28 md:h-36">
                <Image
                  src={img.asset.url}
                  alt=""
                  placeholder="blur"
                  blurDataURL={img.asset.metadata.lqip}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 480px) 60vw, 40vw"
                  fill
                />

                <span className="absolute left-0 w-full h-full transition ease-in-out group-hover:bg-brand-light/10 group-active:bg-brand-light/20 dark:group-hover:bg-brand-dark/10 dark:group-active:bg-brand-dark/20" />
              </div>

              <figcaption className="p-2.5 bg-brand-dark transition ease-in-out group-hover:bg-brand-dark/90 group-active:bg-brand-dark/80 dark:bg-brand-light dark:group-hover:bg-brand-light/90 dark:group-active:bg-brand-light/80">
                <p className="text-xs font-medium text-brand-light uppercase dark:text-brand-dark">
                  {name}
                </p>
              </figcaption>
            </figure>
          </article>
        );
      })}
    </div>
  );
}
