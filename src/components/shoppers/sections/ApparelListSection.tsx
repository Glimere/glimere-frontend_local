"use client";

import { Apparel } from "@/types";
import React, { useEffect, useState } from "react";

import ApparelCard from "../cards/ApparelCard";
import ApparelLoading from "./ApparelLoading";

interface ApparelListSectionProps {
  headerTitle: string;
  apparels: Apparel[] | undefined;
  loading: boolean;
}

const ApparelListSection: React.FC<ApparelListSectionProps> = ({
  headerTitle,
  apparels,
  loading,
}) => {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <div className="px-[1.4rem] sm:px-[6.25rem]">
      <div className="flex flex-col gap-[30px]">
        <h2 className="self-start text-center text-xl font-bold sm:text-2xl">
          {headerTitle}
        </h2>
        {isLoading ? (
          <ApparelLoading />
        ) : (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {apparels?.map((apparel) => (
              <div key={apparel._id} className="">
                <ApparelCard apparel={apparel} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApparelListSection;
