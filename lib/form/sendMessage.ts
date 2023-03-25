import { useToast } from "@chakra-ui/react";
import { FormikProps, FormikValues } from "formik";

const SendMessageWrapper = (
  setLoading: React.Dispatch<React.SetStateAction<any>>,
  values: FormikValues,
  formik: FormikProps<FormikValues>
) => {
  const toast = useToast();

  const sendMessage = async () => {
    setLoading((currState: Object) => ({
      ...currState,
      text: "Sending message",
    }));

    try {
      const response = await fetch("/api/form/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        toast({
          title: "Message sent!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        formik.resetForm();
      } else if (response.status === 400) {
        response.json().then((data) => {
          toast({
            title: "Couldn't send message!",
            description: data,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: String(error),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setLoading({ state: false, text: "" });
  };

  return { sendMessage };
};

export default SendMessageWrapper;
