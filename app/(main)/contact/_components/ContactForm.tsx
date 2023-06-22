"use client";

import validationSchema from "@/lib/validationSchema";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Form, Formik, FormikValues } from "formik";
import { useRef, useState } from "react";
import { FaAngleDoubleRight, FaSpinner } from "react-icons/fa";
import ContactInput from "./ContactInput";
import ContactVerification from "./ContactVerification";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<FormikValues>([]);
  const captchaRef = useRef<HCaptcha>(null);

  const formInputs = [
    { label: "What's your first name?", name: "name", type: "text" },
    { label: "What's your email?", name: "email", type: "email" },
    { label: "What do you want to talk about?", name: "subject", type: "text" },
    { label: "Tell me more!", name: "message", type: "text" },
  ];

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        try {
          setLoading(true);
          setValues(values);

          captchaRef.current?.execute();
        } catch (error) {
          if (error instanceof Error) alert(error.message);
        }
      }}
    >
      <Form className="flex flex-col gap-4">
        {formInputs.map(({ label, name, type }, index) => (
          <ContactInput key={index} label={label} name={name} type={type} />
        ))}

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center p-2.5 gap-2 uppercase font-medium text-start text-xs text-brand-light bg-brand-dark transition ease-in-out hover:bg-brand-dark/90 active:bg-brand-dark/80 disabled:opacity-50"
          >
            {loading ? (
              <>
                Sending...
                <FaSpinner className="animate-spin" />
              </>
            ) : (
              <>
                Send message
                <FaAngleDoubleRight />
              </>
            )}
          </button>

          <ContactVerification
            captchaRef={captchaRef}
            setLoading={setLoading}
            values={values}
          />
        </div>
      </Form>
    </Formik>
  );
}
