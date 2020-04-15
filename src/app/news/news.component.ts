import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data: any;
  selectedArticle: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService
      .data('top-headlines?sources=techcrunch')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }
  NewsOne(article) {
    this.selectedArticle = article;
    // this.router.navigate(['/news-one']);
  }
}
