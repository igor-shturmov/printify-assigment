import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IOrder, IOrders } from '../interfaces/order';

export const ordersObjectToArray = (observer: Observable<{ [key: string]: IOrder }>): Observable<IOrders> => {
    return observer.pipe(
        map(entries => {
            const orders: IOrders = [];
            for (const key in entries) {
                if (key) {
                    orders.push({ ...entries[key], id: key });
                }
            }

            return orders;
        })
    );
};
