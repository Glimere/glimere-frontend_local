import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { ProductCard } from './ProductCard';
import { TiThListOutline } from "react-icons/ti";

export default function SearchList(props) {

    const [sortDropdown, setSortDropdown] = useState(false)
    const [sortValue, setSortValue] = useState("")

    return (
        <>
            <div className="w-[270px] bg-white shadow-md flex flex-col rounded-[10px] p-[30px]"></div>


            <div className="flex-[65] w-[65%]">
                <div className="flex relative justify-between items-center z-[20]">
                    <div className="pb-[10px]">
                        <p className="text-[#000000] text-[12px] font-bold"><span>1</span> - <span>16</span> over <span>7000</span> result for "{props.apparelSearch}" </p>
                    </div>

                    <div className="flex flex-row items-center">
                        <p className='text-[12px] mr-[7px]'>Sort by:</p>
                        <div className="relative bg-white mr-[7px] rounded-[5px] border-solid border-black border-[1px]">
                            <div className="flex flex-row items-center py-[5px] px-[15px] cursor-pointer"
                                onClick={() => {
                                    setSortDropdown(!sortDropdown)
                                }}
                            >
                                <p className='text-[11px] mr-[5px]'>Best match</p>
                                <IoIosArrowDown className='text-[11px] text-black' />
                            </div>

                            <div className={`absolute w-full top-0 mt-[27px] ${sortDropdown ? "hidden" : ""} rounded-[5px] border-solid border-black border-x-[1px] border-b-[1px] bg-white`}>
                                <div className="w-full h-[25px] flex justify-center items-center  text-center hover:bg-gray-300"
                                onClick={()=> {setSortValue("Price (Low to High)")}}
                                >
                                    <span className='text-[11px]'>Price (Low to High)</span>
                                </div>
                                <div className="w-full h-[25px] flex justify-center items-center  text-center hover:bg-gray-300"
                                onClick={()=> {setSortValue("Price (High to Low)")}}
                                >
                                    <span className='text-[11px]'>Price (High to Low)</span>
                                </div>
                                <div className="w-full h-[25px] flex justify-center items-center  text-center hover:bg-gray-300"
                                onClick={()=> {setSortValue("Most Popular")}}
                                >
                                    <span className='text-[11px]'>Most Popular</span>
                                </div>
                                <div className="w-full h-[25px] flex justify-center items-center  text-center hover:bg-gray-300"
                                onClick={()=> {setSortValue("Rating (Highest to Lowest)")}}
                                >
                                    <span className='text-[11px]'>Rating (Highest to Lowest)</span>
                                </div>
                                <div className="w-full h-[25px] flex justify-center items-center  text-center hover:bg-gray-300"
                                onClick={()=> {setSortValue("Newest Arrivals")}}
                                >
                                    <span className='text-[11px]'>Newest Arrivals</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[30px] w-[30px] bg-white border-solid border-black border-[1px] rounded-[5px] flex flex-row items-center justify-center cursor-pointer">
                            <CiGrid41 className='text-[22px] text-black' />

                        </div>

                    </div>

                </div>

                <div className="py-[10px] w-full flex items-center flex-wrap">
                    <div className="flex items-center min-h-[40px] gap-[4px]">
                        {props.filters.map((filter, id) => (

                            <button key={id} className={`px-[10px] py-[5px] mr-[10px] ${filter.value === "" || filter.value.length <= 0 || filter.value === 0 ? "hidden" : ""} bg-white rounded-full border-solid border-[#ED7534] border-[1px] flex flex-row items-center justify-center`}
                                onClick={() => props.handleFilterChange(filter.type, filter.value)}
                            >
                                <p className='text-[11px] mr-[5px]'>{filter.type}</p>
                                <div className="h-[15px] w-[15px] flex justify-center items-center bg-[#ED7534] rounded-full">
                                    <RxCross2 className='text-[11px] text-white' />
                                </div>
                            </button>
                        ))}

                    </div>

                    <div className={`p-[10px] cursor-pointer ${props.isFilterApplied() ? "block" : "hidden"}`}
                        onClick={() => props.handleClearAllFilters()}
                    >
                        <p className='text-[#e2912e] text-[12px] font-bold'>Clear all filters</p>
                    </div>


                </div>
                <div className="h-full w-full rounded-[10px] flex flex-wrap gap-[20px]">

                    <ProductCard apparel={props.searchResults} />
                </div>
            </div>
        </>
    )
}
