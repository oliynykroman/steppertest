import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component, ContentChildren, EventEmitter,
  Input, Output, QueryList
} from '@angular/core';
import {StepInterface} from "../../types/step.interface";
import {CommonModule} from "@angular/common";
import {StepperOrientationEnum} from "./enums/orientation.enum";
import {StepperColorEnum} from "./enums/color.enum";
import {StepperContentComponent} from "./components/stepper-content/stepper-content.component";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  imports: [
    CommonModule,
    StepperContentComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StepperComponent implements AfterContentInit {

  @ContentChildren(StepperContentComponent) contentChildren!: QueryList<StepperContentComponent>;

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

  ngAfterContentInit(): void {
    const stepperContent = this.contentChildren.toArray();
    const currentStepContent = stepperContent[this.currentStep];
    if (currentStepContent) {
      currentStepContent.isComponentShown = true;
    }
    this.stepChange.subscribe((data) => {
      stepperContent.forEach((s) => {
        s.isComponentShown = false;
      });
      stepperContent[data].isComponentShown = true;
    });
  }
}
