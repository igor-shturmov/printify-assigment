import { IOrder, IOrders } from '../interfaces/order';

export const order: IOrder = {
    id: '1',
    fullName: 'Igor Shturmov',
    created: '09.12.2019',
    address: 'Kyiv',
    price: 20,
    product: 'Socks',
    fulfilment: 'Started'
};

export const orders: IOrders = [
    {
        id: '1',
        fullName: 'Igor Shturmov',
        created: '09.12.2019',
        address: 'Kyiv',
        price: 20,
        product: 'Socks',
        fulfilment: 'Started'
    }, {
        id: '2',
        fullName: 'Alex Grey',
        created: '09.07.2019',
        address: 'Odessa',
        price: 15,
        product: 'Orange Socks',
        fulfilment: 'Finished'
    }, {
        id: '3',
        fullName: 'Ivan White',
        created: '09.12.2019',
        address: 'Kharkiv',
        price: 25,
        product: 'Wool Socks',
        fulfilment: 'In Progress'
    }
];

export const ordersUpdated: IOrders = [
    {
        id: '1',
        fullName: 'Igor Shturmov',
        created: '09.12.2019',
        address: 'Kyiv',
        price: 20,
        product: 'Socks',
        fulfilment: 'Started'
    }, {
        id: '2',
        fullName: 'Gendalf The Grey',
        created: '09.07.2019',
        address: 'Odessa',
        price: 15,
        product: 'Orange Socks',
        fulfilment: 'Finished'
    }, {
        id: '3',
        fullName: 'Ivan White',
        created: '09.12.2019',
        address: 'Kharkiv',
        price: 25,
        product: 'Wool Socks',
        fulfilment: 'In Progress'
    }
];
