import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useHandleSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || "",
  );

  // Sync search term with URL on mount
  useEffect(() => {
    const term = searchParams.get("searchTerm") || "";
    setSearchTerm(term);
  }, [searchParams]);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      console.log("Empty query, skipping search");
      return;
    }

    console.log("Search function called with query:", query);
    try {
      router.push(`/shoppers/search?searchTerm=${encodeURIComponent(query)}`);
      console.log("Navigation to search page successful");
    } catch (error) {
      console.error("Error navigating to search page:", error);
    }
  };

  const handleSearchSubmit = (
    e: React.KeyboardEvent<HTMLInputElement>,
    query: string,
  ) => {
    if (e.key === "Enter" && query.trim()) {
      e.preventDefault();
      handleSearch(query);
    }
  };

  return { handleSearch, handleSearchSubmit, searchTerm, setSearchTerm };
};

export default useHandleSearch;
