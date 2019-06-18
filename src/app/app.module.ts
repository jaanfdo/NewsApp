import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NewsComponent } from './news/news.component';
import { NewsOneComponent } from './news-one/news-one.component';
import { NewsService } from './news.service';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { EventComponent } from './event/event.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsOneComponent,
    NewsDetailsComponent,
    EventComponent,
    ScheduleComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NewsService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
