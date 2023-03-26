import testimonialData from "@/lib/data/testimonialData";
import { TestimonialProps } from "@/lib/types/testimonialProps";
import { useState } from "react";

const TestimonialLogic = () => {
  const [index, setIndex] = useState({ odd: 0, even: 1 });
  const [opacity, setOpacity] = useState({ odd: 1, even: 0 });
  const transitionTime = 200;

  const testimonials: TestimonialProps = {
    odd: {
      data: testimonialData.filter(({}, index) => index % 2 === 0),
      index: index.odd,
      opacity: opacity.odd,
    },
    even: {
      data: testimonialData.filter(({}, index) => index % 2 !== 0),
      index: index.even,
      opacity: opacity.even,
    },
  };

  const handlePrev = () => {
    if (opacity.odd === 1) {
      setOpacity({ odd: 0, even: 1 });

      setTimeout(() => {
        if (
          testimonials.odd.data[index.odd] ===
          testimonials.odd.data[testimonials.odd.data.length - 1]
        ) {
          setIndex((prevState) => ({
            ...prevState,
            odd: 0,
          }));
        } else {
          setIndex((prevState) => ({
            ...prevState,
            odd: index.odd + 1,
          }));
        }
      }, transitionTime);
    } else {
      setOpacity({ odd: 1, even: 0 });

      setTimeout(() => {
        if (
          testimonials.even.data[index.even] ===
          testimonials.even.data[testimonials.even.data.length - 1]
        ) {
          setIndex((prevState) => ({
            ...prevState,
            even: 0,
          }));
        } else {
          setIndex((prevState) => ({
            ...prevState,
            even: index.even + 1,
          }));
        }
      }, transitionTime);
    }
  };

  const handleNext = () => {
    if (opacity.odd === 1) {
      setOpacity({ odd: 0, even: 1 });

      if (testimonials.even.data[index.even] === testimonials.even.data[0]) {
        setIndex((prevState) => ({
          ...prevState,
          even: testimonials.even.data.length - 1,
        }));
      } else {
        setIndex((prevState) => ({
          ...prevState,
          even: index.even - 1,
        }));
      }
    } else {
      setOpacity({ odd: 1, even: 0 });

      if (testimonials.odd.data[index.odd] === testimonials.odd.data[0]) {
        setIndex((prevState) => ({
          ...prevState,
          odd: testimonials.odd.data.length - 1,
        }));
      } else {
        setIndex((prevState) => ({
          ...prevState,
          odd: index.odd - 1,
        }));
      }
    }
  };

  return { testimonials, transitionTime, handlePrev, handleNext };
};

export default TestimonialLogic;
