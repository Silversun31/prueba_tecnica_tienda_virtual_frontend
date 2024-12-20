'use client'
import {ChangeEvent, useEffect, useState} from "react";
import useNotificationService from "@/services/Notification";
import useProductApiService from "@/services/api/ProductApiService";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const ProductApiSrv = useProductApiService()
    const NotificationSrv = useNotificationService()

    // Fetch products from Fake Store API
    useEffect(() => {
        ProductApiSrv.getAll()
            .then((res) => {
                setProducts(res.data)
                setFilteredProducts(res.data)
            })
            .catch((err) => {
                console.error(err)
                NotificationSrv.notify(err.message, {type: 'error'})
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
                                <button className="btn btn-primary">
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
