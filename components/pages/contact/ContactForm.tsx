import validationSchema from "@/lib/form/validationSchema";
import { Button, useToast, VStack } from "@chakra-ui/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Formik, FormikValues } from "formik";
import { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ContactFormInput from "./ContactFormInput";
import ContactFormVerification from "./ContactFormVerification";

const ContactForm = () => {
  const [loading, setLoading] = useState({
    state: false,
    text: "",
  });
  const [values, setValues] = useState<FormikValues>([]);
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
          spacing={4}
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

          <VStack w="full">
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
        </VStack>
      )}
    </Formik>
  );
};

export default ContactForm;
