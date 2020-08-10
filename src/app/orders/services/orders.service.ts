import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

import { ordersObjectToArray } from '../utils/mappers';

import { IOrder, IOrders } from '../interfaces/order';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OrdersService {
    private readonly apiUrl = environment.apiUrl;

    private readonly orders: BehaviorSubject<IOrders> = new BehaviorSubject<any>([]);
    readonly orders$: Observable<IOrders> = this.orders.asObservable();

    constructor(private http: HttpClient) {
    }

    getOrders(): Observable<IOrders> {
        return this.http.get(`${ this.apiUrl }/orders.json`)
            .pipe(
                ordersObjectToArray,
                tap((orders: IOrders) => this.orders.next(orders))
            );
    }

    createOrder(order: IOrder): Observable<IOrder> {
        const data = {
            [order.id]: order
        };
        return this.http.patch<IOrder>(`${ this.apiUrl }/orders.json`, data)
            .pipe(tap(() => this.getOrders().subscribe()));
    }
}
