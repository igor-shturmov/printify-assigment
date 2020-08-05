import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { WIZARD_STEPPERS } from '../../constants/wizzard-steps';

@Component({
  selector: 'app-dialog-wizzard',
  templateUrl: './dialog-wizzard.component.html',
  styleUrls: ['./dialog-wizzard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogWizzardComponent {
  @Input() selectedStep: number;

  readonly steps = WIZARD_STEPPERS;
}
