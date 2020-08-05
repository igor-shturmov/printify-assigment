import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrdersTableContainerComponent } from './containers/orders-table-container/orders-table-container.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { AddOrderDialogComponent } from './components/add-order-dialog/add-order-dialog.component';

import { OrdersService } from './services/orders.service';
import { MatButtonModule } from '@angular/material/button';
import { DialogWizzardComponent } from './components/dialog-wizzard/dialog-wizzard.component';
import { DialogFooterComponent } from './components/dialog-footer/dialog-footer.component';
import { PrepareOrderComponent } from './components/prepare-order/prepare-order.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';

@NgModule({
    declarations: [
        OrdersPageComponent,
        OrdersTableContainerComponent,
        OrdersTableComponent,
        AddOrderDialogComponent,
        DialogWizzardComponent,
        DialogFooterComponent,
        PrepareOrderComponent,
        ConfirmOrderComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatTableModule,
        MatDialogModule,
        MatButtonModule
    ],
    providers: [OrdersService],
    entryComponents: [AddOrderDialogComponent]
})
export class OrdersModule {
}
