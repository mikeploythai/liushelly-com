import type { SEO } from "~/lib/types";

export default function Copyright({ year, data }: { year: string; data: SEO }) {
  return (
    <hgroup className="col-span-2 sm:mr-auto sm:w-1/2">
      <h2 className="font-heading text-lg font-medium">
        &copy; Shelly Liu {year}
      </h2>

      <p>
        {data.description ??
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus, eius consequatur magni dolores aut laudantium dolorum provident inventore iste."}
      </p>
    </hgroup>
  );
}
