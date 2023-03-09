import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

interface InputProps {
  label: string;
  [x: string]: any;
  name: string;
}

const ContactFormInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);

  return (
    <FormControl w="full" isInvalid={(meta.error && meta.touched) || undefined}>
      <FormLabel>{label}</FormLabel>

      {props.name != "message" ? (
        <Field as={Input} w="full" mt={1} {...field} {...props} />
      ) : (
        <Field
          as={Textarea}
          display="flex"
          flexDir="column"
          w="full"
          mt={1}
          h={32}
          {...field}
          {...props}
        />
      )}

      <FormErrorMessage
        fontSize="xs"
        fontWeight="medium"
        color="red.500"
        mt={1}
      >
        {meta.error}
      </FormErrorMessage>
    </FormControl>
  );
};

export default ContactFormInput;
