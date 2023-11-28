import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import NavbarItems from "./navbar-items";
import SocialLinks from "./social-links";
import { Button, buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-b-indigo-950 bg-violet-200">
      <noscript className="inline-flex w-full justify-center bg-indigo-950 p-2 text-center text-sm font-medium text-violet-200">
        Please enable JavaScript for the best experience.
      </noscript>

      <div className="mx-auto flex max-w-screen-2xl justify-between">
        <Link
          href="/"
          className={buttonVariants({
            size: "lg",
            variant: "ghost",
            class: "font-heading capitalize",
          })}
        >
          Shelly Liu
        </Link>

        <NavbarItems isDrawer={false} />

        <Sheet>
          <SheetTrigger className="block sm:hidden" asChild>
            <Button>
              <IconMenu />
              <span className="sr-only">Navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>

            <NavbarItems isDrawer={true} />

            <SheetFooter>
              <SocialLinks />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
