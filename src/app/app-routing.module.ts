import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
// import { NewsOneComponent } from './news-one/news-one.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsCategoryComponent } from './news-category/news-category.component';
import { NewsCountryComponent } from './news-country/news-country.component';
import { NewssourcesComponent } from './newssources/newssources.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  // { path: 'news-one', component: NewsOneComponent },
  { path: 'newsdetail', component: NewsDetailsComponent },
  { path: 'newscategory', component: NewsCategoryComponent },
  { path: 'newscounty', component: NewsCountryComponent },
  { path: 'newssources', component: NewssourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
