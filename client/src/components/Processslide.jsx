import React, { useState, useEffect } from 'react';
import { processData } from './prrocessData';

export default function Processslide() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaderComplete, setLoaderComplete] = useState(false);

    const previousSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? processData.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === processData.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="w-full gap-[50px] relative flex flex-col sm:flex-row py-[60px] sm:py-[80px] px-[40px] sm:px-[4rem]">

            <div className="flex-[1] flex flex-col w-[300px] sm:w-[500px] h-[250px] sm:h-[520px] items-center relative">
                <div className="relative z-[2] h-[250px] sm:h-full w-full overflow-hidden rounded-[20px] border-solid border-primary-100 border-[2px]">
                    <div className={`h-[250px] sm:h-full w-[300px] sm:w-auto flex flex-row`}
                        style={{
                            width: `${window.innerWidth > 768 ? processData.length * 600 : processData.length * 300}px`,
                            transform: `translateX(-${window.innerWidth > 768 ? currentSlide * 600 : currentSlide * 300}px)`,
                        }}
                    >
                        {processData.map((data, id) => (
                            <div key={id} className={`w-[300px] sm:w-[500px] h-[250px] sm:h-[520px] bg-cover bg-center bg-no-repeat`}
                                style={{ backgroundImage: `url(${data.image})` }}
                            >
                            </div>
                        ))}
                    </div>
                </div>
                <div className={` bg-primary-100 h-[30px] sm:h-[50px] w-[150px] sm:w-[200px] -mt-[15px] sm:-mt-[25px] z-[5] flex justify-center items-center rounded-[10px]`}>
                    {processData.map((data, id) => (
                    <p className={`${id == currentSlide ? "block" : "hidden"} font-bold text-white text-[14px] sm:text-[20px]`} >{data.process}</p>

                ))}
                </div>

            </div>


            <div className='flex-[1] flex flex-col h-full w-full items-start justify-center '>
                <div className="w-[90%] sm:w-[90%] text-left">
                    <h1 className="text-black text-[30px] sm:text-[60px] head-font">Experience Custom-Made Freedom</h1>

                </div>
                <div className="w-[100%] sm:w-[60%] mt-[20px] text-left">
                    <p className="text-black text-[18px]">Make custom requests from skilled fashion creators in seconds and have them made and delivered to you in few days </p>
                </div>
            </div>
        </div>


    );

}

