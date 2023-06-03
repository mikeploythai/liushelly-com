import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

type LinkButtonProps = {
  href: string;
  isExternal?: boolean;
  colorTheme?: "light" | "dark";
  children: React.ReactNode;
};

export default function LinkButton({
  href,
  isExternal,
  colorTheme = "light",
  children,
}: LinkButtonProps) {
  const bgColor =
    colorTheme === "dark"
      ? "bg-brand-light hover:bg-brand-light/90 active:bg-brand-light/80"
      : "bg-brand-dark hover:bg-brand-dark/90 active:bg-brand-dark/80";

  return (
    <>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          referrerPolicy="strict-origin-when-cross-origin"
          aria-disabled={href === undefined}
          className={`flex items-center justify-center mt-auto p-2.5 gap-2 uppercase font-medium text-start text-xs text-brand-${colorTheme} transition ease-in-out ${bgColor} aria-disabled:opacity-50`}
        >
          {children}
          <FaAngleDoubleRight />
        </a>
      ) : (
        <Link
          href={href}
          aria-disabled={href === undefined}
          className={`flex items-center justify-center mt-auto p-2.5 gap-2 uppercase font-medium text-start text-xs text-brand-${colorTheme} transition ease-in-out ${bgColor} aria-disabled:opacity-50`}
        >
          {children}
          <FaAngleDoubleRight />
        </Link>
      )}
    </>
  );
}
