import { revalidateTag } from "next/cache";

export function GET() {
  const year = new Date().getFullYear();

  revalidateTag("year");
  return new Response(year.toString(), { status: 200 });
}
