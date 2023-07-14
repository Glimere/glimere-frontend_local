import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { ProductCard } from './ProductCard';
import { TiThListOutline } from "react-icons/ti";
import { filterApparels } from '../slice/apparels/apparelSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAllApparels } from '../slice/apparels/apparelSlice';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Hidden } from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}

export default function Search() {
  const apparels = useSelector(selectAllApparels)
  const location = useLocation();
  const [apparelSearch, setApparelSearch] = useState(location.state)
  const [searchResults, setSearchResults] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('');

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [value, setValue] = useState([500, 100000]);
  const [minPrice, setMinPrice] = useState(value[0]);
  const [maxPrice, setMaxPrice] = useState(value[1]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setApparelSearch(location.state || ''); // Set initial apparelSearch from location.state

    // Update apparelSearch when location.state changes
    if (location.state !== apparelSearch) {
      setApparelSearch(location.state || '');
    }


  }, [location.state, apparelSearch]);

  useEffect(() => {
    if (apparelSearch) {
      filterApparels('name', apparelSearch, selectedBrands, selectedCategory, minPrice, maxPrice, selectedColors, selectedSizes, selectedDiscount)
        .then((searchResult) => {
          // Handle the search results here
          setSearchResults(searchResult)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [apparelSearch, selectedBrands, selectedCategory, minPrice, maxPrice, selectedColors, selectedSizes, selectedDiscount]);

  console.log('apparelSearch', apparelSearch)

  console.log('searcResults', searchResults)



  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
    console.log(selectedSizes);
  };

  const handleDiscountChange = (discount) => {
    setSelectedDiscount(discount);
  };
  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1])
  };


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((s) => s !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
    console.log("selectedColors", selectedColors);
  };



  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((s) => s !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
    console.log("selectedBrands", selectedBrands);
  };

  const handleFilterChange = (type, filter) => {
    if (type === "category") {
      setSelectedCategory("");
    } else if (type === "colors") {
      setSelectedColors([]);
    } else if (type === "brand") {
      setSelectedBrands("");
    } else if (type === "sizes") {
      setSelectedSizes([]);
    } else if (type === "discount") {
      setSelectedDiscount("");
    } else if (type === "minPrice") {
      setMinPrice(0);
    } else if (type === "maxPrice") {
      setMaxPrice(0);
    }
  }

  const handleClearAllFilters = () => {
    setSelectedCategory("");
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedDiscount("");
    setMinPrice(0);
    setMaxPrice(0);
  }

  const isFilterApplied = () => {
    return (
      selectedCategory ||
      selectedColors.length > 0 ||
      selectedBrands.length > 0 ||
      selectedSizes.length > 0 ||
      selectedDiscount
    ) ? true : false;
  };

  console.log('isFilterApplied', isFilterApplied())

  const filters = [
    { type: "category", value: selectedCategory },
    { type: "colors", value: selectedColors },
    { type: "brand", value: selectedBrands },
    { type: "sizes", value: selectedSizes },
    { type: "discount", value: selectedDiscount }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (offset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
console.log('isSticky', isSticky)
  return (
    <div className="w-full h-full bg-[#fffbf5]">
    <div className="w-full flex gap-[20px]  px-[60px] pb-[40px] pt-[80px]">

      <div className="w-full relative flex gap-[20px] mt-[20px]">






        <div className={`w-[270px] bg-white shadow-md duration-300 flex flex-col rounded-[10px] absolute p-[30px]`}>

          <div className="flex flex-col w-full mb-4">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full mb-[15px]">
                <h1 className='font-bold text-[15px] mb-[10px]'>Category</h1>
                {/* <select
        id="category"
        className="border border-gray-300 rounded px-2 py-1"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      > */}
                <div className="w-full flex flex-wrap gap-[5px]">
                  {apparels.map((apparel, id) => (
                    <button key={id} className={`px-[10px] py-[5px] mb-[5px] ${selectedCategory == apparel.attributes.category ? "bg-[#ED7534]" : ""} rounded-full border-solid border-[#ED7534] border-[1px] flex flex-row items-center justify-center`}
                      onClick={() => { setSelectedCategory(apparel.attributes.category) }}
                    >
                      <p className={`text-[11px] mr-[5px] ${selectedCategory == apparel.attributes.category ? "text-white" : "text-[#ED7534]"} `}>{apparel.attributes.category}</p>

                    </button>
                  ))}

                </div>


              </div>

              {/* Price Range Filter */}
              <div className="flex flex-col mb-[15px]">
                <h1 className='font-bold text-[15px] my-[10px]'>Price Range</h1>
                <div className="w-full flex flex-row justify-between mb-[5px]">
                  {value.map((val, id) => (
                    <input type="text" value={`₦${val}`} key={id} className='w-[41%] h-[30px] block rounded-md border-0 py-1.5 px-4 bg-gray-50 outline-none text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] sm:text-sm sm:leading-6'
                      readOnly
                    />
                  ))}
                </div>
                <Box sx={{
                  width: "100%",
                  paddingTop: "20px",
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
                    value={value}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
              </div>

              {/* Color Filter */}
              <div className="flex flex-col mb-[15px]">
                <h1 className='font-bold text-[15px] my-[10px]'>Color</h1>
                {/* <select
        id="color"
        className="border border-gray-300 rounded px-2 py-1"
        value={selectedColor}
        onChange={(e) => handleColorChange(e.target.value)}
      > */}
                <div className="flex flex-wrap gap-[3px]">
                  {apparels.map((apparel, id) => (
                    <div key={id} className={`flex h-[50px] w-[50px] p-[3px] justify-center items-center border-solid ${selectedColors.includes(apparel.attributes.color[0]) ? "border-[1px]" : ""} border-[#ED7534] hover:border-[1px] rounded-full cursor-pointer`}
                      onClick={() => { handleColorChange(apparel.attributes.color[0]) }}
                    >
                      <div className={`flex h-full w-full justify-center items-center ${apparel.attributes.color[0].toLowerCase() === "black" ? "bg-[#000000]" : apparel.attributes.color[0].toLowerCase() === "blue" ? "bg-blue-500" : ""} rounded-full`}>
                        <p className='text-[10px] text-white'>{apparel.attributes.color[0]}</p>
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
              <div className="flex flex-col mb-[15px]">
                <h1 className='font-bold text-[15px] my-[10px]'>Brands</h1>
                {/* <select
        id="brand"
        className="border border-gray-300 rounded px-2 py-1"
        value={selectedBrands}
      > */}
                <div className="flex flex-wrap gap-[10px]">
                  {apparels.map((apparel, id) => (
                    <div key={id} className={`flex  px-[7px] py-[4px] justify-center ${selectedBrands.includes(apparel.attributes.brand) ? "bg-[#ED7534]" : ""} items-center border-solid border-[#ED7534] border-[1px] rounded-[5px] cursor-pointer`}
                      onClick={() => { handleBrandChange(apparel.attributes.brand) }}
                    >
                      <div className={`flex h-full w-full justify-center items-center bg-g rounded-full`}>
                        <p className={`text-[10px] ${selectedBrands.includes(apparel.attributes.brand) ? "text-white" : "text-black"} `}>{apparel.attributes.brand}</p>
                      </div>
                    </div>
                  ))}

                </div>


                {/* Add more options for other brands */}
                {/* </select> */}
              </div>


              {/* Size Filter */}
              <div className="flex flex-col mb-[15px]">
                <div className="flex flex-col">
                  <h1 className='font-bold text-[15px] my-[10px]'>Size</h1>
                  <div className="checkbox-group flex flex-col">

                    <div className='flex flex-row mb-[5px]'>
                      <input
                        className='mr-[10px]'
                        type="checkbox"
                        value="SM"
                        checked={selectedSizes.includes('SM')}
                        onChange={() => handleSizeChange('SM')}
                      />
                      <div>SM</div>
                    </div>


                    <div className="flex flex-row mb-[5px]">
                      <input
                        className='mr-[10px]'
                        type="checkbox"
                        value="S"
                        checked={selectedSizes.includes('S')}
                        onChange={() => handleSizeChange('S')}
                      />
                      <div>S</div>
                    </div>


                    <div className="flex flex-row mb-[5px]">
                      <input
                        className='mr-[10px]'
                        type="checkbox"
                        value="M"
                        checked={selectedSizes.includes('M')}
                        onChange={() => handleSizeChange('M')}
                      />
                      <div>M</div>
                    </div>

                    <div className="flex flex-row mb-[5px]">
                      <input
                        className='mr-[10px]'
                        type="checkbox"
                        value="L"
                        checked={selectedSizes.includes('L')}
                        onChange={() => handleSizeChange('L')}
                      />
                      <div>L</div>
                    </div>

                    <div className="flex flex-row mb-[5px]">
                      <input
                        className='mr-[10px]'
                        type="checkbox"
                        value="XL"
                        checked={selectedSizes.includes('XL')}
                        onChange={() => handleSizeChange('XL')}
                      />
                      <div>XL</div>
                    </div>

                    <div className="flex flex-row mb-[5px]">
                      <input
                        className='mr-[10px]'
                        type="checkbox"
                        value="XXL"
                        checked={selectedSizes.includes('XXL')}
                        onChange={() => handleSizeChange('XXL')}
                      />
                      <div>XXL</div>
                    </div>
                  </div>

                  {/* Add more checkboxes for other sizes */}
                </div>
              </div>

              {/* Discount Filter */}
              <div className="flex flex-col">
                <h1 className='font-bold text-[15px] my-[10px]'>Discount</h1>

                <div className="radio-group flex flex-col">

                  {/* <div className="flex flex-row mb-[5px]">
          <input
            className='mr-[10px]'
            type="radio"
            name="discount"
            value=""
            checked={selectedDiscount === ''}
            onChange={() => handleDiscountChange('')}
          />
          <div>  All </div>
        </div> */}
                  <div className="flex flex-row mb-[5px]">
                    <input
                      className='mr-[10px]'
                      type="radio"
                      name="discount"
                      value="0-10"
                      checked={selectedDiscount === '50'}
                      onChange={() => handleDiscountChange('50')}
                    />
                    <div>50% or more</div>
                  </div>

                  <div className="flex flex-row mb-[5px]">
                    <input
                      className='mr-[10px]'
                      type="radio"
                      name="discount"
                      value="0-10"
                      checked={selectedDiscount === '40'}
                      onChange={() => handleDiscountChange('40')}
                    />
                    <div>40% or more</div>
                  </div>

                  <div className="flex flex-row mb-[5px]">
                    <input
                      className='mr-[10px]'
                      type="radio"
                      name="discount"
                      value="0-10"
                      checked={selectedDiscount === '30'}
                      onChange={() => handleDiscountChange('30')}
                    />
                    <div>30% or more</div>
                  </div>



                  <div className="flex flex-row mb-[5px]">
                    <input
                      className='mr-[10px]'
                      type="radio"
                      name="discount"
                      value="10-25"
                      checked={selectedDiscount === '20'}
                      onChange={() => handleDiscountChange('20')}
                    />
                    <div>20% or more</div>
                  </div>

                  <div className="flex flex-row mb-[5px]">
                    <input
                      className='mr-[10px]'
                      type="radio"
                      name="discount"
                      value="25-50"
                      checked={selectedDiscount === '10'}
                      onChange={() => handleDiscountChange('10')}
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
            <span>Selected Category: {selectedCategory || 'All'}</span>
            <span>min Price Range: {minPrice || 'All'}</span>
            <span>max Price Range: {maxPrice || 'All'}</span>
            <span>Selected Color: {selectedColors.map((colors, id) => {
              <span key={id} className='pr-[10px]'>{colors}</span>
            }) || 'All'}</span>
            <span>Selected Brand: {selectedBrands.map((brands, id) => {
              <span key={id} className='pr-[10px]'>{brands}</span>
            }) || 'All'}</span>
            <span>Selected Size: {selectedSizes.map((sizes, id) => (
              <span key={id} className='pr-[10px]'>{sizes}</span>
            )) || 'All'}</span>
            <span>Selected Discount: {selectedDiscount || 'All'}</span>
          </div> */}
        </div>





        <div className="w-[270px] bg-white shadow-md flex flex-col rounded-[10px] p-[30px]"></div>


        <div className="flex-[65] w-[65%]">
          <div className="flex justify-between items-center">
            <div className="pb-[10px]">
              <p className="text-[#000000] text-[12px] font-bold"><span>1</span> - <span>16</span> over <span>7000</span> result for "{apparelSearch}" </p>
            </div>
            <div className="flex flex-row items-center">
              <p className='text-[12px] mr-[7px]'>Sort by:</p>
              <div className="flex flex-row bg-white items-center mr-[7px] py-[5px] px-[15px] rounded-[5px] border-solid border-black border-[1px] cursor-pointer">
                <p className='text-[11px] mr-[5px]'>Best match</p>
                <IoIosArrowDown className='text-[11px] text-black' />
              </div>
              <div className="h-[30px] w-[30px] bg-white border-solid border-black border-[1px] rounded-[5px] flex flex-row items-center justify-center cursor-pointer">
                <CiGrid41 className='text-[22px] text-black' />

              </div>
            </div>
          </div>

          <div className="py-[10px] w-full flex items-center flex-wrap">
            <div className="flex items-center min-h-[40px] gap-[4px]">
              {filters.map((filter, id) => (

                <button key={id} className={`px-[10px] py-[5px] mr-[10px] ${filter.value === "" || filter.value.length <= 0 || filter.value === 0 ? "hidden" : ""} bg-white rounded-full border-solid border-[#ED7534] border-[1px] flex flex-row items-center justify-center`}
                  onClick={() => handleFilterChange(filter.type, filter.value)}
                >
                  <p className='text-[11px] mr-[5px]'>{filter.type}</p>
                  <div className="h-[15px] w-[15px] flex justify-center items-center bg-[#ED7534] rounded-full">
                    <RxCross2 className='text-[11px] text-white' />
                  </div>
                </button>
              ))}

            </div>

            <div className={`p-[10px] cursor-pointer ${isFilterApplied() ? "block" : "hidden"}`}
              onClick={() => handleClearAllFilters()}
            >
              <p className='text-[#e2912e] text-[12px] font-bold'>Clear all filters</p>
            </div>


          </div>
          <div className="h-full w-full rounded-[10px] flex flex-wrap gap-[20px]">

            <ProductCard apparel={searchResults} />
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}
