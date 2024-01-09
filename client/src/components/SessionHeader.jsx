import React from 'react'
import gucci from "./../assets/images/gucci.png"
import CountdownTimer from './CountdownTimer';



export default function SessionHeader(props) {
    return (
        <>
            {props.type === "timeline" ?

                <div className="flex justify-between items-center mb-[20px] bg-primary-100 px-[20px] py-[10px] rounded-[5px]">
                    <div className="flex-[7] max-[727px]:flex-[7] max-[1050px]:flex-[8] flex flex-col sm:flex-row sm:justify-between ">
                        <div className="flex items-center">
                            <img src={gucci} alt="" className='w-[15px] sm:w-[30px] mr-[15px]' />
                            <h1 className='text-[14px] sm:text-[18px] text-white-100 font-semibold'>{props.title}</h1>
                        </div>
                        <CountdownTimer headerType={props.type} />
                    </div>
                    <div className="flex-[2] sm:flex-[3] flex justify-end">
                        <button className="bg-transparent rounded-md text-[12px] sm:text-[14px] text-white-100">View All</button>
                    </div>
                </div>

                : props.type === "single" ?
                    <div className="flex justify-center items-center mb-[20px]">
                        <h1 className='text-[14px] sm:text-[20px] font-bold'>{props.title}</h1>
                    </div>

                    : props.type === "view" ? <div className="flex justify-between items-center mb-[20px]">
                        <h1 className='text-[14px] sm:text-[20px] font-bold'>{props.title}</h1>
                        <button className="bg-transparent rounded-md text-[12px] sm:text-[14px]">View All</button>
                    </div> : ""
            }
        </>
    )
}
