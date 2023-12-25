"use client";

import { useEffect, useRef, useState } from "react";
import defaultTheme from "tailwindcss/defaultTheme";
import { DrawerClose } from "../ui/drawer";

export default function AutoCloseDrawer() {
  const [width, setWidth] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width >= parseInt(defaultTheme.screens.sm)) buttonRef.current?.click();

  return <DrawerClose ref={buttonRef} />;
}
