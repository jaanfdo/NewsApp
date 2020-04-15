import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.css']
})
export class NewsCategoryComponent implements OnInit {
  data: any;

  Categories: any[] = [
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'health', name: 'Health' },
    { id: 'science', name: 'Science' },
    { id: 'sports', name: 'Sports' },
    { id: 'technology', name: 'Technology' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'business', name: 'Business' }
  ];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.Categories;
  }

  NewsOne(item) {
    console.log(item.id);
    this.newsService
      .data('top-headlines?category=' + item.id)
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }
}
