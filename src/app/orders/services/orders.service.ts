import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

import { ordersObjectToArray } from '../utils/mappers';

import { IOrder, IOrders } from '../interfaces/order';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private readonly apiUrl = environment.apiUrl;

  private readonly orders: BehaviorSubject<IOrders> = new BehaviorSubject<any>([]);
  readonly orders$: Observable<IOrders> = this.orders.asObservable();

  constructor(private http: HttpClient) { }

  getOrders(): void {
    this.http.get(`${this.apiUrl}/orders.json`)
        .pipe(ordersObjectToArray)
        .subscribe((orders: IOrders) => this.orders.next(orders));
  }

  createOrder(order: IOrder): void {
    const data = {
      [order.id]: order
    };
    this.http.patch(`${this.apiUrl}/orders.json`, data)
        .subscribe(() => this.getOrders());
  }
}
