import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrepareOrderComponent } from './prepare-order.component';

import { order } from '../../constants/order-mock';

import { SOCKS } from '../../constants/socks';

describe('PrepareOrderComponent', () => {
    let component: PrepareOrderComponent;
    let fixture: ComponentFixture<PrepareOrderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrepareOrderComponent],
            imports: [ReactiveFormsModule, FormsModule, MatSelectModule, MatInputModule, BrowserAnimationsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PrepareOrderComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('shouldn\'t have form', () => {
        expect(component.form).not.toBeTruthy();
    });

    it('shouldn\'t have selected order', () => {
        expect(component.selectedOrder).not.toBeTruthy();
    });

    it('shouldn\'t have socks', () => {
        expect(component.socks).not.toBeTruthy();
    });

    it('should have selected order', () => {
        component.selectedOrder = order;
        fixture.detectChanges();

        expect(component.selectedOrder).toBe(order);
    });

    it('should have socks', () => {
        component.socks = SOCKS;
        fixture.detectChanges();

        expect(component.socks).toBe(SOCKS);
    });

    it('should create a form', () => {
        const fb = TestBed.inject(FormBuilder);
        component.form = fb.group({
            fullName: ['', Validators.required],
            address: ['', Validators.required],
            product: ['', Validators.required]
        });
        fixture.detectChanges();

        expect(component.form).toBeTruthy();
        expect(component.form.controls.fullName.valid).toBeFalsy();
        expect(component.form.controls.address.valid).toBeFalsy();
        expect(component.form.controls.product.valid).toBeFalsy();
    });
});
