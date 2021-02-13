import { HttpService } from './shared/services/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activity:IActivity;
  title = 'random-tasks';

  public constructor(private httpService: HttpService){
  }

  generate(){
    this.httpService.get('https://www.boredapi.com/api/activity').subscribe((activity)=>{
      this.activity = activity;
    });
  }
}
-6
