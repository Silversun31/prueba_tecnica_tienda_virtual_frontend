export interface BaseCartProduct {
    id: number;

    [key: string]: any;
}

export interface CartProduct extends BaseCartProduct {
    quantity: number;
}