import { HttpService } from './../../../../shared/services/http/http.service';
import { UIState } from './../../../../shared/enums/UIState';
import { IActivity } from './../../../../shared/interface/IActivity.interface';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tasks-empty',
  templateUrl: './tasks-empty.component.html',
  styleUrls: ['./tasks-empty.component.css']
})
export class TasksEmptyComponent implements OnInit {
  activities: Array<IActivity>;
  title = 'random-tasks';

  public constructor(private httpService: HttpService){
  }

  public ngOnInit(): void {
    this.activities = [];
  }

  generate(){
    this.httpService.get('https://www.boredapi.com/api/activity').subscribe((activity)=>{
      this.activities.push(activity);
    });
  }
}
