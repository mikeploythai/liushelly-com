import { revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";
import { serverEnv } from "~/env/server.mjs";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (authHeader !== `Bearer ${serverEnv.CRON_SECRET}`)
    return new Response("Unauthorized", { status: 401 });

  const date = new Date();
  const year = date.getFullYear();

  revalidateTag("year");
  return new Response(year.toString(), { status: 200 });
}
