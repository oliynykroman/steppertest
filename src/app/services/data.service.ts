import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StepInterface} from "../types/step.interface";

@Injectable()
export class StepperConfigService {

  constructor(private http: HttpClient) {
  }

  getSteps(): Observable<StepInterface[]> {
    return this.http.get<StepInterface[]>('assets/mock/steps.json');
  }
}
