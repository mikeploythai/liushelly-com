import PhotoCard from "@/components/PhotoCard";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "photoCard" && title == "Home Page"][0] {
    title,
    heading,
    img {
      asset -> {
        url,
        metadata
      }
    },
    cta
  }
`;

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PhotoCard query={query} />
    </>
  );
}
