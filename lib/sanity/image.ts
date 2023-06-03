import urlBuilder from "@sanity/image-url";
import sanity from "./client";

export default function sanityImage(source: any) {
  return urlBuilder(sanity).image(source);
}
