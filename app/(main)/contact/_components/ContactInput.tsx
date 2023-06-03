import { Field, useField } from "formik";

type ContactInputProps = {
  [x: string]: any;
  label: string;
  name: string;
};

export default function ContactInput({ label, ...props }: ContactInputProps) {
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
          className="p-2.5 text-sm border border-brand-dark rounded-none focus:outline-none"
        />
      ) : (
        <Field
          as="textarea"
          {...field}
          {...props}
          className="h-32 p-2.5 text-sm border border-brand-dark rounded-none focus:outline-none"
        />
      )}

      {meta.touched && meta.error && (
        <small className="text-red-700 text-xs">{meta.error}</small>
      )}
    </div>
  );
}
