"use client";

import { IconSend } from "@tabler/icons-react";
import { useRef } from "react";
import { sendMessage } from "~/lib/actions";
import { cn } from "~/lib/cn";
import { sendMessageSchema } from "~/lib/zod-schemas";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  async function action(form: FormData) {
    const entries = Object.fromEntries(form.entries());
    const parsedEntries = sendMessageSchema.safeParse(entries);

    if (!parsedEntries.success) {
      parsedEntries.error.issues.map((issue) =>
        toast({ title: "Error!", description: issue.message }),
      );
      return;
    }

    const res = await sendMessage(parsedEntries.data);
    if (res?.error) toast({ title: "Error!", description: res.error });

    toast({ title: "Success!", description: "Your message has been sent." });
    formRef.current?.reset();
  }

  const inputs = [
    { name: "name", label: "What's your name?" },
    { name: "email", label: "What's your email address?" },
    { name: "subject", label: "What would you like to talk about?" },
    { name: "message", label: "Tell me more!" },
  ];

  return (
    <form ref={formRef} action={action} className="grid gap-3">
      {inputs.map(({ name, label }) => {
        const styles = cn(
          "border-current transition focus:ring-2 focus:ring-current",
          name === "message" && "min-h-[160px]",
        );

        return (
          <div key={name} className="grid gap-1.5">
            <label htmlFor={name} className="text-sm font-medium">
              {label} *
            </label>
            {name !== "message" ? (
              <input name={name} id={name} className={styles} />
            ) : (
              <textarea name={name} id={name} className={styles} />
            )}
          </div>
        );
      })}

      <Button type="submit" className="w-full">
        Send message
        <IconSend size={18} className="ml-auto" />
      </Button>
    </form>
  );
}
