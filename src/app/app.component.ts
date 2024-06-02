import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {StepInterface} from "./types/step.interface";
import {StepperConfigService} from "./services/data.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {StepperOrientationEnum} from "./components/stepper/enums/orientation.enum";
import {StepperColorEnum} from "./components/stepper/enums/color.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  steps$: Observable<StepInterface[]> | undefined;
  form: FormGroup | undefined;
  currentStep = 0;

  orientationFields: { title: string, value: StepperOrientationEnum }[] = [];
  colorFields: { title: string, value: StepperColorEnum }[] = [];

  private colorEnum = StepperColorEnum;
  private orientationEnum = StepperOrientationEnum;

  private stepperConfigService = inject(StepperConfigService);
  private fb = inject(FormBuilder);

  get orientation(): StepperOrientationEnum {
    const orientation = this.form?.get('orientation');
    return orientation ? orientation.value : this.orientationEnum.Horizontal;
  }

  get color(): StepperColorEnum {
    const color = this.form?.get('color');
    return color ? color.value : this.colorEnum.Default;
  }

  get step(): number {
    const step = this.form?.get('step');
    return step ? step.value : 0;
  }

  get customColor(): string {
    const customColor = this.form?.get('customColor');
    return customColor ? customColor.value : false;
  }

  ngOnInit() {
    this.getStepperConfig();
    this.getOrientationFields();
    this.getColorFields();
    this.initForm();
  }

  stepChange(index: number) {
    this.currentStep = index;
  }

  private getStepperConfig() {
    this.steps$ = this.stepperConfigService.getSteps();
  }

  private initForm() {
    this.form = this.fb.group({
      orientation: this.fb.control(this.orientationEnum.Horizontal),
      color: this.fb.control(this.colorEnum.Default),
      step: this.fb.control(0),
      customColor: this.fb.control(false)
    });
  }

  private getOrientationFields() {
    this.orientationFields = Object.entries(this.orientationEnum).map(([key, value]) => {
      return {title: key, value}
    });
  }

  private getColorFields() {
    this.colorFields = Object.entries(this.colorEnum).map(([key, value]) => {
      return {title: key, value}
    });
  }

}
