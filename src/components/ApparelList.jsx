import React, { useState } from 'react'
import { ProductCard } from './ProductCard'
import SectionHeader from './SectionHeader'

export default function ApparelList(props) {
    const [viewToggle, setViewToggle] = useState(false)
    return (
        <div className={`bg-white-100 px-[18px] sm:px-[55px] py-[30px]  w-full`}>
            <div className="w-full">
                <SectionHeader type={props.headerType} title={props.headerTitle} />
                <div className={`w-full min-h-[50vh] rounded-[10px] grid ${viewToggle ? "grid-cols-1" : "grid-cols-5 max-[1127px]:grid-cols-4 max-[972px]:grid-cols-3 max-[640px]:grid-cols-2 "} gap-[15px] sm:gap-[20px]`}>
                    <ProductCard apparel={props.apparels} viewToggle={viewToggle} loading={false} />
                </div>
            </div>
        </div>

    )
}
