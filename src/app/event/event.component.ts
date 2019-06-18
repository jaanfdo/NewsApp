import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  data: any;
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service
      .data('http://localhost:1234/AndroidPHP/server.php?Action=viewEvents')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

}
