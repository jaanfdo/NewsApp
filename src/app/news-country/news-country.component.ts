import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-country',
  templateUrl: './news-country.component.html',
  styleUrls: ['./news-country.component.css']
})
export class NewsCountryComponent implements OnInit {
  data: any;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService
      .data('top-headlines?country=us')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

}
