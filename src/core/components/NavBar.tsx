import {APP_NAME} from "../../../app.config";
import Link from "next/link";
import {urlpatterns} from "../../../urls";

export const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link href={urlpatterns['index']} className="btn btn-ghost text-xl">{APP_NAME}</Link>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};