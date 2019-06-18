import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-one',
  templateUrl: './news-one.component.html',
  styleUrls: ['./news-one.component.css']
})
export class NewsOneComponent implements OnInit {
  @Input() article: any;
  selectedArticleDetail: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    //console.log(this.currentArticle);
    //this.article = this.newsService.currentArticle;
  }

  NewsDetail(article) {
    this.newsService.currentArticle = article;
    console.log(this.newsService.currentArticle);
    this.router.navigate(['/newsdetail']);
  }
}
