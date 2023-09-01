import React, { useState, useEffect} from 'react'
import FilterBar from './FilterBar'
import SearchList from './SearchList'
import useFetch from '../global-components/useFetch'
import { useLocation } from 'react-router-dom'

export default function ViewCollection() {

  const location = useLocation()

  const [collection, setCollection] = useState(location.state)
  const [viewToggle, setViewToggle] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [value, setValue] = useState([0, 100000]);
  const [minPrice, setMinPrice] = useState(value[0]);
  const [maxPrice, setMaxPrice] = useState(value[1]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [sort, setSort] = useState('desc');

  useEffect(() => {
    setCollection(location.state || {}); // Set initial apparelSearch from location.state
  }, [location.state]);

  const { data, loading, error } = useFetch(`/api/apparels?populate=*&[filters][subcategories][id][$eq]=${collection.id}${selectedBrands.map((brand) => `&[filters][brands][id][$eq]=${brand}`)}&[filters][price][$lte]=${maxPrice}&[filters][price][$gte]=${minPrice}${selectedSizes.map((size) => `&[filters][sizes][id][$eq]=${size}`)}&filters[discount][$gte]=${selectedDiscount}&sort=price:${sort}`);



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
      setSelectedDiscount("");
    } else if (type === "minPrice") {
      setMinPrice(0);
    } else if (type === "maxPrice") {
      setMaxPrice(0);
    }
  }

  const handleClearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedDiscount("");
  }

  const isFilterApplied = () => {
    return (
      selectedBrands.length > 0 ||
      selectedSizes.length > 0 ||
      selectedDiscount
    ) ? true : false;
  };

  console.log('isFilterApplied', isFilterApplied())

  const filters = [
    { type: "brand", value: selectedBrands },
    { type: "sizes", value: selectedSizes },
    { type: "discount", value: selectedDiscount }
  ]


  return (
    <>
      <div className="w-full pt-[100px] px-[15px] sm:px-[55px]">
        <div className="w-full flex-row">
          <h1 className='text-[30px] text-black font-bold'>{collection.attributes.title}</h1>
        </div>

        <div className="w-full flex gap-0 sm:gap-[20px] mt-[20px]">
          <FilterBar
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
            searchResults={data}
            handleFilterChange={handleFilterChange}
            isFilterApplied={isFilterApplied}
            handleClearAllFilters={handleClearAllFilters}
            setSort={setSort}
          />



        </div>



      </div>

    </>
  )
}
