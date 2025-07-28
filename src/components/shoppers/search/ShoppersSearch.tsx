"use client";

import { useDebounce } from "@/hooks/useDebounce";
import useHandleSearch from "@/hooks/useHandleSearch";
import { ApparelsData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Search as SearchIcon } from "lucide-react";
import { useRef, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchStore {
  searchHistory: string[];
  addSearch: (term: string) => void;
  clearHistory: () => void;
}

export const useSearchStore = create<SearchStore>()(
  persist(
    (set) => ({
      searchHistory: [],
      addSearch: (term) =>
        set((state) => ({
          searchHistory: [
            term,
            ...state.searchHistory.filter((t) => t !== term).slice(0, 4),
          ].filter((t) => t.trim()),
        })),
      clearHistory: () => set({ searchHistory: [] }),
    }),
    {
      name: "search-storage",
    }
  )
);

const useSearch = (searchTerm: string) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const { data, isLoading } = useQuery<ApparelsData>({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: async () => {
      if (!debouncedSearchTerm) return { data: [] };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/apparels/search?searchTerm=${encodeURIComponent(debouncedSearchTerm)}`
      );
      if (!response.ok) throw new Error("Failed to fetch search results");
      return response.json();
    },
    enabled: !!debouncedSearchTerm,
  });

  return { results: data?.data || [], isLoading };
};

const ShoppersSearch: React.FC<{
  className?: string;
  isMobile?: boolean;
  onSearch?: () => void;
}> = ({ className, isMobile, onSearch }) => {
  const { searchTerm, setSearchTerm, handleSearch } = useHandleSearch();
  const [isFocused, setIsFocused] = useState(false);
  const { searchHistory, addSearch, clearHistory } = useSearchStore();
  const { results, isLoading } = useSearch(searchTerm);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      console.log("Enter key pressed, submitting search:", searchTerm);
      addSearch(searchTerm);
      handleSearch(searchTerm);
      if (isMobile) {
        setIsFocused(false);
        setTimeout(() => onSearch?.(), 100); 
      } else {
        setTimeout(() => onSearch?.(), 100); 
        onSearch?.();
      }
    }
  };

  const handleSuggestionClick = (term: string) => {
    console.log("Suggestion clicked:", term);
    setSearchTerm(term);
    addSearch(term);
    handleSearch(term); 
    if (isMobile) {
      setIsFocused(false); 
      setTimeout(() => onSearch?.(), 100); 
    } else {
      setTimeout(() => onSearch?.(), 100); 
      onSearch?.();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`flex flex-row items-center justify-between gap-[10px] rounded-full bg-transparent-white-300 px-[20px] py-[7px] backdrop-blur-md`}
      >
        <SearchIcon
          className="block cursor-pointer duration-150 hover:fill-primary-100"
          onClick={() => inputRef.current?.focus()}
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search apparel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent outline-none"
        />
      </div>

      {isFocused && (
        <div className="absolute left-0 top-full z-50 mt-2 max-h-[400px] w-full max-w-[400px] overflow-y-auto rounded-lg bg-white shadow-lg">
          {searchHistory.length > 0 && !searchTerm && (
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold">Recent Searches</h3>
                <button
                  onClick={clearHistory}
                  className="text-xs text-primary-100 hover:underline"
                >
                  Clear
                </button>
              </div>
              {searchHistory.map((term, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded p-2 hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(term)}
                >
                  {term}
                </div>
              ))}
            </div>
          )}

          {searchTerm && (
            <div className="p-4">
              <h3 className="mb-2 text-sm font-semibold">Suggestions</h3>
              {isLoading ? (
                <div className="text-sm text-gray-500">Loading...</div>
              ) : results.length > 0 ? (
                results.map((result) => (
                  <div
                    key={result._id}
                    className="cursor-pointer rounded p-2 hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(result.apparel_name)}
                  >
                    {result.apparel_name}{" "}
                    <span className="text-xs text-gray-500">
                      ({result.main_category?.name || "Unknown"})
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShoppersSearch;