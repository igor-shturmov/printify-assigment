import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IOrder } from '../../interfaces/order';
import { ISocks } from '../../interfaces/sock';

@Component({
    selector: 'app-prepare-order',
    templateUrl: './prepare-order.component.html',
    styleUrls: ['./prepare-order.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrepareOrderComponent {
    @Input() selectedOrder: IOrder;
    @Input() form: FormGroup;
    @Input() socks: ISocks;
}
