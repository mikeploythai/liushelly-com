import PhotoCardLayout from "@/components/common/PhotoCardLayout";
import { groq } from "next-sanity";

export const metadata = {
  title: "ABOUT",
};

const query = groq`
  *[_type == "photoCard" && title == "About Page"][0] {
    title,
    heading,
    img {
      asset -> {
        url,
        metadata
      }
    },
    bio
  }
`;

export default async function About() {
  const photoCardLayout: JSX.Element = await PhotoCardLayout({ query });

  return <>{photoCardLayout}</>;
}
