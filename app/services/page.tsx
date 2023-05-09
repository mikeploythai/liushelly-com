"use client";

import MainProduct from "@/components/services/MainProduct";
import OneTimeServices from "@/components/services/OneTimeServices";

export default async function Services() {
  const mainProduct: JSX.Element = await MainProduct();
  const oneTimeServices: JSX.Element = await OneTimeServices();

  return (
    <>
      {mainProduct}
      {oneTimeServices}
    </>
  );
}
