import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IDialogData } from '../../interfaces/dialog-data';
import { IOrder } from '../../interfaces/order';

@Component({
    selector: 'app-add-order-dialog',
    templateUrl: './add-order-dialog.component.html',
    styleUrls: ['./add-order-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddOrderDialogComponent {
    selectedStep = 1;
    selectedOrder: IOrder;

    constructor(private dialogRef: MatDialogRef<AddOrderDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: IDialogData) {
    }

    cancelSelectingHandler(): void {
        this.dialogRef.close();
    }

    previousStepHandler(): void {
        this.selectedStep -= 1;
    }

    nextStepHandler(): void {
        this.selectedStep += 1;
    }

    selectOrderHandler(order: IOrder): void {
        this.selectedOrder = order;
    }
}
