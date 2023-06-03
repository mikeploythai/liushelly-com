import Card from "@/components/shared/Card";
import LinkButton from "@/components/shared/LinkButton";
import { primaryFont } from "@/lib/primaryFont";
import { MainService, Service } from "@/lib/types";

type DataType = {
  data: MainService[] | Service[];
};

export default function ServiceSamples({ data }: DataType) {
  return (
    <section className="flex flex-col max-w-screen-lg w-full mx-auto p-4 gap-4">
      <h2
        className={`${primaryFont.className} font-semibold text-lg sm:text-xl md:text-center`}
      >
        Personalized services to skyrocket your socials.
      </h2>

      <article className="grid w-full gap-4 md:grid-cols-3">
        {data
          .filter(({}, index: number) => index <= 2)
          .map((data: Service) => (
            <Card key={data._id} data={data} colorTheme="dark" isService />
          ))}
      </article>

      <LinkButton href="/services">Explore all services</LinkButton>
    </section>
  );
}
