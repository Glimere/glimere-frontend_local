import React, { useEffect, useState } from 'react';
import { caseStudyData } from './caseStudyData';

export default function CaseStudySlide() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const previousSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? caseStudyData.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === caseStudyData.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <>
            <div className="flex flex-[4] sm:flex-[2] flex-col sm:flex-row gap-[20px] w-full sm:w-[65%]">
                <div className="h-[400px] w-full sm:w-[450px] flex-[6] sm:flex-[1.8] flex flex-col gap-[20px]">
                    <div className="rounded-[10px] overflow-hidden h-[300px] sm:h-[400px]">
                        <div
                            className="h-[300px] sm:h-full flex flex-row duration-300"
                            style={{
                                width: `${caseStudyData.length * 450}px`,
                                transform: `translateX(-${currentSlide * 450}px)`,
                            }}
                        >
                            {caseStudyData.map((data, id) => (
                                <div
                                    key={id}
                                    className="w-[450px] h-[300px] bg-cover bg-center bg-no-repeat bg-black"
                                    style={{ backgroundImage: `url(${data.fashionItems.image})` }}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-[90px] bg-white rounded-[10px] flex flex-row items-center pl-[15px]">
                        <div className="h-full py-[10px]">
                            <div className="h-full w-[10px] rounded-full bg-[#ed7534]"></div>
                        </div>

                        <div className="overflow-hidden">
                            <div className="flex flex-row items-center"
                                style={{
                                    width: `${caseStudyData.length * 450}px`,
                                    transform: `translateX(-${currentSlide * 450}px)`,
                                }}
                            >
                                {caseStudyData.map((data, id) => {
                                    return (
                                        <div key={id} className="w-[450px] h-[120px] p-[20px] flex flex-row items-center" >
                                            <p className="text-[17px] text-black">{data.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>


                    </div>
                </div>
                <div className="flex-1 flex flex-row sm:flex-col gap-[20px] h-auto sm:h-[300px]">
                    {caseStudyData?.map((data, id) => (
                        <div
                            key={id}
                            className={`w-full h-[50px] flex justify-center items-center sm:h-[100px] rounded-[10px] p-[15px] duration-300 ${id === currentSlide ? 'bg-black' : 'bg-transparent'}`}
                        >
                            <p className={`text-[17px] font-bold duration-300 ${id === currentSlide ? ' text-white' : 'text-transparent'}`}>{data.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
