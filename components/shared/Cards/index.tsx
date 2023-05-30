import { PortfolioProps } from "@/lib/portfolioProps";
import { ServicesProps } from "@/lib/servicesProps";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CardDetails from "./CardDetails";
import CardModal from "./CardModal";

export interface ModalStateProps {
  state: boolean;
  index: number | null;
}

interface WrapperProps {
  index: number;
  setIsOpen: ({ state, index }: { state: boolean; index: number }) => void;
  path?: string;
  children: React.ReactNode;
}

function Wrapper({ index, setIsOpen, path, children }: WrapperProps) {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/portfolio" ? (
        <a key={index} href={`/portfolio/${path}`}>
          <article className="group border hover:cursor-pointer border-brand-dark">
            {children}
          </article>
        </a>
      ) : (
        <article
          key={index}
          className={`group border hover:cursor-pointer ${
            pathname === "/services"
              ? "border-brand-light"
              : "border-brand-dark"
          }`}
          onClick={() => setIsOpen({ state: true, index: index })}
        >
          {children}
        </article>
      )}
    </>
  );
}

export default function Cards({
  data,
}: {
  data: Array<ServicesProps | PortfolioProps>;
}) {
  const [isOpen, setIsOpen] = useState<ModalStateProps>({
    state: false,
    index: null,
  });
  const pathname = usePathname();
  const shownData =
    pathname === "/services"
      ? data?.filter(({}, index) => index !== 0)
      : data?.filter(({}, index) => index <= 2);

  return (
    <article
      className={`grid w-full gap-4 ${
        pathname === "/services" ? "md:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {shownData?.map((data, index) => {
        return (
          <Wrapper
            key={index}
            index={index}
            setIsOpen={setIsOpen}
            path={
              pathname === "/portfolio"
                ? (data as PortfolioProps).slug.current
                : undefined
            }
          >
            <figure>
              <div className="relative h-28 md:h-36">
                <Image
                  src={data.img.asset.url}
                  alt=""
                  placeholder="blur"
                  blurDataURL={data.img.asset.metadata.lqip}
                  style={{
                    objectFit: pathname === "/portfolio" ? "contain" : "cover",
                    backgroundColor:
                      pathname === "/portfolio" ? "white" : undefined,
                    padding: pathname === "/portfolio" ? "2rem" : undefined,
                  }}
                  sizes="(max-width: 480px) 60vw, 40vw"
                  fill
                />

                <span className="absolute left-0 w-full h-full transition ease-in-out group-hover:bg-brand-light/10 group-active:bg-brand-light/20" />
              </div>

              <figcaption
                className={`p-2.5 transition ease-in-out ${
                  pathname === "/services"
                    ? "bg-brand-light group-hover:bg-brand-light/90 group-active:bg-brand-light/80"
                    : "bg-brand-dark group-hover:bg-brand-dark/90 group-active:bg-brand-dark/80"
                }`}
              >
                <p
                  className={`text-xs font-medium uppercase ${
                    pathname !== "/services" && "text-brand-light"
                  }`}
                >
                  {data.name}
                </p>
              </figcaption>
            </figure>

            <CardModal index={index} isOpen={isOpen} setIsOpen={setIsOpen}>
              <CardDetails data={data} modal={true} pathname={pathname} />
            </CardModal>
          </Wrapper>
        );
      })}
    </article>
  );
}
