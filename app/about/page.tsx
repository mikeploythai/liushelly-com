import PhotoCard from "@/components/PhotoCard";
import { groq } from "next-sanity";

export const metadata = {
  title: "ABOUT",
};

const query = groq`
  *[_type == "photoCard" && title == "About Page"][0] {
    title,
    heading,
    img { asset-> },
    bio
  }
`;

export default function About() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PhotoCard query={query} />
    </>
  );
}
