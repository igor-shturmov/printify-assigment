import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-footer',
  templateUrl: './dialog-footer.component.html',
  styleUrls: ['./dialog-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogFooterComponent {
  @Input() selectedStep: number;
  @Input() orderSelected: boolean;

  @Output() previousStep: EventEmitter<null> = new EventEmitter<null>();
  @Output() nextStep: EventEmitter<null> = new EventEmitter<null>();
  @Output() cancel: EventEmitter<null> = new EventEmitter<null>();
  @Output() confirm: EventEmitter<null> = new EventEmitter<null>();
}
