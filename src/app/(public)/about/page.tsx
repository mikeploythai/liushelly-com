import { IconArrowUpRight } from "@tabler/icons-react";
import ExternalLink from "../_components/external-link";
import MarkdownWrapper from "../_components/markdown-wrapper";
import PageWrapper from "../_components/page-wrapper";
import PhotoGrid from "../_components/photo-grid";

export default function AboutPage() {
  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-lg flex-col justify-center gap-6 p-6 md:gap-12 md:p-12">
      <MarkdownWrapper>
        <h1>Hi, I&apos;m Shelly!</h1>

        <p>
          I&apos;m a social media manager and digital marketing expert with{" "}
          <span className="font-semibold">4+ years</span> of experience.
          I&apos;ve earned my Bachelor&apos;s Degree in Business Administration
          (Marketing Concentration) from California State University, Fullerton,
          and current work at{" "}
          <ExternalLink href="/" className="gap-0.5 capitalize">
            Technology Therapy Group
            <IconArrowUpRight size={14} />
          </ExternalLink>{" "}
          as an Administrative/Marketing Assistant.
        </p>

        <p>
          I also work as a freelance social media manager, strategist, and
          content writer, prioritizing women-owned, BIPOC-owned, and LGBTQ-owned
          businesses. I&apos;m super passionate about storytelling through
          digital marketing, and helping businesses owned by marginalized
          individuals grow their online presence organically so they can spend
          more time on their craft rather than on marketing.
        </p>

        <p>
          Outside of marketing, I enjoy listening to K-pop and R&B music, going
          to concerts, reading books and webtoons, thrifting, scrolling through
          Pinterest, and obsessing over all things Sanrio!
        </p>
      </MarkdownWrapper>

      <PhotoGrid width={320} height={480} />
    </PageWrapper>
  );
}
