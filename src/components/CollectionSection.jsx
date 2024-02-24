import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from "react-icons/fi";
import SectionHeader from './SectionHeader';
import { useSelector } from 'react-redux';
import { selectAllSubcategory } from '../slice/sub-category/subCategorySlice';


export default function CollectionSession(props) {

    const collections = useSelector(selectAllSubcategory)


    return (
        <>

            <div className={`bg-white-100 px-[18px] sm:px-[55px] py-[30px] w-full`}>
                <div className="w-full">
                <SectionHeader type={props.headerType} title={props.headerTitle} />

                    <div className="w-full flex gap-[10px] sm:gap-[25px] flex-wrap">
                        {collections.slice(0, 6).map((collection, id) => (
                            <div className="relative " key={collection.id}>
                                <div className="w-[105px] sm:w-[230px]  h-[140px] sm:h-[270px] overflow-hidden">

                                    <Link to={`/view-collection/${collection.id}`} state={collection}>
                                        <div className="h-[80%] w-full p-[15px] border-[1px] border-solid border-gray-200 rounded-[10px]">
                                            <div
                                                className="w-full h-full bg-cover bg-center bg-no-repeat z-[2] relative p-[10px] sm:p-[25px] rounded-[5px] flex items-end"
                                                // style={{ backgroundImage: `url(${constants.url}${collection.attributes.imageUrl.data[0].attributes.url})` }}
                                                alt={collection.attributes.title}
                                            >
                                                <div className="w-full h-[25%] py-[10px] p-0 sm:px-[15px] flex flex-row justify-between items-center bg-white-100 rounded-[8px] z-[2] relative">
                                                    <h1 className='text-[11px] sm:text-[15px] font-bold'>{collection.attributes.title}</h1>
                                                    <FiArrowRight className="text-[11px] sm:text-[15px] ml-[5px]" />
                                                </div>
                                            </div>
                                        </div>

                                    </Link>
                                </div>
                            </div>))}</div>
                </div>
            </div>
        </>

    )
}
