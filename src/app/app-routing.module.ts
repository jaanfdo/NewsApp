import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { NewsOneComponent } from './news-one/news-one.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { EventComponent } from './event/event.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'news-one', component: NewsOneComponent },
  { path: 'newsdetail', component: NewsDetailsComponent },
  { path: 'event', component: EventComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'appointment', component: AppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
