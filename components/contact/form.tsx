import { FormProps } from "@/lib/formTypes";
import validationSchema from "@/lib/validationSchema";
import { Button, useToast, VStack } from "@chakra-ui/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Formik } from "formik";
import { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ContactFormInput from "./input";
import ContactFormVerification from "./verification";

const ContactForm = () => {
  const [loading, setLoading] = useState({
    state: false,
    text: "",
  });
  const [values, setValues] = useState<FormProps | null>(null);
  const toast = useToast();
  const captchaRef = useRef<HCaptcha>(null);

  const formInputs = [
    { label: "What's your first name?", name: "name", type: "text" },
    { label: "What's your email?", name: "email", type: "email" },
    { label: "What do you want to talk about?", name: "subject", type: "text" },
    { label: "Tell me more!", name: "message", type: "text" },
  ];

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          setLoading({ state: true, text: "Verifying" });
          setValues(values);
        } catch (error) {
          toast({
            title: "Error!",
            description: String(error),
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } finally {
          await captchaRef.current?.execute();
        }
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          gap={2}
        >
          {formInputs.map(({ label, name, type }, index) => {
            return (
              <ContactFormInput
                key={index}
                label={label}
                name={name}
                type={type}
              />
            );
          })}

          <Button
            type="submit"
            size="sm"
            w="full"
            spinnerPlacement="end"
            rightIcon={<FaPaperPlane />}
            loadingText={loading.text}
            isLoading={loading.state}
            isDisabled={loading.state}
          >
            Send message
          </Button>

          <ContactFormVerification
            captchaRef={captchaRef}
            setLoading={setLoading}
            values={values}
            formik={formik}
          />
        </VStack>
      )}
    </Formik>
  );
};

export default ContactForm;
