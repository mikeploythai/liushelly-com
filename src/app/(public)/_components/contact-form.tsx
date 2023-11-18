"use client";

import { IconSend } from "@tabler/icons-react";
import { useRef, type InputHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "~/lib/cn";
import { contactFormSchema } from "~/lib/contact-form/schema";
import sendMessage from "~/lib/contact-form/send-message";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  async function action(form: FormData) {
    const entries = Object.fromEntries(form.entries());
    const parsedEntries = contactFormSchema.safeParse(entries);

    if (!parsedEntries.success) {
      parsedEntries.error.issues.map((issue) =>
        toast({
          title: "Error!",
          description: issue.message,
          variant: "destructive",
        }),
      );
      return;
    }

    const res = await sendMessage(parsedEntries.data);
    if (res?.error) {
      toast({
        title: "Error!",
        description: res.error,
        variant: "destructive",
      });
      return;
    }

    toast({ title: "Success!", description: "Your message has been sent." });
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action} className="grid gap-3">
      {formFields.map((field) => (
        <ContactFormFields key={field.name} field={field} />
      ))}

      <ContactFormSubmit />
    </form>
  );
}

function ContactFormFields({ field }: { field: FormField }) {
  const { pending } = useFormStatus();

  const styles = cn(
    "border-current transition focus:ring-2 focus:ring-current",
    field.name === "message" && "min-h-[160px]",
  );

  return (
    <div className="grid gap-1.5">
      <label htmlFor={field.name} className="text-sm font-medium">
        {field.labelText} *
      </label>

      {field.name !== "message" ? (
        <input
          name={field.name}
          id={field.name}
          type={field.type}
          placeholder={field.placeholder}
          disabled={pending}
          className={styles}
        />
      ) : (
        <textarea
          name={field.name}
          id={field.name}
          placeholder={field.placeholder}
          disabled={pending}
          className={styles}
        />
      )}
    </div>
  );
}

function ContactFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {!pending ? "Send message" : "Sending message"}
      <IconSend size={18} className="ml-auto" />
    </Button>
  );
}

interface FormField extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const formFields: FormField[] = [
  {
    name: "name",
    labelText: "What's your name?",
    type: "text",
    placeholder: "John",
  },
  {
    name: "email",
    labelText: "What's your email address?",
    type: "email",
    placeholder: "john@doe.com",
  },
  {
    name: "subject",
    labelText: "What would you like to talk about?",
    type: "text",
    placeholder: "I'd like to...",
  },
  {
    name: "message",
    labelText: "Tell me more!",
    placeholder: "Hello! I wanted to inquire about...",
  },
];
