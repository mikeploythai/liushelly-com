"use client";

import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MarkdownWrapper from "~/app/_components/markdown-wrapper";
import { buttonVariants } from "~/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/app/_components/ui/dialog";

export default function ServiceModal({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const router = useRouter();

  return (
    <Dialog
      defaultOpen={true}
      onOpenChange={() => setTimeout(() => router.back(), 300)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Service Preview</DialogTitle>
        </DialogHeader>

        <article className="space-y-3 px-3">
          <header className="relative min-h-[208px] sm:aspect-[16/6] sm:min-h-0">
            <Image
              src=""
              alt=""
              className="border border-indigo-950 bg-white"
              fill
            />
          </header>

          <MarkdownWrapper
            theme="secondary"
            className="border-dashed border-violet-200 prose-headings:capitalize md:border md:p-3"
          >
            <h2>
              <b>DONE FOR YOU</b>
              <br></br>
              social media management
            </h2>

            <p>
              This is my flagship service, where I get hands-on and take charge
              of your social media platforms!
            </p>

            <p>
              With four different tiers to choose from, you can select the one
              that&apos;s best suited for your business&apos; budget and
              specific needs. Each tier offers different levels of account
              management, post creation, and audience engagement, ensuring
              maximum flexibility and customization.
            </p>
          </MarkdownWrapper>
        </article>

        <DialogFooter>
          <a
            href={`/services/${slug}`}
            className={buttonVariants({
              variant: "secondary",
              class: "w-full",
            })}
          >
            View details
            <IconChevronRight size={18} className="ml-auto" />
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
