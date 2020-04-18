import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newssources-list',
  templateUrl: './newssources-list.component.html',
  styleUrls: ['./newssources-list.component.css']
})
export class NewssourcesListComponent implements OnInit {
  data: any;
  constructor(private newsService: NewsService, private router: Router) {
    this.newsService
      .sourcedata('sources')
      .subscribe(data => {
        console.log(data);
        this.data = data;
        console.log(this.data);
      });
  }

  ngOnInit() {
  }

  // NewsOne(article) {
  //   this.newsService.currentArticle = article;
  //   console.log(this.newsService.currentArticle);
  //   this.router.navigate(['/newsdetail']);
  // }

  NewsOne(item) {
    console.log(item.id);
    this.newsService
      .data('top-headlines?sources=' + item.id)
      .subscribe(data => {
        console.log(data);
        this.newsService.currentArticle = data;
      });
  }

}
