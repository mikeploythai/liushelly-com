import { Field, useField } from "formik";

interface InputProps {
  label: string;
  [x: string]: any;
  name: string;
}

export default function ContactFormInput({ label, ...props }: InputProps) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={props.name} className="text-sm font-medium">
        {label}
      </label>

      {props.name != "message" ? (
        <Field
          {...field}
          {...props}
          className="text-sm p-2.5 border border-brand-dark"
        />
      ) : (
        <Field
          as="textarea"
          {...field}
          {...props}
          className="h-32 text-sm p-2.5 border border-brand-dark"
        />
      )}

      {meta.touched && meta.error && (
        <small className="text-red-700 text-xs">{meta.error}</small>
      )}
    </div>
  );
}
