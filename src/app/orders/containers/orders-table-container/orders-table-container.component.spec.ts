import { async, ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { OrdersTableContainerComponent } from './orders-table-container.component';

import { OrdersService } from '../../services/orders.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { orders } from '../../constants/order-mock';
import { By } from '@angular/platform-browser';


/* TODO: sorry but it's hard to understand how to test SMART components, and it's not a lot of information about it,
         by this reason I didn't complete testing in this component */

describe('OrdersTableContainerComponent', () => {
    let component: OrdersTableContainerComponent;
    let fixture: ComponentFixture<OrdersTableContainerComponent>;
    let el: DebugElement;
    let ordersService: any;

    beforeEach(async(() => {
        const ordersServiceSpy = jasmine.createSpyObj('OrdersService', ['getOrders']);

        TestBed.configureTestingModule({
            declarations: [OrdersTableContainerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [MatDialogModule, HttpClientTestingModule, BrowserAnimationsModule],
            providers: [{
                provide: OrdersService,
                useValue: ordersServiceSpy
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrdersTableContainerComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        ordersService = TestBed.inject(OrdersService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not have orders by default', () => {
        expect(component.orders$).toBeFalsy();
    });

    it('should have orders after calling getting orders', () => {
        ordersService.getOrders.and.returnValue(of(orders));
        fixture.detectChanges();

        const table = el.query(By.css('app-orders-table'));
        console.log(table.properties);
    });
});
