"use client";

import { NextPage } from "next";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import ApparelViewer from "@/components/3D/apparelView";
import ProductViewCarousel from "@/components/carousel/ProductViewCarousel";
import SpinnerLoader from "@/components/loader/spinnerLoader";
import ApparelDetails from "@/components/apparel/ApparelDetails";
import ApparelCheckout from "@/components/apparel/ApparelCheckout";
import ApparelEditBar from "@/components/apparel/ApparelEditBar";
import type { Model, Apparel } from "@/types";
import { AnimatePresence } from "framer-motion";
import ApparelEdit from "@/components/3D/apparelEdit";
import GoBack from "@/components/GoBack";

interface ViewProductProps {
  params: { id: string };
}

interface ApparelData {
  data: Apparel;
}

const ViewProduct: NextPage<ViewProductProps> = ({ params }) => {
  const { data, loading, error } = useFetch<ApparelData>(
    `/apparels/${params.id}`
  );
  const [threedToggle, setThreedToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);

  const modelUrl = data?.data?.models[0]?.file?.url;

  return (
    <AnimatePresence>
      <div className="relative h-screen overflow-hidden z-[4]">
        
        <div className="absolute h-full w-full">
          {loading ? (
            <SpinnerLoader />
          ) : (
            <>
            <div className="z-[4] absolute top-[50px] pl-[5.2rem]"><GoBack text="Back"/></div>
            
              {threedToggle && editToggle && data?.data ? (
                <ApparelEdit apparel={data.data} />
              ) : data?.data ? (
                <ApparelDetails apparel={data.data} />
              ) : null}

              {data?.data && (
                <>
                  <ApparelCheckout apparel={data.data} />
                  <ApparelEditBar
                    threeDToggle={threedToggle}
                    setThreeDToggle={setThreedToggle}
                    editToggle={editToggle}
                    setEditToggle={setEditToggle}
                  />
                </>
              )}

              {threedToggle ? (
                modelUrl ? (
                  <ApparelViewer modelUrl={modelUrl} editToggle={editToggle} />
                ) : (
                  <SpinnerLoader />
                )
              ) : data?.data ? (
                <ProductViewCarousel apparel={data.data} />
              ) : (
                <SpinnerLoader />
              )}
            </>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ViewProduct;
