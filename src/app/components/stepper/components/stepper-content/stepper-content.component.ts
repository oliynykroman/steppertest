import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-stepper-content',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  animations: [
    trigger('fade', [
      state('true', style({
        overflow: 'hidden',
        height: '*',
        opacity: '1',
      })),
      state('false', style({
        overflow: 'hidden',
        height: 0,
        opacity: 0,
      })),
      transition('* => *', [
        animate('200ms ease-in-out'),
      ]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StepperContentComponent {
  @HostBinding('@fade')
  get currentAnimationState() {
    return this.isComponentShown;
  }

  @Input() isComponentShown = false;

}
