export interface TestimonialDataProps {
  name: string;
  role: string;
  comment: string;
}

export interface TestimonialContentProps {
  data: Array<TestimonialDataProps>;
  index: number;
  opacity: number;
}

export interface TestimonialProps {
  odd: TestimonialContentProps;
  even: TestimonialContentProps;
}
