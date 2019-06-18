import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
// import { NewsOneComponent } from './news-one/news-one.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  // { path: 'news-one', component: NewsOneComponent },
  { path: 'newsdetail', component: NewsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
