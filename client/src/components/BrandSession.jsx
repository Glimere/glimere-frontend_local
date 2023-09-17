import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from "react-icons/fi";
import SessionHeader from './SessionHeader';
import { constants } from '../global-components/constants';
import { selectAllBrands } from '../slice/brand/brandSlice';
import { useSelector } from 'react-redux';

export default function BrandSession(props) {

    const brands = useSelector(selectAllBrands)

    return (
        <>
            <div className={`bg-white px-[18px] sm:px-[55px] py-[30px]  w-full`}>
                <div className="w-full">
                <SessionHeader type={props.headerType} title={props.headerTitle} />

                    <div className="w-full flex flex-wrap gap-[12px]">
                        {
                            brands.slice(0, 8).map((brand, id) => (
                                <div className="h-[80px] sm:h-[130px] w-[105px] sm:w-[150px] relative" key={id}>
                                    <Link to={`/view-product/${brand.attributes.productid}`} state={brand}>
                                        <div
                                            className="h-full w-full z-[2] relative rounded-full flex justify-center items-center"
                                            // style={{ backgroundImage: `url(${constants.url}${brand.attributes.imageUrl.data[0].attributes.url})` }}
                                            alt={brand.attributes.name}
                                        >
                                            <img src={constants.url + brand.attributes.logo.data.attributes.url} alt="" className="w-[80px] hover:w-[100px] duration-75 ease-out" />

                                        </div>

                                    </Link>
                                </div>))}
                    </div>
                </div>
            </div>
        </>
    )
}
