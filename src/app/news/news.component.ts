import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { Categories, Country } from '../value';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data: any;
  selectedArticle: any;
  category: any;
  country: any;
  sources: any;
  constructor(private newsService: NewsService, private router: Router) {
    this.category = Categories;
    this.country = Country;
    this.newsService
      .sourcedata('sources')
      .subscribe(data => {
        console.log(data);
        this.sources = data;
      });
  }

  ngOnInit() {
    this.newsService
      .data('top-headlines?sources=techcrunch')
      .subscribe(data => {
        console.log(data);
        this.data = data;

        console.log(data['articles'][0]);
        this.selectedArticle = data['articles'][0];
      });
  }

  NewsOne(article) {
    this.selectedArticle = article;
    // this.router.navigate(['/news-one']);
  }
}
