import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FilterBar from '../components/FilterBar';
import SearchList from '../components/SearchList';
import useFetch from '../global-components/useFetch';



export default function Search() {
  
  const location = useLocation();
  const [apparelSearch, setApparelSearch] = useState(location.state)
  const [searchResults, setSearchResults] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState(0);
  const [value, setValue] = useState([0, 100000]);
  const [minPrice, setMinPrice] = useState(value[0]);
  const [maxPrice, setMaxPrice] = useState(value[1]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [sort, setSort] = useState('desc');

  useEffect(() => {
    setApparelSearch(location.state || ''); // Set initial apparelSearch from location.state

    // Update apparelSearch when location.state changes
    if (location.state !== apparelSearch) {
      setApparelSearch(location.state || '');
    }


  }, [location.state, apparelSearch]);

const {data, loading, error} = useFetch(`/api/apparels?populate=*&filters[apparel_name][$contains]=${apparelSearch}${selectedBrands.map((brand) => `&[filters][brands][id][$eq]=${brand}`)}&[filters][apparel_price][$lte]=${maxPrice}&[filters][apparel_price][$gte]=${minPrice}&sort=apparel_price:${sort}`);

// ${selectedSizes.map((size) => `&[filters][sizes][id][$eq]=${size}`)}

console.log('sort', sort)
  
  console.log('apparelSearch', apparelSearch)

  console.log('searcResults', data)

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
            setSelectedBrands("");
        } else if (type === "sizes") {
          setSelectedSizes([]);
        } else if (type === "discount") {
          setSelectedDiscount(0);
        } else if (type === "minPrice") {
          setMinPrice(0);
        } else if (type === "maxPrice") {
          setMaxPrice(0);
        }
      }
    
      const handleClearAllFilters = () => {
        setSelectedBrands([]);
        setSelectedSizes([]);
        setSelectedDiscount(0);
      }
    
      const isFilterApplied = () => {
        return (
          selectedBrands.length > 0 ||
          selectedSizes.length > 0 ||
          selectedDiscount > 0
        ) ? true : false;
      };
    
      console.log('isFilterApplied', isFilterApplied())
    
      const filters = [
        { type: "brand", value: selectedBrands },
        { type: "sizes", value: selectedSizes },
        { type: "discount", value: selectedDiscount }
      ]

  return (
    <div className="w-full h-full bg-white-100">
      <div className="w-full flex gap-[20px] px-[15px] sm:px-[60px] pb-[40px] pt-[80px]">

        <div className="w-full flex gap-0 sm:gap-[20px] mt-[20px]">

            <FilterBar 
          apparelSearch={apparelSearch} 
          handleSizeChange={handleSizeChange} 
          handleDiscountChange={handleDiscountChange} 
          handlePriceChange={handlePriceChange} 
          handleBrandChange={handleBrandChange}
          handleFilterChange={handleFilterChange}
          handleClearAllFilters={handleClearAllFilters}
          isFilterApplied={isFilterApplied}
          filters={filters}
          value={value}
          selectedBrands={selectedBrands}
          selectedDiscount={selectedDiscount}
          selectedSizes={selectedSizes}
          />



          <SearchList
          loading={loading}
          filters={filters}
          apparelSearch={apparelSearch} 
          searchResults={data}
          handleFilterChange={handleFilterChange}
          isFilterApplied={isFilterApplied}
          handleClearAllFilters={handleClearAllFilters}
          setSort={setSort}
          sort={sort}
          />

        </div>

      </div>
    </div>
  )
}
