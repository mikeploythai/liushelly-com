import type { PreviewSecret } from "~/lib/types";

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { isValidSecret } from "sanity-plugin-iframe-pane/is-valid-secret";
import { client } from "sanity-studio/lib/client";
import { clientEnv } from "~/env/client.mjs";
import { serverEnv } from "~/env/server.mjs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (!secret) return new Response("Invalid Secret.", { status: 401 });

  const authenticatedClient = client.withConfig({
    token: serverEnv.SANITY_READ_TOKEN,
  });

  const validSecret = await isValidSecret(
    authenticatedClient,
    clientEnv.NEXT_PUBLIC_SANITY_PREVIEW_SECRET as PreviewSecret,
    secret,
  );

  if (!validSecret) return new Response("Invalid Secret.", { status: 401 });

  draftMode().enable();
  redirect(slug ? `/${slug}` : "/");
}
