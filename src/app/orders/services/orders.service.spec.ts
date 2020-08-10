import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrdersService } from './orders.service';

import { environment } from '../../../environments/environment';

import { orders, ordersUpdated } from '../constants/order-mock';

describe('OrdersService', () => {
    let service: OrdersService;
    let httpTestingController: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [OrdersService],
            imports: [HttpClientTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        service = TestBed.inject(OrdersService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should not have orders by default', () => {
        service.orders$.subscribe(data => expect(data.length).toBe(0));
    });

    it('should receive all orders', () => {
        service.getOrders()
            .subscribe(data => {
                expect(data).toBeTruthy();
                expect(data.length).toEqual(3);

                service.orders$.subscribe(serviceOrders => {
                    expect(serviceOrders).toBeTruthy();
                    expect(serviceOrders.length).toEqual(3);
                });
            });

        const req = httpTestingController.expectOne(`${ environment.apiUrl }/orders.json`);
        expect(req.request.method).toBe('GET');
        req.flush(orders);
    });

    it('should update order', () => {
        service.createOrder({ ...orders[1], fullName: 'Gendalf The Grey' })
            .subscribe(updatedOrder => {
                expect(updatedOrder.fullName).toBe('Gendalf The Grey');
            });

        const req = httpTestingController.expectOne(`${ environment.apiUrl }/orders.json`);
        expect(req.request.method).toBe('PATCH');
        req.flush(ordersUpdated[1]);
    });
});
