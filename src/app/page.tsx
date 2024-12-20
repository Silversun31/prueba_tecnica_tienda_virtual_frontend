'use client'
import {ChangeEvent, useContext, useEffect, useState} from "react";
import {ApiServicesContext} from "@/core/context/ApiService/ApiServicesContext";
import useNotificationService from "@/services/Notification";
import {AddToCartButton} from "@/core/components/Cart/AddToCartButton";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const {ProductApiService} = useContext(ApiServicesContext)
    const NotificationService = useNotificationService()

    // Fetch products from Fake Store API
    useEffect(() => {
        ProductApiService.getAll()
            .then((res) => {
                setProducts(res.data)
                setFilteredProducts(res.data)
            })
            .catch((err) => {
                NotificationService.notify(err.message, {type: 'error'})
            });
    }, []);

    // Handle search functionality
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="container mx-auto p-4">
            <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={handleSearch}
                className="input input-bordered w-full mb-4"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="card shadow-lg transition"
                    >
                        <figure>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-40 object-contain"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                {product.title}
                            </h2>
                            <p className="text-gray-600">${product.price}</p>
                            <div className="card-actions">
                                <AddToCartButton product={product}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
