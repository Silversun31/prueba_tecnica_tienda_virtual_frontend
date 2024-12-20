import React from "react";

interface SearchProductProps {
    searchQuery: string
    handleSearch: Function
}

export const SearchProducts: React.FC<SearchProductProps> = ({
                                  searchQuery,
                                  handleSearch
                              }) => {
    return (
        <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={handleSearch}
            className="input input-bordered w-full mr-4"
        />
    );
};