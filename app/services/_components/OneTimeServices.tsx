import Card from "@/components/shared/Card";
import { primaryFont } from "@/lib/primaryFont";
import { MainService, Service } from "@/lib/types";

type DataType = {
  data: Service[] | MainService[];
};

export default function OneTimeServices({ data }: DataType) {
  return (
    <section className="p-4 bg-brand-dark md:px-4 md:py-8">
      <div className="flex flex-col max-w-screen-lg mx-auto gap-4 md:gap-8">
        <hgroup className="flex flex-col gap-2 md:text-center">
          <h2
            className={`${primaryFont.className} font-semibold text-lg text-brand-light sm:text-xl`}
          >
            Not ready for social media management?
          </h2>

          <p className="text-sm text-brand-light">
            My one-time services are the perfect solution! Whether you need an
            expert opinion or just a little guidance, I&apos;m here to help you
            make the best decisions for your business without the long-term
            commitment.
          </p>
        </hgroup>

        <article className="grid w-full gap-4 sm:grid-cols-2">
          {data
            .filter(({}, index: number) => index !== 0)
            .map((data: Service) => (
              <Card key={data._id} data={data} isService />
            ))}
        </article>
      </div>
    </section>
  );
}
