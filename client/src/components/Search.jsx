import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { filterApparels } from '../slice/apparels/apparelSlice';
import FilterBar from './FilterBar';
import SearchList from './SearchList';



export default function Search() {
  
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
    
      // useEffect(() => {
      //   const handleScroll = () => {
      //     const offset = window.pageYOffset;
      //     if (offset > 200) {
      //       setIsSticky(true);
      //     } else {
      //       setIsSticky(false);
      //     }
      //   };
    
        
    
      //   window.addEventListener('scroll', handleScroll);
    
      //   return () => {
      //     window.removeEventListener('scroll', handleScroll);
      //   };
      // }, []);




  return (
    <div className="w-full h-full bg-[#fffbf5]">
      <div className="w-full flex gap-[20px] px-[15px] sm:px-[60px] pb-[40px] pt-[80px]">

        <div className="w-full flex gap-0 sm:gap-[20px] mt-[20px]">
          {/* <div className="sm:relative hidden flex absolute w-full sm:flex flex-col z-[40]"> */}
            <FilterBar 
          apparelSearch={apparelSearch} 
          handleSizeChange={handleSizeChange} 
          handleDiscountChange={handleDiscountChange} 
          handlePriceChange={handlePriceChange} 
          handleCategoryChange={handleCategoryChange}
          handleColorChange={handleColorChange}
          handleBrandChange={handleBrandChange}
          handleFilterChange={handleFilterChange}
          handleClearAllFilters={handleClearAllFilters}
          isFilterApplied={isFilterApplied}
          filters={filters}
          value={value}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          selectedColors={selectedColors}
          selectedBrands={selectedBrands}
          selectedDiscount={selectedDiscount}
          selectedSizes={selectedSizes}
          />

          {/* <div className="w-full h-[100px bg-white shadow-md]"></div>
          </div> */}
          


          <SearchList
          filters={filters}
          apparelSearch={apparelSearch} 
          searchResults={searchResults}
          handleFilterChange={handleFilterChange}
          isFilterApplied={isFilterApplied}
          handleClearAllFilters={handleClearAllFilters}
          />



        </div>

      </div>
    </div>
  )
}
