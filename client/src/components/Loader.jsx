import React from 'react'
import { GooSpinner } from "react-spinners-kit";

export default function Loader() {
    return (
        <div className="h-[100vh] w-full flex justify-center items-center bg-black-100">
            <GooSpinner
                size={60}
                color="#ED7534"
                loading={true}
            />
        </div>
    )
}
