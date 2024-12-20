import {capitalizeFirstLetter} from "@/shared/utils";
import React from "react";

interface FilterProductsProps {
    selectedCategory: string
    handleCategoryChange: Function
    categories: string[]
}

export const FilterProducts: React.FC<FilterProductsProps> = ({
                                                                  selectedCategory,
                                                                  handleCategoryChange,
                                                                  categories
                                                              }) => {
    return (
        <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="select select-bordered"
        >
            {categories.map(category => (
                <option key={category} value={category}>{capitalizeFirstLetter(category)}</option>
            ))}
        </select>
    );
};