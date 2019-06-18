import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  data: any;
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service
      .data('http://localhost:1234/AndroidPHP/server.php?Action=viewAppointment')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

}
