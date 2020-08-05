export type IOrders = Array<IOrder>;

export interface IOrder {
    id: string;
    fullName: string;
    created: string;
    price: number;
    product: string;
    fulfilment: string;
}
