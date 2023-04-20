import SendMessageWrapper from "@/lib/form/sendMessage";
import { Link, Text, useToast, VisuallyHidden } from "@chakra-ui/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { FormikProps, FormikValues } from "formik";

interface VerificationProps {
  captchaRef: React.RefObject<HCaptcha>;
  setLoading: ({ state, text }: { state: boolean; text: string }) => void;
  values: FormikValues;
  formik: FormikProps<any>;
}

const ContactFormVerification = ({
  captchaRef,
  setLoading,
  values,
  formik,
}: VerificationProps) => {
  const toast = useToast();
  const { sendMessage } = SendMessageWrapper(setLoading, values, formik);
  const key = String(process.env.NEXT_PUBLIC_SITEKEY);

  return (
    <>
      <Text fontSize="xs" textAlign="center">
        This form is protected by hCaptcha, and its{" "}
        <Link
          href="https://hcaptcha.com/privacy"
          referrerPolicy="strict-origin-when-cross-origin"
          fontWeight="semibold"
          isExternal
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="https://hcaptcha.com/terms"
          referrerPolicy="strict-origin-when-cross-origin"
          fontWeight="semibold"
          isExternal
        >
          Terms of Service
        </Link>{" "}
        apply.
      </Text>

      <VisuallyHidden>
        <HCaptcha
          ref={captchaRef}
          sitekey={key}
          size="invisible"
          onVerify={sendMessage}
          onError={() => {
            setLoading({ state: false, text: "" });
            toast({
              title: "Error occured!",
              description: "Please try again.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }}
          onClose={() => {
            setLoading({ state: false, text: "" });
            toast({
              title: "Challenge closed!",
              status: "info",
              duration: 5000,
              isClosable: true,
            });
          }}
          onChalExpired={() => {
            setLoading({ state: false, text: "" });
            toast({
              title: "Challenge expired!",
              description: "Please try again.",
              status: "warning",
              duration: 5000,
              isClosable: true,
            });
          }}
        />
      </VisuallyHidden>
    </>
  );
};

export default ContactFormVerification;
