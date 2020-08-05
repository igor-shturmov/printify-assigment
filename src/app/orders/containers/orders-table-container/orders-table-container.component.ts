import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OrdersService } from '../../services/orders.service';

import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { AddOrderDialogComponent } from '../../components/add-order-dialog/add-order-dialog.component';

import { order as orderMock } from '../../constants/order-mock';

import { IOrders } from '../../interfaces/order';
import { IDialogData } from '../../interfaces/dialog-data';

@Component({
    selector: 'app-orders-table-container',
    templateUrl: './orders-table-container.component.html',
    styleUrls: ['./orders-table-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersTableContainerComponent implements OnInit {
    orders$: Observable<IOrders> = this.ordersService.orders$;

    constructor(private ordersService: OrdersService,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.ordersService.getOrders();
        // this.ordersService.createOrder(orderMock);
    }

    showAddOrderDialog(orders: IOrders): void {
      this.dialog.open<AddOrderDialogComponent, IDialogData>(AddOrderDialogComponent, { data: { orders }, width: '70%' })
          .afterClosed()
          .pipe(take(1), filter(order => !!order))
          .subscribe(order => this.ordersService.createOrder(order));
    }

}
