// SearchBar.tsx
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Search from "../../../public/images/search.svg";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  setSearchSelected: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  setSearchSelected,
}) => {
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement | null>(null);

  const fetchSuggestions = async (query: string) => {
    if (!query) return setSuggestions([]);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/apparels/search?searchTerm=${query}`
      );
      const data = await response.json();
      setSuggestions(data.results || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    fetchSuggestions(value);
  };

  const resetSearch = () => {
    setSuggestions([]);
    setSearchInput("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchInput.trim()) {
      event.preventDefault();
      router.push(`/search?query=${encodeURIComponent(searchInput.trim())}`);
      resetSearch();
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div
      ref={searchRef}
      className={`group h-[40px] border-[1px] border-solid border-dark-100 ${
        searchInput || suggestions.length ? "w-full bg-white-100" : "w-[120px] "
      } duration-200 sm:duration-500 ease-linear rounded-full mr-0 sm:mr-[20px] relative flex flex-row justify-center px-[20px]`}
    >
      <div
        className={`w-full max-h-[400px] absolute rounded-[20px] z-[-1] ${
          suggestions.length ? "bg-white-100 shadow-md" : "bg-transparent"
        } pt-[40px] overflow-hidden`}
      >
        {suggestions.slice(0, 6).map((item: any) => (
          <div
            className="hover:bg-[#0000001a] w-full px-[30px]"
            key={item.id}
          >
            <Link
              href={`/search?query=${encodeURIComponent(
                item.attributes.apparel_name
              )}`}
            >
              <div className="w-full h-[40px] flex justify-start items-center">
                <p className="text-[12px] text-dark-100">
                  {item.attributes.apparel_name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="h-full w-[30px] flex justify-center items-center duration-150">
        <Search className="w-[20px] h-[20px] text-gray-500 group-hover:relative" />
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        className="w-full outline-none bg-transparent pl-[10px]"
        onChange={handleSearchChange}
        onClick={() => setSearchSelected(true)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
