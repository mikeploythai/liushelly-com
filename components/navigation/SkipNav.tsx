import { draftMode } from "next/headers";

export default function SkipNav() {
  if (draftMode().isEnabled) return <div className="w-full h-[97px]" />;

  return <div className="w-full h-[60px]" />;
}
