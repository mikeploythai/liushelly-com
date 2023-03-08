import HCaptcha from "@hcaptcha/react-hcaptcha";
import { FormikProps } from "formik";

export interface FormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface InputProps {
  label: string;
  [x: string]: any;
  name: string;
}

export interface VerificationProps {
  captchaRef: React.RefObject<HCaptcha>;
  setLoading: React.Dispatch<React.SetStateAction<any>>;
  values: FormProps | null;
  formik: FormikProps<any>;
}