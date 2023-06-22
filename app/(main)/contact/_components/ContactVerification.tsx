import HCaptcha from "@hcaptcha/react-hcaptcha";
import { FormikValues, useFormikContext } from "formik";
import { toast } from "react-hot-toast";

type ContactVerificationProps = {
  captchaRef: React.RefObject<HCaptcha>;
  values: FormikValues;
  setLoading: (state: boolean) => void;
};

export default function ContactVerification({
  captchaRef,
  values,
  setLoading,
}: ContactVerificationProps) {
  const { resetForm } = useFormikContext();

  async function sendMessage() {
    const res = await fetch("/api/send-message", {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (res.status === 200) {
      resetForm();
      setLoading(false);
      toast.success("Message sent!");
    } else if (res.status === 400) {
      setLoading(false);
      toast.error("Couldn't send message!");
    }
  }

  return (
    <>
      <p className="text-xs text-center -mb-2">
        This form is protected by hCaptcha, and its{" "}
        <a
          href="https://hcaptcha.com/privacy"
          target="_blank"
          referrerPolicy="strict-origin-when-cross-origin"
          className="font-medium hover:underline"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://hcaptcha.com/terms"
          target="_blank"
          referrerPolicy="strict-origin-when-cross-origin"
          className="font-medium hover:underline"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>

      <HCaptcha
        ref={captchaRef}
        sitekey={process.env.NEXT_PUBLIC_SITEKEY!}
        size="invisible"
        onVerify={sendMessage}
        onError={() => {
          setLoading(false);
          toast.error("Error occured!");
        }}
        onChalExpired={() => {
          setLoading(false);
          toast("Challenge expired!");
        }}
        onClose={() => setLoading(false)}
      />
    </>
  );
}
