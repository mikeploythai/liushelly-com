"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
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
      onOpenChange={() => setTimeout(() => router.back(), 150)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{slug}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
