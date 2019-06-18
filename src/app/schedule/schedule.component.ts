import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  data: any;
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service
      .data('http://localhost:1234/AndroidPHP/server.php?Action=viewSchedule')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

}
