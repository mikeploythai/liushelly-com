type FrameProps = {
  children: React.ReactNode;
  isHoverable?: boolean;
  isPadded?: boolean;
  colorTheme?: "light" | "dark";
};

function setColorTheme(colorTheme?: string) {
  switch (colorTheme) {
    case "light":
      return "text-brand-dark border-brand-dark bg-brand-light shadow-brand-dark md:hover:shadow-brand-dark";
    case "dark":
      return "text-brand-light border-brand-light bg-brand-dark shadow-brand-light md:hover:shadow-brand-light";
    default:
      return "text-brand-dark border-brand-dark bg-brand-light shadow-brand-dark md:hover:shadow-brand-dark";
  }
}

export default function Frame({
  children,
  isHoverable,
  isPadded,
  colorTheme,
}: FrameProps) {
  const hoverAttr =
    isHoverable &&
    "md:group md:transition md:duration-500 md:ease-in-out md:hover:shadow-hover";
  const padAttr = isPadded && "p-4";
  const theme = setColorTheme(colorTheme);

  return (
    <div
      className={`relative flex flex-col w-full mr-2 mb-2 gap-4 border shadow-normal ${hoverAttr} ${padAttr} ${theme}`}
    >
      {children}
    </div>
  );
}
