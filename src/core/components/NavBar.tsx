'use client'
import {APP_NAME} from "../../../app.config";
import Link from "next/link";
import {urlpatterns} from "../../../urls";
import {BsCart3} from "react-icons/bs";
import {useContext} from "react";
import {CartContext} from "@/shared/Cart/context/CartContext";

export const NavBar = () => {
    const {cart} = useContext(CartContext)

    const cartLink = cart.length ? <Link href={urlpatterns['cart-base']} className="btn btn-ghost rounded-full">
        <div className="indicator">
            <span className="indicator-item badge badge-secondary badge-xs"></span>
            <BsCart3
                size={18}/>
        </div>
    </Link> : <Link href={urlpatterns['cart-base']} className="btn btn-ghost rounded-full"><BsCart3
        size={18}/></Link>


    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <Link href={urlpatterns['index']} className="btn btn-ghost text-xl">{APP_NAME}</Link>
            </div>
            <div className="navbar-end">
                {cartLink}
            </div>
        </div>
    );
};