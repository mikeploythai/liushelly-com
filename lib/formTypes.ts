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
