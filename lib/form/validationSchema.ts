import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Your name is too short!")
    .max(50, "Your name is too long!")
    .required("You must type a name!"),
  email: Yup.string()
    .email("Your email is invalid!")
    .required("You must type an email!"),
  subject: Yup.string()
    .min(2, "Your subject is too short!")
    .max(50, "Your subject is too long!")
    .required("You must type a subject!"),
  message: Yup.string()
    .min(2, "Your message is too short!")
    .max(280, "Your message is too long!")
    .required("You must type a message!"),
});

export default validationSchema;
