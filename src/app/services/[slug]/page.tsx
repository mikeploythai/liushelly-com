import PageWrapper from "~/app/_components/page-wrapper";

export default function ServicePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <PageWrapper>
      <h1>{slug}</h1>
    </PageWrapper>
  );
}
