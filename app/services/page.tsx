"use client";

import FAQ from "@/app/services/(components)/FAQ";
import MainProduct from "./(components)/MainProduct";
import OneTimeServices from "./(components)/OneTimeServices";

export default async function Services() {
  const mainProduct: JSX.Element = await MainProduct();
  const oneTimeServices: JSX.Element = await OneTimeServices();
  const faq: JSX.Element = await FAQ();

  return (
    <>
      {mainProduct}
      {oneTimeServices}
      {faq}
    </>
  );
}
