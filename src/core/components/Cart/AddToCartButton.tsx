import {useCart} from "@/shared/Cart/useCart";

export const AddToCartButton = ({product}: { product: Product }) => {
    const {addProduct} = useCart()

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        addProduct({...product});
    }

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Agregar al carrito
        </button>
    );
};