import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() article: any;
  constructor(private newsService: NewsService, private router: Router, private _Avroute: ActivatedRoute) { }

  ngOnInit() {
    this.getNews();
  }

  NewsOne(article) {
    this.newsService.currentArticle = article;
    console.log(this.newsService.currentArticle);
    this.router.navigate(['/newsdetail']);
  }

  getNews(): void {
    const id = this._Avroute.snapshot.paramMap.get('source');
    if (id !== null && id !== undefined && id !== '') {
      this.newsService
        .data('top-headlines?sources=' + id)
        .subscribe(data => {
          console.log(data);
          this.article = data;
        });
    }
  }
}
