"use client";

import { NextPage } from "next";
import useFetch from "@/hooks/useFetch";
import SpinnerLoader from "@/components/loader/spinnerLoader";
import { AnimatePresence } from "framer-motion";
import { ApparelData } from "@/types";
import ApparelDesktop from "./ApparelDesktop";
import { useWindowWidth } from "@/hooks/useWindowsWidth";
import ApparelMobile from "./ApparelMobile";
import { useState } from "react";


interface ViewProductProps {
    params: { id: string };
}

const ViewApparel: NextPage<ViewProductProps> = ({ params }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: apparelData, loading, error } = useFetch<ApparelData>(
        `/apparels/${params.id}`
    );
    const { isDesktop } = useWindowWidth();


    const [threedToggle, setThreedToggle] = useState(false);
    const [editToggle, setEditToggle] = useState(false);


    const modelUrl = apparelData?.data?.models[0]?.file?.url ?? "";
    return (
        <AnimatePresence>
            <div className="relative h-screen overflow-hidden z-[4]">

                <div className="absolute h-full w-full">
                    {loading ? (
                        <SpinnerLoader />
                    ) : (
                        <>
                            {apparelData?.data && isDesktop && 
                            <ApparelDesktop 
                            apparel={apparelData?.data} 
                            threedToggle={threedToggle}
                            editToggle={editToggle}
                            setThreedToggle={setThreedToggle}
                            setEditToggle={setEditToggle}
                            modelUrl={modelUrl}
                            />}
                            {apparelData?.data && !isDesktop && 
                            <ApparelMobile 
                            apparel={apparelData?.data} 
                            threedToggle={threedToggle}
                            editToggle={editToggle}
                            setThreedToggle={setThreedToggle}
                            setEditToggle={setEditToggle}
                            modelUrl={modelUrl}
                            />}
                        </>
                    )}
                </div>
            </div>
        </AnimatePresence>
    );
};

export default ViewApparel;
