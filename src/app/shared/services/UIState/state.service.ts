import { UIState } from './../../enums/UIState';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public UIState;
  public UIState$;

  constructor() {
    this.UIState = new BehaviorSubject<UIState>(UIState.notInitialized);
    this.UIState$ = this.UIState.asObservable();
  }
}
