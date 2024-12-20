import React from "react";
import {SearchProducts} from "@/core/components/SearchProducts";
import {FilterProducts} from "@/core/components/FilterProducts";

interface SearchAndFilterProps {
    searchQuery: string
    handleSearch: Function
    selectedCategory: string
    handleCategoryChange: Function
    categories: string[]
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
                                                                    searchQuery,
                                                                    handleSearch,
                                                                    selectedCategory,
                                                                    handleCategoryChange,
                                                                    categories
                                                                }) => {
    return (
        <div className="flex mb-4">
            <SearchProducts searchQuery={searchQuery} handleSearch={handleSearch}/>
            <FilterProducts selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange}
                            categories={categories}/>
        </div>
    );
};