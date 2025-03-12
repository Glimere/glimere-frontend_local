"use client";

import GlimereLoader from "@/components/loader/spinnerLoader";
import useFetch from "@/hooks/useFetch";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { useWindowWidth } from "@/hooks/useWindowsWidth";
import { ApparelData } from "@/types";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import { useState } from "react";

import ApparelDesktop from "./ApparelDesktop";
import ApparelMobile from "./ApparelMobile";

interface ViewProductProps {
  params: { id: string };
}

const ViewApparel: NextPage<ViewProductProps> = ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    data: apparelData,
    loading,
    // error,
  } = useFetch<ApparelData>(`/apparels/${params.id}`);
  const { isDesktop } = useWindowWidth();

  const [threedToggle, setThreedToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);

  const modelUrl = apparelData?.data?.models[0]?.file?.url ?? "";
  return (
    <AnimatePresence>
      <div className="">
        <div className="relative z-[4] h-[90vh] sm:h-screen overflow-hidden">
          <div className="absolute h-full w-full">
            {loading ? (
              <GlimereLoader />
            ) : (
              <>
                {apparelData?.data && isDesktop && (
                  <ApparelDesktop
                    apparel={apparelData?.data}
                    threedToggle={threedToggle}
                    editToggle={editToggle}
                    setThreedToggle={setThreedToggle}
                    setEditToggle={setEditToggle}
                    modelUrl={renderImageUrl(modelUrl)}
                  />
                )}
                {apparelData?.data && !isDesktop && (
                  <ApparelMobile
                    apparel={apparelData?.data}
                    threedToggle={threedToggle}
                    editToggle={editToggle}
                    setThreedToggle={setThreedToggle}
                    setEditToggle={setEditToggle}
                    modelUrl={renderImageUrl(modelUrl)}
                  />
                )}
              </>
            )}
          </div>

          <div className="absolute bottom-0 w-full h-[75px] bg-dark rounded-[20px]"></div>
        </div>

        <div className="relative z-[5]">
          <div className="px-[10px] flex flex-col gap-[20px] mt-[-12px]">
            <div className="h-[450px] bg-light rounded-t-[20px]"></div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ViewApparel;
