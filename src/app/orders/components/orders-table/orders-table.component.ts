import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IOrder, IOrders } from '../../interfaces/order';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersTableComponent {
  @Input() orders: IOrders;
  @Input() selectable = false;
  @Input() selectedOrder: IOrder;

  @Output() selectOrder: EventEmitter<IOrder> = new EventEmitter<IOrder>();

  readonly displayedColumns: string[] = ['fullName', 'created', 'price', 'product', 'fulfilment'];
}
