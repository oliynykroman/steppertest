import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StepperComponent} from './components/stepper/stepper.component';
import {StepperConfigService} from "./services/data.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StepperComponent
  ],
  providers: [StepperConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
