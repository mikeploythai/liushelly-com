import { portfolio } from "~/lib/fake-db";
import CardGrid from "../_components/card-grid";
import PageWrapper from "../_components/page-wrapper";

export default function PortfolioPage() {
  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-6 p-6">
      <h1 className="font-heading text-3xl font-medium md:py-6 md:text-center md:text-4xl">
        Brands I&apos;ve worked with!
      </h1>

      <CardGrid list={portfolio} className="w-full md:grid-cols-3" />
    </PageWrapper>
  );
}