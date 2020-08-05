import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IOrder } from '../../interfaces/order';

@Component({
    selector: 'app-confirm-order',
    templateUrl: './confirm-order.component.html',
    styleUrls: ['./confirm-order.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOrderComponent {
    @Input() selectedOrder: IOrder;
}
