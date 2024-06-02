import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StepperComponent} from './components/stepper/stepper.component';
import {StepperConfigService} from "./services/data.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {StepperContentComponent} from "./components/stepper/components/stepper-content/stepper-content.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StepperComponent,
    StepperContentComponent
  ],
  providers: [StepperConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
