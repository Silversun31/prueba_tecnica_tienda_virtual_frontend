'use client'
import {useContext, useEffect, useState} from "react";
import {ApiServicesContext} from "@/core/context/ApiService/ApiServicesContext";
import useNotificationService from "@/services/Notification";
import {AddToCartButton} from "@/core/components/Cart/AddToCartButton";
import {useParams} from "next/navigation";

export default function ProductDetail() {
    const [product, setProduct] = useState<Product | null>(null);
    const {ProductApiService} = useContext(ApiServicesContext);
    const NotificationService = useNotificationService();
    const params = useParams()

    useEffect(() => {
        ProductApiService.getById(params.id as number)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                NotificationService.notify(err.message, {type: 'error'});
            });
    }, []);

    if (!product) {
        return <div className={"w-full flex-grow flex justify-center content-center"}>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className="container mx-auto p-4">
            <div className="card flex flex-row">
                <figure className={"flex-1"}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-80 object-contain"
                    />
                </figure>
                <div className="card-body flex-1">
                    <h2 className="card-title">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                    <p>{product.description}</p>
                    <div className="card-actions">
                        <AddToCartButton product={product}/>
                    </div>
                </div>
            </div>
        </div>
    );
}