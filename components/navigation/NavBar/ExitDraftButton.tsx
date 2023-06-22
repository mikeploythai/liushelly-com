import { draftMode } from "next/headers";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function ExitDraftButton() {
  return (
    <>
      {draftMode().isEnabled && (
        <a
          href="/api/exit-draft"
          className="flex items-center justify-center p-2.5 gap-2 uppercase font-medium text-start text-xs text-brand-light bg-brand-dark transition ease-in-out hover:bg-brand-dark/90 active:bg-brand-dark/80"
        >
          📝 Exit draft mode
          <FaAngleDoubleRight />
        </a>
      )}
    </>
  );
}
