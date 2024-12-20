'use client'
import {useContext, useState} from "react";
import {CartContext} from "@/shared/Cart/context/CartContext";
import {useCart} from "@/shared/Cart/useCart";

export default function CartPage() {
    const {cart} = useContext(CartContext);
    const {increaseProductQuantity, decreaseProductQuantity, removeProduct, clearCart} = useCart();
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setPaymentSuccess(true);
            clearCart();
        }, 2000); // Simula un retraso de 2 segundos para el proceso de pago
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
            <div className={"flex md:flex-row flex-col-reverse gap-2"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cart.length ? cart.map((product) => (
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
                                <p className="text-gray-600">${product.price} x {product.quantity} =
                                    ${product.price * product.quantity}</p>
                                <div className="card-actions flex flex-col items-center">
                                    <div className="flex items-center mb-2">
                                        <button onClick={() => decreaseProductQuantity(product.id)}
                                                className="btn btn-sm btn-outline">-
                                        </button>
                                        <span className="mx-2">{product.quantity}</span>
                                        <button onClick={() => increaseProductQuantity(product.id)}
                                                className="btn btn-sm btn-outline">+
                                        </button>
                                    </div>
                                    <button onClick={() => removeProduct(product.id)}
                                            className="btn btn-sm btn-danger">Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : "No posee items en su carrito"}
                </div>
                <div className={"flex flex-col justify-between h-full"}>
                    <button onClick={clearCart} className="btn btn-error mb-4 float-right">Limpiar Carrito</button>
                    {!paymentSuccess && (
                        <button onClick={handlePayment} className="btn btn-primary mt-4 float-right"
                                disabled={isProcessing}>
                            {isProcessing ? "Procesando..." : "Pagar"}
                        </button>
                    )}
                </div>
            </div>
            {paymentSuccess && <div className="text-center text-green-500 font-bold mt-4">
                ¡Pago realizado con éxito!
            </div>}


            <div className="text-right font-bold text-xl mt-4">
                Total de su compra:
                ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
            </div>
        </div>
    );
}