import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {StepInterface} from "../../types/step.interface";
import {CommonModule} from "@angular/common";
import {StepperOrientationEnum} from "./enums/orientation.enum";
import {StepperColorEnum} from "./enums/color.enum";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  imports: [
    CommonModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StepperComponent{

  @Input() steps: StepInterface[] = [];
  @Input() orientation: StepperOrientationEnum = StepperOrientationEnum.Horizontal;
  @Input() color: StepperColorEnum = StepperColorEnum.Default;

  private _step = 0;
  @Input() set currentStep(value: number) {
    if (!value || value < 0 || value > this.steps.length - 1) {
      this._step = 0;
    } else {
      this._step = value;
    }
  };
  get currentStep(): number {
    return this._step;
  }

  @Output() stepChange = new EventEmitter<number>();

  changeStep(stepIndex: number): void {
    this.currentStep = stepIndex;
    this.stepChange.emit(stepIndex);
  }

}
