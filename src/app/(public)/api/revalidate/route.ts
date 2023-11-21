import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { serverEnv } from "~/env/server.mjs";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      serverEnv.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(
        JSON.stringify({ message, isValidSignature, body }, null, 2),
        { status: 401 },
      );
    }

    if (!body?._type) {
      const message = "Bad Request";
      return new Response(JSON.stringify({ message, body }, null, 2), {
        status: 400,
      });
    }

    revalidateTag(body._type);

    return NextResponse.json({ body });
  } catch (err) {
    console.error(err);

    if (err instanceof Error) {
      return new Response(err.message, { status: 500 });
    }
  }
}
