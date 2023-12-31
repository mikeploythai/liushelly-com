import { revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`)
    return new Response("Unauthorized", { status: 401 });

  const year = new Date().getFullYear();

  revalidateTag("year");
  return new Response(year.toString(), { status: 200 });
}
