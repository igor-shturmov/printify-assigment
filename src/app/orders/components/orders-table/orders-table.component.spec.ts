import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { OrdersTableComponent } from './orders-table.component';

import { order, orders } from '../../constants/order-mock';
import { By } from '@angular/platform-browser';

describe('OrdersTableComponent', () => {
    let component: OrdersTableComponent;
    let fixture: ComponentFixture<OrdersTableComponent>;
    let el: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrdersTableComponent],
            imports: [MatTableModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrdersTableComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should not have any orders', () => {
        expect(component.orders).not.toBeTruthy();
    });

    it('should have 3 orders', () => {
        component.orders = orders;
        fixture.detectChanges();
        const matRows = el.queryAll(By.css('mat-row'));

        expect(component.orders).toBeTruthy('Should be added');
        expect(component.orders.length).toBe(3);
        expect(matRows.length).toBe(3, 'Should create 3 rows in table');
    });

    it('should not have selected order', () => {
        expect(component.selectedOrder).not.toBeTruthy();
    });

    it('should have selected order', () => {
        component.selectedOrder = order;
        fixture.detectChanges();

        expect(component.selectedOrder).toBe(order);
    });

    it('selectable should be false', () => {
        component.selectable = false;
        fixture.detectChanges();

        expect(component.selectable).toBe(false);
    });

    it('selectable should be true', () => {
        component.selectable = true;
        fixture.detectChanges();

        expect(component.selectable).toBe(true);
    });

    it('should have displayed columns', () => {
        expect(component.displayedColumns).toBeTruthy();
        expect(component.displayedColumns.length).toBe(5);
    });

    it('should have select the row and contain the name', () => {
        component.selectable = true;
        component.selectedOrder = orders[1];
        component.orders = orders;
        fixture.detectChanges();

        const matRows = el.queryAll(By.css('mat-row'));

        expect(matRows[1].nativeElement.textContent).toContain(orders[1].fullName, 'Second row should have name of order');
        expect(matRows[1].classes.selected).toBe(true, 'Should have selected class');
    });
});
