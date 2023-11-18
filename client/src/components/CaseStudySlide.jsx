import React, { useState } from 'react'
import { caseStudyData } from './caseStudyData'

export default function CaseStudySlide() {

    const [currentSlide, setCurrentSlide] = useState(0)


    const previousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)

    }

    //   style={{ transform: `translateX(-${currentSlide * 33.4}%)` }}

    return (
        <>
            <div className="flex flex-[4] sm:flex-[2] flex-col sm:flex-row gap-[20px] w-full sm:w-[65%]">
                <div className="h-[300px] w-full sm:w-[450px] flex-[6] sm:flex-[1.8] bg-white rounded-[10px]"
                    // {...caseStudyData?.map((data, id) => (
                    //     <div key={id} className="w-full h-full bg-cover bg-center bg-no-repeat absolute bg-black"
                    //         style={{ backgroundImage: `url(${data.fashionItems.image})` }}
                    //     ></div>
                    // ))}
                ></div>
                <div className="flex-1 flex flex-row sm:flex-col gap-[20px] h-auto sm:h-[300px]">
                    {caseStudyData?.map((data, id) => (
                        <div key={id} className={`w-full h-[50px] sm:h-[100px] rounded-[10px] ${id === currentSlide ? "bg-white" : ""}`}></div>
                    ))}

                </div>
            </div>
        </>
    )
}
