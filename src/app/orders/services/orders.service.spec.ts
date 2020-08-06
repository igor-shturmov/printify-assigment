import { async, TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('OrdersService', () => {
    let service: OrdersService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [HttpClient, HttpHandler]
        }).compileComponents();
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OrdersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
