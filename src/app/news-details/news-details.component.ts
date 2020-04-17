import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  articledetail: any;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log(this.newsService.currentArticle);
    this.articledetail = this.newsService.currentArticle;
  }

}
