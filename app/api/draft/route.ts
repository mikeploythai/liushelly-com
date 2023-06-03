import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const goTo = searchParams.get("goTo");
  const redirectPath = goTo !== null ? `/${goTo}` : "/";

  draftMode().enable();
  redirect(redirectPath);
}
