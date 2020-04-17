import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { NewsComponent } from './news/news.component';
import { NewsOneComponent } from './news-one/news-one.component';
import { NewsService } from './news.service';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsCategoryComponent } from './news-category/news-category.component';
import { NewsCountryComponent } from './news-country/news-country.component';
import { NewssourcesComponent } from './newssources/newssources.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewssourcesListComponent } from './newssources/newssources-list/newssources-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsOneComponent,
    NewsDetailsComponent,
    NewsCategoryComponent,
    NewsCountryComponent,
    NewssourcesComponent,
    NewsListComponent,
    NewssourcesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
