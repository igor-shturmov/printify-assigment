import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ConfirmOrderComponent } from './confirm-order.component';

import { order } from '../../constants/order-mock';

describe('ConfirmOrderComponent', () => {
  let component: ConfirmOrderComponent;
  let fixture: ComponentFixture<ConfirmOrderComponent>;
  let el: DebugElement;
  let strongElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmOrderComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmOrderComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selected order should be undefined', () => {
    expect(component.selectedOrder).not.toBeTruthy();
  });

  it('selected order should exist', () => {
    component.selectedOrder = order;
    fixture.detectChanges();

    expect(component.selectedOrder.fullName).toContain(order.fullName);
  });

  it('strong with id order-name should contain user name', () => {
    component.selectedOrder = order;
    fixture.detectChanges();
    strongElement = el.query(By.css('#order-name')).nativeElement;

    expect(strongElement.textContent).toContain(order.fullName);
  });

  it('strong with id order-address should contain address', () => {
    component.selectedOrder = order;
    fixture.detectChanges();
    strongElement = el.query(By.css('#order-address')).nativeElement;

    expect(strongElement.textContent).toContain(order.address);
  });

  it('strong with id order-product should contain product', () => {
    component.selectedOrder = order;
    fixture.detectChanges();
    strongElement = el.query(By.css('#order-product')).nativeElement;

    expect(strongElement.textContent).toContain(order.product);
  });

  it('strong with id order-price should contain price', () => {
    component.selectedOrder = order;
    fixture.detectChanges();
    strongElement = el.query(By.css('#order-price')).nativeElement;

    expect(strongElement.textContent).toContain(String(order.price));
  });
});
