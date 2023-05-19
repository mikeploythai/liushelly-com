"use client";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const navBar: JSX.Element = await NavBar();
  const footer: JSX.Element = await Footer();

  return (
    <>
      {navBar}
      <main className="flex flex-1 flex-col w-full justify-center items-center">
        {children}
      </main>
      {footer}
    </>
  );
}
