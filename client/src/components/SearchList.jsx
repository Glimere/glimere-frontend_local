import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { ProductCard } from './ProductCard';
import { TiThListOutline } from "react-icons/ti";
import { BsTag } from "react-icons/bs";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { HiArrowLongUp } from "react-icons/hi2";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineWorkspacePremium } from "react-icons/md";








export default function SearchList(props) {

    const [sortDropdown, setSortDropdown] = useState(false)
    const [sortValue, setSortValue] = useState("Most Popular")
    const [viewToggle, setViewToggle] = useState(false)

    // console.log('sort', sortDropdown)

    return (
        <>
            {/* <div className="w-[270px] bg-white shadow-md flex flex-col rounded-[10px] p-[30px]"></div> */}


            <div className="flex-[65] w-[65%]">
                <div className="flex flex-row relative justify-between items-center z-[20]">
                   

                       <div className="w-full flex flex-row items-center justify-end">
                        <p className='text-[12px] mr-[7px]'>Sort by:</p>
                        <div className="relative w-[200px] bg-white mr-[7px] rounded-[5px] border-solid border-black border-[1px]">
                            <div className="flex flex-row items-center justify-between py-[5px] px-[15px] cursor-pointer"
                                onClick={() => {
                                    setSortDropdown(!sortDropdown)
                                }}
                            >
                                <p className='text-[11px] mr-[5px]'>{sortValue}</p>
                                <IoIosArrowDown className='text-[11px] text-black' />
                            </div>

                            <div className={`absolute w-full top-0 mt-[27px] ${sortDropdown ? "" : "hidden"} rounded-[5px] border-solid border-black border-x-[1px] border-b-[1px] bg-white`}>
                                <div className="w-full h-[35px] py-[5px] px-[15px] flex flex-row justify-start items-center text-center hover:bg-[#ffebd1] cursor-pointer"
                                    onClick={() => {
                                        setSortValue("Price (Low to High)")
                                        setSortDropdown(false)
                                    }}
                                >
                                    <div className="flex flex-row mr-[8px]">
                                        <BsTag className='text-[17px] text-black' />
                                        <HiArrowLongUp className='text-[17px] text-black' />
                                    </div>

                                    <span className='text-[11px]'>Price (Low to High)</span>
                                </div>
                                <div className="w-full h-[35px] py-[5px] px-[15px] flex flex-row justify-start items-center  text-center hover:bg-[#ffebd1] cursor-pointer"
                                    onClick={() => {
                                        setSortValue("Price (High to Low)")
                                        setSortDropdown(false)
                                    }}
                                >
                                    <div className="flex flex-row mr-[8px]">
                                        <BsTag className='text-[17px] text-black' />
                                        <HiOutlineArrowLongDown className='text-[17px] text-black' />
                                    </div>

                                    <span className='text-[11px]'>Price (High to Low)</span>
                                </div>

                                <div className="w-full h-[35px] py-[5px] px-[15px] flex flex-row justify-start items-center  text-center hover:bg-[#ffebd1] cursor-pointer"
                                    onClick={() => {
                                        setSortValue("Rating (Highest to Lowest)")
                                        setSortDropdown(false)
                                    }}
                                >
                                    <AiOutlineStar className='text-[17px] text-black mr-[8px]' />
                                    <span className='text-[11px]'>Rating (Highest to Lowest)</span>
                                </div>
                                <div className="w-full h-[35px] py-[5px] px-[15px] flex flex-row justify-start items-center  text-center hover:bg-[#ffebd1] cursor-pointer"
                                    onClick={() => {
                                        setSortValue("Newest Arrivals")
                                        setSortDropdown(false)
                                    }}
                                >
                                    <MdOutlineWorkspacePremium className='text-[17px] text-black mr-[8px]' />
                                    <span className='text-[11px]'>Newest Arrivals</span>
                                </div>
                            </div>
                        </div>
                        <div className={`h-[30px] w-[30px] bg-white  border-solid border-black border-[1px] rounded-[5px] flex flex-row items-center justify-center cursor-pointer`}
                            onClick={() => { setViewToggle(!viewToggle) }}
                        >
                            {viewToggle ?
                                <CiGrid41 className='text-[22px] text-black' />
                                : <TiThListOutline className='text-[22px] text-black' />
                            }

                        </div>

                    </div> 
              
                    

                </div>

                <div className="py-[10px] w-full flex items-center flex-wrap">
                    <div className="flex items-center min-h-[20px] sm:min-h-[40px] gap-[4px]">
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
                <div className={`w-full rounded-[10px] grid  ${viewToggle ? "grid-cols-1" : "grid-cols-5 max-[1127px]:grid-cols-4 max-[972px]:grid-cols-3 max-[640px]:grid-cols-2 "} gap-[15px] sm:gap-[20px]`}>
                    <ProductCard apparel={props.searchResults} viewToggle={viewToggle} />
                </div>

                <div className="w-full flex justify-center items-center bg-white rounded-[10px] mt-[20px]">
                        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                            <div className="flex flex-1 justify-between sm:hidden">
                                <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                                <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                            </div>
                            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                {/* <div>
      <p className="text-sm text-gray-700">
        Showing
        <span className="font-medium">1</span>
        to
        <span className="font-medium">10</span>
        of
        <span className="font-medium">97</span>
        results
      </p>
    </div> */}
                                <div>
                                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                            <span className="sr-only">Previous</span>
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
                                        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-[#ED7534] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                            <span className="sr-only">Next</span>
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
