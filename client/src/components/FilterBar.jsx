import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Hidden } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAllApparels } from '../slice/apparels/apparelSlice';


function valuetext(value) {
  return `${value}°C`;
}


export default function FilterBar(props) {

  const apparels = useSelector(selectAllApparels)




  // console.log('isSticky', isSticky)

  return (
    <div className={`w-full sm:w-[270px] bg-white shadow-md duration-300 sm:flex hidden flex-col rounded-[10px]  p-[30px]`}>

      <div className="flex flex-col w-full mb-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full mb-[15px]">
            <h1 className='font-bold text-[12px] mb-[10px]'>Category</h1>
            {/* <select
        id="category"
        className="border border-gray-300 rounded px-2 py-1"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      > */}
            <div className="w-full flex flex-wrap gap-[5px]">
              {apparels.map((apparel, id) => (
                <button key={id} className={`px-[10px] py-[5px] mb-[5px] ${props.selectedCategory == apparel.attributes.category ? "bg-[#ED7534]" : ""} rounded-full border-solid border-[#ED7534] border-[1px] flex flex-row items-center justify-center`}
                  onClick={() => { props.setSelectedCategory(apparel.attributes.category) }}
                >
                  <p className={`text-[10px] mr-[5px] ${props.selectedCategory == apparel.attributes.category ? "text-white" : "text-[#ED7534]"} `}>{apparel.attributes.category}</p>

                </button>
              ))}

            </div>


          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col mb-[15px]  border-solid border-t-[1px] border-t-gray-200">
            <h1 className='font-bold text-[12px] my-[10px]'>Price Range</h1>
            <div className="w-full flex flex-row justify-between mb-[5px]">
              {props.value.map((val, id) => (
                <input type="text" value={`₦${val}`} key={id} className='w-[41%] h-[30px] block rounded-md border-0 py-1.5 px-4 bg-gray-50 outline-none text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] sm:text-sm sm:leading-6'
                  readOnly
                />
              ))}
            </div>
            <Box sx={{
              width: "100%",
              paddingTop: "7px",
            }}>
              <Slider
                sx={{
                  color: '#ffd0b7', // Replace with your desired hexadecimal color value
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#ED7534', // Replace with the same color as above
                  },
                  '& .MuiSlider-track': {
                    backgroundColor: '#ffd0b7', // Replace with the same color as above
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: 'lightgray', // Replace with the desired color for the rail
                  },
                }}
                disableSwap={true}

                getAriaLabel={() => 'Temperature range'}
                min={500}
                max={300000}
                value={props.value}
                onChange={props.handlePriceChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
          </div>

          {/* Color Filter */}
          <div className="flex flex-col mb-[15px]  border-solid border-t-[1px] border-t-gray-200">
            <h1 className='font-bold text-[12px] my-[10px]'>Color</h1>
            {/* <select
        id="color"
        className="border border-gray-300 rounded px-2 py-1"
        value={selectedColor}
        onChange={(e) => props.handleColorChange(e.target.value)}
      > */}
            <div className="flex flex-wrap gap-[5px]">
              {apparels.map((apparel, id) => (
                <div key={id} className={`flex h-[40px] w-[40px] p-[3px] justify-center items-center border-solid ${props.selectedColors.includes(apparel.attributes.color[0]) ? "bg-[#fcc3a4]" : ""} border-[1px] rounded-full cursor-pointer duration-150`}
                  onClick={() => { props.handleColorChange(apparel.attributes.color[0]) }}
                >
                  <div className={`flex h-full w-full justify-center items-center ${apparel.attributes.color[0].toLowerCase() === "black" ? "bg-[#000000]" : apparel.attributes.color[0].toLowerCase() === "blue" ? "bg-blue-500" : ""} rounded-full`}>
                    {/* <p className='text-[9px] text-white'>{apparel.attributes.color[0]}</p> */}
                  </div>
                </div>
              ))}

              {/* <div className="flex justify-center space-x-2">
          <input id="nativeColorPicker1" type="color" value="#6590D5" />
          <button
            id="burronNativeColor"
            type="button"
            className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Button
          </button>
        </div> */}

            </div>



            {/* Add more options for other colors */}
            {/* </select> */}
          </div>

          {/* Brand Filter */}
          <div className="flex flex-col mb-[15px]  border-solid border-t-[1px] border-t-gray-200">
            <h1 className='font-bold text-[12px] my-[10px]'>Brands</h1>
            {/* <select
        id="brand"
        className="border border-gray-300 rounded px-2 py-1"
        value={props.selectedBrands}
      > */}
            <div className="flex flex-wrap gap-[10px]">
              {apparels.map((apparel, id) => (
                <div key={id} className={`flex  px-[7px] py-[4px] justify-center ${props.selectedBrands.includes(apparel.attributes.brand) ? "bg-[#ED7534]" : ""} items-center border-solid border-[#ED7534] border-[1px] rounded-[5px] cursor-pointer`}
                  onClick={() => { props.handleBrandChange(apparel.attributes.brand) }}
                >
                  <div className={`flex h-full w-full justify-center items-center bg-g rounded-full`}>
                    <p className={`text-[10px] ${props.selectedBrands.includes(apparel.attributes.brand) ? "text-white" : "text-black"} `}>{apparel.attributes.brand}</p>
                  </div>
                </div>
              ))}

            </div>


            {/* Add more options for other brands */}
            {/* </select> */}
          </div>


          {/* Size Filter */}
          <div className="flex flex-col mb-[15px]  border-solid border-t-[1px] border-t-gray-200">
            <div className="flex flex-col">
              <h1 className='font-bold text-[12px] my-[10px]'>Size</h1>
              <div className="checkbox-group flex flex-col">

                <div className='flex flex-row mb-[5px]'>
                  <input
                    className='mr-[10px]'
                    type="checkbox"
                    value="SM"
                    checked={props.selectedSizes.includes('SM')}
                    onChange={() => props.handleSizeChange('SM')}
                  />
                  <div>SM</div>
                </div>


                <div className="flex flex-row mb-[5px]">
                  <input
                    className='mr-[10px]'
                    type="checkbox"
                    value="S"
                    checked={props.selectedSizes.includes('S')}
                    onChange={() => props.handleSizeChange('S')}
                  />
                  <div>S</div>
                </div>


                <div className="flex flex-row mb-[5px]">
                  <input
                    className='mr-[10px]'
                    type="checkbox"
                    value="M"
                    checked={props.selectedSizes.includes('M')}
                    onChange={() => props.handleSizeChange('M')}
                  />
                  <div>M</div>
                </div>

                <div className="flex flex-row mb-[5px]">
                  <input
                    className='mr-[10px]'
                    type="checkbox"
                    value="L"
                    checked={props.selectedSizes.includes('L')}
                    onChange={() => props.handleSizeChange('L')}
                  />
                  <div>L</div>
                </div>

                <div className="flex flex-row mb-[5px]">
                  <input
                    className='mr-[10px]'
                    type="checkbox"
                    value="XL"
                    checked={props.selectedSizes.includes('XL')}
                    onChange={() => props.handleSizeChange('XL')}
                  />
                  <div>XL</div>
                </div>

                <div className="flex flex-row mb-[5px]">
                  <input
                    className='mr-[10px]'
                    type="checkbox"
                    value="XXL"
                    checked={props.selectedSizes.includes('XXL')}
                    onChange={() => props.handleSizeChange('XXL')}
                  />
                  <div>XXL</div>
                </div>
              </div>

              {/* Add more checkboxes for other sizes */}
            </div>
          </div>

          {/* Discount Filter */}
          <div className="flex flex-col  border-solid border-t-[1px] border-t-gray-200">
            <h1 className='font-bold text-[12px] my-[10px]'>Discount</h1>

            <div className="radio-group flex flex-col">

              {/* <div className="flex flex-row mb-[5px]">
          <input
            className='mr-[10px]'
            type="radio"
            name="discount"
            value=""
            checked={props.selectedDiscount === ''}
            onChange={() => props.handleDiscountChange('')}
          />
          <div>  All </div>
        </div> */}
              <div className="flex flex-row mb-[5px]">
                <input
                  className='mr-[10px]'
                  type="radio"
                  name="discount"
                  value="0-10"
                  checked={props.selectedDiscount === '50'}
                  onChange={() => props.handleDiscountChange('50')}
                />
                <div>50% or more</div>
              </div>

              <div className="flex flex-row mb-[5px]">
                <input
                  className='mr-[10px]'
                  type="radio"
                  name="discount"
                  value="0-10"
                  checked={props.selectedDiscount === '40'}
                  onChange={() => props.handleDiscountChange('40')}
                />
                <div>40% or more</div>
              </div>

              <div className="flex flex-row mb-[5px]">
                <input
                  className='mr-[10px]'
                  type="radio"
                  name="discount"
                  value="0-10"
                  checked={props.selectedDiscount === '30'}
                  onChange={() => props.handleDiscountChange('30')}
                />
                <div>30% or more</div>
              </div>



              <div className="flex flex-row mb-[5px]">
                <input
                  className='mr-[10px]'
                  type="radio"
                  name="discount"
                  value="10-25"
                  checked={props.selectedDiscount === '20'}
                  onChange={() => props.handleDiscountChange('20')}
                />
                <div>20% or more</div>
              </div>

              <div className="flex flex-row mb-[5px]">
                <input
                  className='mr-[10px]'
                  type="radio"
                  name="discount"
                  value="25-50"
                  checked={props.selectedDiscount === '10'}
                  onChange={() => props.handleDiscountChange('10')}
                />
                <div>10% or more</div>
              </div>


              {/* Add more radio buttons for other discount ranges */}
            </div>
          </div>


        </div>

        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    Apply Filters
  </button> */}
      </div>

      {/* Additional UI components for displaying selected filter options */}
      {/* <div className="flex flex-col items-center">
            <span>Selected Category: {props.selectedCategory || 'All'}</span>
            <span>min Price Range: {minPrice || 'All'}</span>
            <span>max Price Range: {maxPrice || 'All'}</span>
            <span>Selected Color: {props.selectedColors.map((colors, id) => {
              <span key={id} className='pr-[10px]'>{colors}</span>
            }) || 'All'}</span>
            <span>Selected Brand: {props.selectedBrands.map((brands, id) => {
              <span key={id} className='pr-[10px]'>{brands}</span>
            }) || 'All'}</span>
            <span>Selected Size: {props.selectedSizes.map((sizes, id) => (
              <span key={id} className='pr-[10px]'>{sizes}</span>
            )) || 'All'}</span>
            <span>Selected Discount: {props.selectedDiscount || 'All'}</span>
          </div> */}
    </div>
  )
}
