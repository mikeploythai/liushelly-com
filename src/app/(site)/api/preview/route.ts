import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { isValidSecret } from "sanity-plugin-iframe-pane/is-valid-secret";
import { client } from "sanity-studio/lib/client";
import { serverEnv } from "~/env/server.mjs";

const routesWithSlugs = ["services", "portfolio"];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");

  if (!secret) return new Response("Invalid Secret.", { status: 401 });

  const authenticatedClient = client.withConfig({
    token: serverEnv.SANITY_API_READ_TOKEN,
  });

  const validSecret = await isValidSecret(
    authenticatedClient,
    "preview.secret",
    secret,
  );

  if (!validSecret) return new Response("Invalid Secret.", { status: 401 });

  draftMode().enable();

  if (slug) {
    if (type && routesWithSlugs.includes(type)) redirect(`/${type}/${slug}`);
    else redirect(`/${slug}`);
  } else {
    redirect("/");
  }
}
