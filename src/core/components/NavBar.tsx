import {APP_NAME} from "../../../app.config";
import Link from "next/link";
import {urlpatterns} from "../../../urls";
import {BsCart3} from "react-icons/bs";

export const NavBar = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <Link href={urlpatterns['index']} className="btn btn-ghost text-xl">{APP_NAME}</Link>
            </div>
            <div className="navbar-end">
                <Link href={urlpatterns['cart-base']} className="btn btn-ghost rounded-full"><BsCart3 size={18}/></Link>
            </div>
        </div>
    );
};