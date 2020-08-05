import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTableContainerComponent } from './orders-table-container.component';

describe('OrdersTableContainerComponent', () => {
  let component: OrdersTableContainerComponent;
  let fixture: ComponentFixture<OrdersTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
