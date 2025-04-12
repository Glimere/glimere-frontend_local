"use client";

import Creators from "@/components/landing/creators/Creators";
import LandingFooter from "@/components/landing/LandingFooter";
import Shoppers from "@/components/landing/shoppers/Shoppers";
import LandingNav from "@/components/nav/LandingNav";
import { useState } from "react";

interface HomeProps {
  initialPage: string;
}

export default function Home({ initialPage }: HomeProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(initialPage);


  return (
    <>
      <LandingNav setOpen={setOpen} setPage={setPage} page={page} />
      {page === "shoppers" ? (
        <Shoppers />
      ) : page === "creators" ? (
        <Creators />
      ) : null}
      <LandingFooter />
    </>
  );
}
