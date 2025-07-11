"use client";

import ApparelCard from "@/components/shoppers/cards/ApparelCard";
import ApparelLoading from "@/components/shoppers/sections/ApparelLoading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useDebounce } from "@/hooks/useDebounce";
import useFetch from "@/hooks/useFetch";
import useHandleSearch from "@/hooks/useHandleSearch";
import { useWindowWidth } from "@/hooks/useWindowsWidth";
import { useBrandStore } from "@/store/brandStore";
import { ApiResponse, Apparel, categoryResponse, ColorResponse, Material, MaterialsResponse, SizeResponse } from "@/types";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, ChevronUp, Grid, List, Loader2, Search, SlidersHorizontal, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";





interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}

interface SearchResponse extends ApiResponse {
  data: Apparel[];
  pagination: Pagination;
}

interface Filters {
  apparelType: string;
  brand: string;
  materials: string;
  sizes: string;
  ratingMin: string;
  ratingMax: string;
  priceMin: string;
  priceMax: string;
  color: string;
  availability: string;
  discount: string;
  gender: string;
  apparelClass: string;
}

// Fetch function for search results
const fetchSearchResults = async (query: string): Promise<SearchResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/apparels/search${query}`,
  );
  if (!response.ok) throw new Error("Failed to fetch search results");
  return response.json();
};

// Fetch filter options (mocked API calls, replace with actual endpoints)
const fetchFilterOptions = async (endpoint: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
  );
  if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return response.json();
};

const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { searchTerm, setSearchTerm } = useHandleSearch();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [isFilterOpen, setIsFilterOpen] = useState(false); // Changed default to false for mobile drawer
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [expandedSections, setExpandedSections] = useState({
    apparelType: true,
    brand: true,
    materials: true,
    sizes: true,
    rating: true,
    price: true,
    color: false,
    availability: true,
    discount: false,
    gender: true,
    apparelClass: true,
  });

  const [filters, setFilters] = useState<Filters>({
    apparelType: searchParams.get("apparelType") || "",
    brand: searchParams.get("brand") || "",
    materials: searchParams.get("materials") || "",
    sizes: searchParams.get("sizes") || "",
    ratingMin: searchParams.get("ratingMin") || "",
    ratingMax: searchParams.get("ratingMax") || "",
    priceMin: searchParams.get("priceMin") || "",
    priceMax: searchParams.get("priceMax") || "",
    color: searchParams.get("color") || "",
    availability: searchParams.get("availability") || "",
    discount: searchParams.get("discount") || "",
    gender: searchParams.get("gender") || "",
    apparelClass: searchParams.get("apparelClass") || "",
  });

  const [sort, setSort] = useState(
    searchParams.get("sort") || "createdAt-desc",
  );
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const limit = 12;

  const { brands: brandsData } = useBrandStore();
  const { data: categoriesData } = useFetch<categoryResponse>("/main_category");
  const { data: materialsData } = useFetch<MaterialsResponse>("/material");
  const { data: sizeData } = useFetch<SizeResponse>("/sizes");
  const { data: colorsData } = useFetch<ColorResponse>("/color");

  const { isDesktop } = useWindowWidth();
  // Mock filter options (fallback if API calls fail)
  const apparelTypes = [
    "dresses",
    "top",
    "bottom",
    "full wears",
    "outer wears",
    "accessories",
  ];
  const brands = brandsData?.map((brand) => brand.name) || [];
  const categories =
    categoriesData?.data?.map((category) => category.name) || [];
  const materials =
    materialsData?.data?.map((material) => material.textures.name) || [];
  const colors = colorsData?.data.map((color) => color.name) || [];
  const apparelClasses = ["ready-made", "custom-made"];
  const genderOptions = ["male", "female"];

  // Process size data for male and female
  const maleSizes =
    sizeData?.data
      ?.flatMap(
        (size) => size.male?.map((maleSize) => maleSize.short_name) || [],
      )
      .filter((size): size is string => !!size) || [];
  const femaleSizes =
    sizeData?.data
      ?.flatMap(
        (size) => size.female?.map((femaleSize) => femaleSize.short_name) || [],
      )
      .filter((size): size is string => !!size) || [];

  // Determine sizes to display based on gender filter
  const selectedGenders = filters.gender.split(",").filter((g) => g);
  const sizes =
    selectedGenders.length === 0
      ? Array.from(new Set([...maleSizes, ...femaleSizes]))
      : selectedGenders.includes("male") && selectedGenders.includes("female")
        ? Array.from(new Set([...maleSizes, ...femaleSizes]))
        : selectedGenders.includes("male")
          ? maleSizes
          : selectedGenders.includes("female")
            ? femaleSizes
            : Array.from(new Set([...maleSizes, ...femaleSizes]));

  // Build query string
  const queryParams = new URLSearchParams({
    ...(debouncedSearchTerm && { searchTerm: debouncedSearchTerm }),
    ...(filters.apparelType && { apparelType: filters.apparelType }),
    ...(filters.brand && { brand: filters.brand }),
    ...(filters.materials && { materials: filters.materials }),
    ...(filters.sizes && { sizes: filters.sizes }),
    ...(filters.ratingMin && { ratingMin: filters.ratingMin }),
    ...(filters.ratingMax && { ratingMax: filters.ratingMax }),
    ...(filters.priceMin && { priceMin: filters.priceMin }),
    ...(filters.priceMax && { priceMax: filters.priceMax }),
    ...(filters.color && { color: filters.color }),
    ...(filters.availability && { availability: filters.availability }),
    ...(filters.discount && { discount: filters.discount }),
    ...(filters.gender && { gender: filters.gender }),
    ...(filters.apparelClass && { apparelClass: filters.apparelClass }),
    page: page.toString(),
    limit: limit.toString(),
    ...(sort && { sort }),
  }).toString();

  const { data, isLoading, error } = useQuery<SearchResponse>({
    queryKey: ["search", queryParams],
    queryFn: () => fetchSearchResults(`?${queryParams}`),
  });

  const apparels = data?.data || [];
  const pagination = data?.pagination || {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    limit,
  };

  // Update URL on filter/sort/page change
  const updateUrl = () => {
    const newParams = new URLSearchParams({
      ...(debouncedSearchTerm && { searchTerm: debouncedSearchTerm }),
      ...(filters.apparelType && { apparelType: filters.apparelType }),
      ...(filters.brand && { brand: filters.brand }),
      ...(filters.materials && { materials: filters.materials }),
      ...(filters.sizes && { sizes: filters.sizes }),
      ...(filters.ratingMin && { ratingMin: filters.ratingMin }),
      ...(filters.ratingMax && { ratingMax: filters.ratingMax }),
      ...(filters.priceMin && { priceMin: filters.priceMin }),
      ...(filters.priceMax && { priceMax: filters.priceMax }),
      ...(filters.color && { color: filters.color }),
      ...(filters.availability && { availability: filters.availability }),
      ...(filters.discount && { discount: filters.discount }),
      ...(filters.gender && { gender: filters.gender }),
      ...(filters.apparelClass && { apparelClass: filters.apparelClass }),
      page: page.toString(),
      limit: limit.toString(),
      ...(sort && { sort }),
    });
    router.push(`/shoppers/search?${newParams.toString()}`);
  };

  // Handle filter changes
  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1); // Reset to first page on filter change
  };

  // Handle multi-select filter changes (e.g., materials, sizes, colors, gender)
  const handleMultiSelectChange = (
    key: keyof Filters,
    value: string,
    checked: CheckedState,
  ) => {
    const isChecked = checked === true; // Convert CheckedState to boolean
    setFilters((prev) => {
      const currentValues = prev[key]?.split(",").filter((v) => v) || [];
      let newValues;
      if (isChecked) {
        newValues = currentValues.includes(value)
          ? currentValues
          : [...currentValues, value].join(",");
      } else {
        newValues = currentValues.filter((v) => v !== value).join(",");
      }
      return { ...prev, [key]: newValues };
    });
    setPage(1);
  };

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSort(value);
    setPage(1);
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Update URL when filters, sort, or page change
  useEffect(() => {
    updateUrl();
  }, [filters, sort, page, debouncedSearchTerm]);

  const toggleFilterSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      apparelType: "",
      brand: "",
      materials: "",
      sizes: "",
      ratingMin: "",
      ratingMax: "",
      priceMin: "",
      priceMax: "",
      color: "",
      availability: "",
      discount: "",
      gender: "",
      apparelClass: "",
    });
    setPage(1);
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(Boolean).length;
  };

  const FilterSection = ({
    title,
    items,
    filterKey,
    expanded,
    type = "select",
  }: {
    title: string;
    items?: string[];
    filterKey: keyof typeof expandedSections;
    expanded: boolean;
    type?: "select" | "price" | "rating" | "checkbox" | "multi-select";
  }) => (
    <div className="mb-4">
      <button
        onClick={() => toggleFilterSection(filterKey)}
        className="flex w-full items-center justify-between rounded-lg p-2 text-left transition-colors hover:bg-gray-50"
      >
        <span className="text-sm font-medium">{title}</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 space-y-2 pl-2">
          {type === "select" && items ? (
            <Select
              value={filters[filterKey as keyof Filters] || ""}
              onValueChange={(value) =>
                handleFilterChange(filterKey as keyof Filters, value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${title.toLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All {title}</SelectItem>
                  {items.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : type === "price" ? (
            <div className="flex gap-2">
              <div>
                <Label className="text-xs">Min Price</Label>
                <Input
                  type="number"
                  value={filters.priceMin}
                  onChange={(e) =>
                    handleFilterChange("priceMin", e.target.value)
                  }
                  placeholder="Min"
                  className="h-8"
                />
              </div>
              <div>
                <Label className="text-xs">Max Price</Label>
                <Input
                  type="number"
                  value={filters.priceMax}
                  onChange={(e) =>
                    handleFilterChange("priceMax", e.target.value)
                  }
                  placeholder="Max"
                  className="h-8"
                />
              </div>
            </div>
          ) : type === "rating" ? (
            <div className="flex gap-2">
              <div>
                <Label className="text-xs">Min Rating</Label>
                <Input
                  type="number"
                  value={filters.ratingMin}
                  onChange={(e) =>
                    handleFilterChange("ratingMin", e.target.value)
                  }
                  placeholder="Min"
                  className="h-8"
                />
              </div>
              <div>
                <Label className="text-xs">Max Rating</Label>
                <Input
                  type="number"
                  value={filters.ratingMax}
                  onChange={(e) =>
                    handleFilterChange("ratingMax", e.target.value)
                  }
                  placeholder="Max"
                  className="h-8"
                />
              </div>
            </div>
          ) : type === "checkbox" ? (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={filters[filterKey as keyof Filters] === "true"}
                  onCheckedChange={(checked) =>
                    handleFilterChange(
                      filterKey as keyof Filters,
                      checked ? "true" : "",
                    )
                  }
                />
                <Label className="text-sm">{title}</Label>
              </div>
            </div>
          ) : type === "multi-select" && items ? (
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox
                    checked={(filters[filterKey as keyof Filters] || "")
                      .split(",")
                      .includes(item)}
                    onCheckedChange={(checked) =>
                      handleMultiSelectChange(
                        filterKey as keyof Filters,
                        item,
                        checked,
                      )
                    }
                  />
                  <Label className="text-sm">{item}</Label>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  const FilterContent = () => (
    <>
      <FilterSection
        title="Apparel Type"
        items={apparelTypes}
        filterKey="apparelType"
        expanded={expandedSections.apparelType}
      />
      <Separator />
      <FilterSection
        title="Brand"
        items={brands}
        filterKey="brand"
        expanded={expandedSections.brand}
      />
      <Separator />
      <FilterSection
        title="Materials"
        items={materials}
        filterKey="materials"
        expanded={expandedSections.materials}
        type="multi-select"
      />
      <Separator />
      <FilterSection
        title="Sizes"
        items={sizes}
        filterKey="sizes"
        expanded={expandedSections.sizes}
        type="multi-select"
      />
      <Separator />
      <FilterSection
        title="Rating Range"
        filterKey="rating"
        expanded={expandedSections.rating}
        type="rating"
      />
      <Separator />
      <FilterSection
        title="Price Range"
        filterKey="price"
        expanded={expandedSections.price}
        type="price"
      />
      <Separator />
      <FilterSection
        title="Colors"
        items={colors}
        filterKey="color"
        expanded={expandedSections.color}
        type="multi-select"
      />
      <Separator />
      <FilterSection
        title="Availability"
        filterKey="availability"
        expanded={expandedSections.availability}
        type="checkbox"
      />
      <Separator />
      <FilterSection
        title="Discount"
        filterKey="discount"
        expanded={expandedSections.discount}
        type="checkbox"
      />
      <Separator />
      <FilterSection
        title="Gender"
        items={genderOptions}
        filterKey="gender"
        expanded={expandedSections.gender}
        type="multi-select"
      />
      <Separator />
      <FilterSection
        title="Apparel Class"
        items={apparelClasses}
        filterKey="apparelClass"
        expanded={expandedSections.apparelClass}
      />
    </>
  );

  const Pagination = () => {
    const totalPages = pagination.totalPages;
    const currentPage = pagination.currentPage;
    const visiblePages = [];

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return (
      <div className="mt-8 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {(currentPage - 1) * limit + 1}-
          {Math.min(currentPage * limit, pagination.totalItems)} of{" "}
          {pagination.totalItems} results
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="transition-all duration-200 hover:scale-105"
          >
            Previous
          </Button>
          {visiblePages.map((pageNum) => (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(pageNum)}
              className="transition-all duration-200 hover:scale-105"
            >
              {pageNum}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="transition-all duration-200 hover:scale-105"
          >
            Next
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-[4] min-h-screen pt-[100px]">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex gap-6">
          {/* Filter Sidebar (Desktop) */}
          <div className="hidden w-72 md:block">
            <Card className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Filters</CardTitle>
                  <div className="flex items-center space-x-2">
                    {getActiveFiltersCount() > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {getActiveFiltersCount()}
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="text-xs transition-colors hover:text-red-600"
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <FilterContent />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="w-full sm:w-auto sm:flex-1">
            {/* Active Filters */}
            {getActiveFiltersCount() > 0 && (
              <div className="mb-6 rounded-lg bg-transparent-white-200 p-4 shadow-sm animate-in fade-in-0 slide-in-from-top-2">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium">Active Filters:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-xs transition-colors hover:text-red-600"
                  >
                    Clear All
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(filters).map(
                    ([key, value]) =>
                      value && (
                        <Badge
                          key={key}
                          variant="secondary"
                          className="cursor-pointer transition-colors hover:bg-red-100 hover:text-red-700"
                          onClick={() =>
                            handleFilterChange(key as keyof Filters, "")
                          }
                        >
                          {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                          {value.split(",").join(", ")}
                          <X className="ml-1 h-3 w-3" />
                        </Badge>
                      ),
                  )}
                </div>
              </div>
            )}

            {/* Search Results Header */}
            <div className="mb-6 flex items-center justify-between rounded-lg bg-transparent-white-200 p-4 shadow-sm">
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="transition-all duration-200 hover:scale-105"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="transition-all duration-200 hover:scale-105"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Select value={sort} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectGroup>
                    <SelectContent>
                      <SelectItem value="createdAt-desc">
                        Newest First
                      </SelectItem>
                      <SelectItem value="createdAt-asc">
                        Oldest First
                      </SelectItem>
                      <SelectItem value="apparel_price-asc">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="apparel_price-desc">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="average_rating-desc">
                        Rating: High to Low
                      </SelectItem>
                    </SelectContent>
                  </SelectGroup>
                </Select>
                {isDesktop ? (
                  <></>
                ) : (
                  <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                    <DrawerTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="transition-all duration-200 hover:scale-105"
                      >
                        <SlidersHorizontal className="h-4 w-4" />
                        {isDesktop && "Filters"}
                        {getActiveFiltersCount() > 0 && (
                          <Badge variant="destructive" className="ml-2 text-xs">
                            {getActiveFiltersCount()}
                          </Badge>
                        )}
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className="max-h-[80vh]">
                      <DrawerHeader>
                        <div className="flex items-center justify-between">
                          <DrawerTitle className="text-lg">Filters</DrawerTitle>
                          <div className="flex items-center space-x-2">
                            {getActiveFiltersCount() > 0 && (
                              <Badge variant="secondary" className="text-xs">
                                {getActiveFiltersCount()}
                              </Badge>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={clearAllFilters}
                              className="text-xs transition-colors hover:text-red-600"
                            >
                              Clear All
                            </Button>
                            <DrawerClose asChild>
                              <Button variant="ghost" size="sm">
                                <X className="h-4 w-4" />
                              </Button>
                            </DrawerClose>
                          </div>
                        </div>
                      </DrawerHeader>
                      <div className="space-y-4 overflow-y-auto p-4">
                        <FilterContent />
                      </div>
                    </DrawerContent>
                  </Drawer>
                )}
              </div>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-12 w-full">
               <ApparelLoading/>
              </div>
            ) : error ? (
              <div className="py-12 text-center text-red-500">
                Error: {error.message}
              </div>
            ) : apparels.length === 0 ? (
              <div className="py-12 text-center">
                <div className="text-lg text-gray-500">No results found</div>
                <p className="mt-2 text-sm text-gray-400">
                  Try adjusting your filters or search terms
                </p>
              </div>
            ) : (
              <>
                <div
                  className={`grid gap-6 ${
                    viewMode === "grid"
                      ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                      : "grid-cols-1"
                  } animate-in fade-in-0 slide-in-from-bottom-4`}
                >
                  {apparels.map((apparel) => (
                    <div key={apparel._id}>
                      <ApparelCard apparel={apparel} />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <Pagination />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;