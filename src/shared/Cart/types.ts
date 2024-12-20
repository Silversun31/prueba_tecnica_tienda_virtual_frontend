export interface BaseCartProduct {
    id: number;
    title: string;
    [key: string]: any;
}

export interface CartProduct extends BaseCartProduct {
    quantity: number;
}