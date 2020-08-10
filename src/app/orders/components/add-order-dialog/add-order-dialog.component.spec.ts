import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { AddOrderDialogComponent } from './add-order-dialog.component';

import { orders } from '../../constants/order-mock';

describe('AddOrderDialogComponent', () => {
    let component: AddOrderDialogComponent;
    let fixture: ComponentFixture<AddOrderDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddOrderDialogComponent],
            imports: [MatDialogModule, ReactiveFormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: MatDialogRef, useValue: AddOrderDialogComponent },
                { provide: MAT_DIALOG_DATA, useValue: {  orders } }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddOrderDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not have some socks', () => {
        expect(component.socks.length).toBe(3);
    });

    it('should have orders from dialog data', () => {
        expect(component.orders).toBe(orders);
    });

    it('should not have any subscriptions to form', () => {
        expect(component.formSubscription).not.toBeTruthy();
    });

    it('should selected step as 1', () => {
        expect(component.selectedStep).toBe(1);
    });

    it('should selected step as 1', () => {
        expect(component.selectedStep).toBe(1);
    });

    it('form should be not initialized', () => {
        expect(component.form).not.toBeTruthy();
    });

    it('should not have selected order by default', () => {
        expect(component.selectedOrder).toBeFalsy();
    });

    it('form valid should be false by default', () => {
        expect(component.formValid).toBeFalsy();
    });

    it('calling next step handler should change value of selected step to 2', () => {
        component.nextStepHandler();
        expect(component.selectedStep).toBe(2);
    });

    it('calling previous step handler should change value of selected step to 0', () => {
        component.previousStepHandler();
        expect(component.selectedStep).toBe(0);
    });

    it('calling find by name method should filter orders that only have Igor in name', () => {
        component.findOrdersByNameHandler('Igor');
        expect(component.orders.length).toBe(1);
    });

    it('calling select order handler should select an order', () => {
        component.selectOrderHandler(component.orders[1]);

        expect(component.selectedOrder).toBe(component.orders[1]);
    });

    it('calling select order handler should create a form', () => {
        component.selectOrderHandler(component.orders[1]);

        expect(component.form).toBeTruthy('Should create a form');
        expect(component.form.controls.fullName.value).toBe(component.orders[1].fullName, 'Should have name form selected order');
    });

    it('calling select order handler should create a subscription to form', () => {
        component.selectOrderHandler(component.orders[1]);

        expect(component.formSubscription).toBeTruthy('Should create a subscription');
    });
});
