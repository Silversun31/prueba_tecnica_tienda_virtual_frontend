import {useCart} from "@/shared/Cart/useCart";
import useNotificationService from "@/services/Notification";

export const AddToCartButton = ({product}: { product: Product }) => {
    const {addProduct} = useCart()
    const NotificationSrv = useNotificationService()

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        addProduct({...product});
        NotificationSrv.notify('Producto agregado al carrito', {type: 'success'});
        console.log('Producto agregado al carrito', product);
    }

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Agregar al carrito
        </button>
    );
};