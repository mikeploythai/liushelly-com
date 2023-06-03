import {
  heroQuery,
  instagramQuery,
  marqueeQuery,
  testimonialQuery,
} from "./queries/homeQueries";
import serviceQuery from "./queries/servicesQuery";
import sanity from "./sanity/client";

export default async function fetchHomeData() {
  const hero = await sanity.fetch(heroQuery);
  const marquee = await sanity.fetch(marqueeQuery);
  const service = await sanity.fetch(serviceQuery);
  const testimonial = await sanity.fetch(testimonialQuery);
  const instagram = await sanity.fetch(instagramQuery);

  return { hero, marquee, service, testimonial, instagram };
}
