import Image from "next/image";
import { InstagramPreviewProps } from ".";

export default function InstagramPosts({
  data,
}: {
  data: InstagramPreviewProps[];
}) {
  return (
    <div className="grid w-full gap-4 grid-cols-2 sm:grid-cols-4">
      {data?.map(({ title, img, link }, index) => {
        return (
          <figure
            key={index}
            className="border border-brand-dark dark:border-brand-light"
          >
            <a
              href={link}
              target="_blank"
              referrerPolicy="strict-origin-when-cross-origin"
              className="relative"
            >
              <span className="absolute left-0 w-full h-full transition ease-in-out hover:bg-brand-light/10 active:bg-brand-light/20 dark:hover:bg-brand-dark/10 dark:active:bg-brand-dark/20" />

              <Image
                src={img.asset.url}
                alt={title}
                placeholder="blur"
                blurDataURL={img.asset.metadata.lqip}
                height={1350}
                width={1080}
                sizes="(max-width: 480px) 40vw, 60vw"
                style={{ objectFit: "cover" }}
              />
            </a>
          </figure>
        );
      })}
    </div>
  );
}
