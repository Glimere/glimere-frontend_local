"use client"

import LandingNav from "@/components/nav/LandingNav";
import React, { useEffect, useRef, useState } from "react";
import Creators from "@/components/landing/creators/Creators";
import Shoppers from "@/components/landing/shoppers/Shoppers";
import { useSearchParams } from "next/navigation";
import LandingFooter from "@/components/landing/LandingFooter";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("shoppers"); 
  const searchParameters = useSearchParams();
  const viewertype = searchParameters.get("fashion"); 

  // {Host}?fashion=creators
  // {Host}?fashion=shoppers

  useEffect(() => {
    if (viewertype === "creators" || viewertype === "shoppers") {
      setPage(viewertype);
    }
  }, [viewertype]);

  return (
    <>
      <LandingNav setOpen={setOpen} setPage={setPage} page={page} />

      {page === "shoppers" ? (
        <Shoppers />
      ) : page === "creators" ? (
        <Creators />
      ) : null}
      <LandingFooter/>
    </>
  );
}
