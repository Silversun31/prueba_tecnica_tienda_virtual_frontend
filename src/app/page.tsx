'use client'
import {ChangeEvent, useContext, useEffect, useState} from "react";
import {ApiServicesContext} from "@/core/context/ApiService/ApiServicesContext";
import useNotificationService from "@/services/Notification";
import ProductCard from "@/core/components/ProductCard";
import {SearchAndFilter} from "@/core/components/Home/SearchAndFilter";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState("");
    const {ProductApiService} = useContext(ApiServicesContext)
    const NotificationService = useNotificationService()

    // Fetch products and categories from Fake Store API
    useEffect(() => {
        ProductApiService.getAll()
            .then((res) => {
                setProducts(res.data)
                setFilteredProducts(res.data)
            })
            .catch((err) => {
                NotificationService.notify(err.message, {type: 'error'})
            });

        ProductApiService.getCategories()
            .then((res) => {
                setCategories(['all', ...res.data])
            })
            .catch((err) => {
                NotificationService.notify(err.message, {type: 'error'})
            });
    }, []);

    // Handle search functionality
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        filterProducts(query, selectedCategory);
    };

    // Handle category change
    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value;
        setSelectedCategory(category);
        filterProducts(searchQuery, category);
    };

    // Filter products based on search query and selected category
    const filterProducts = (query: string, category: string) => {
        let filtered = products;
        if (category !== 'all') {
            filtered = filtered.filter(product => product.category === category);
        }
        if (query) {
            filtered = filtered.filter(product => product.title.toLowerCase().includes(query));
        }
        setFilteredProducts(filtered);
    };

    if (!products.length) {
        return <div className={"w-full flex-grow flex justify-center content-center"}>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className="container mx-auto p-4">
            <SearchAndFilter searchQuery={searchQuery} handleSearch={handleSearch}
                             handleCategoryChange={handleCategoryChange} categories={categories}
                             selectedCategory={selectedCategory}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        </div>
    );
}