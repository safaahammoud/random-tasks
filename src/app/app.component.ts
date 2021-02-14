import { StateService } from './shared/services/UIState/state.service';
import { Component, OnInit } from '@angular/core';
import { UIState } from './shared/enums/UIState';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  UIState$;
  UIState;
  public constructor(private stateService: StateService){
  }

  public ngOnInit(){
    this.UIState = UIState;
    this.UIState$ = this.stateService.UIState$;
    this.stateService.UIState.next(UIState.empty);
  }
}
