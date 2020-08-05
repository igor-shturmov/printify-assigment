import { ChangeDetectionStrategy, Component, DoCheck, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IDialogData } from '../../interfaces/dialog-data';
import { IOrder } from '../../interfaces/order';

import { Subscription } from 'rxjs';

import { SOCKS } from '../../constants/socks';
import { takeWhile } from 'rxjs/operators';

@Component({
    selector: 'app-add-order-dialog',
    templateUrl: './add-order-dialog.component.html',
    styleUrls: ['./add-order-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddOrderDialogComponent implements OnDestroy {
    selectedStep = 1;
    selectedOrder: IOrder;
    form: FormGroup;
    formSubscription: Subscription;
    private alive = true;

    readonly socks = SOCKS;

    constructor(private dialogRef: MatDialogRef<AddOrderDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: IDialogData,
                private fb: FormBuilder) {
    }

    get formValid(): boolean {
        return this.form && this.form.valid;
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

        if (this.formSubscription) {
            this.formSubscription.unsubscribe();
        }

        this.form = this.fb.group({
            fullName: [order.fullName, Validators.required],
            address: [order.address, Validators.required],
            product: [this.socks.find(sock => sock.value === this.selectedOrder.product) || '', Validators.required]
        });

        this.formSubscription = this.form.valueChanges
            .pipe(takeWhile(() => this.alive))
            .subscribe(formValue => {
                this.selectedOrder = {
                    ...this.selectedOrder,
                    address: formValue.address,
                    fullName: formValue.fullName,
                    product: formValue.product.value,
                    price: formValue.product.cost
                };
            });
    }

    confirmHandler(): void {
        this.dialogRef.close(this.selectedOrder);
    }

    ngOnDestroy(): void {
        this.alive = false;
    }
}
