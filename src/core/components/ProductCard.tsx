import React from 'react';
import {AddToCartButton} from "@/core/components/Cart/AddToCartButton";
import Link from "next/link";
import {urlpatterns} from "../../../urls";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return (
        <div
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
                <Link href={`${urlpatterns["product-base"]}/${product.id}`} className="card-title">
                    {product.title}
                </Link>
                <p className="text-gray-600">${product.price}</p>
                <div className="card-actions">
                    <AddToCartButton product={product}/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;