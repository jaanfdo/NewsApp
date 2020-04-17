import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Categories } from '../value';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.css']
})
export class NewsCategoryComponent implements OnInit {
  data: any;
  category:any;
  selectedArticle: any;
  constructor(private newsService: NewsService, private router: Router) {
    this.category = Categories;
    console.log(Categories);
   }

  ngOnInit() {    
    console.log(this.category[0]);
    console.log(this.category[0]['id']);
    this.newsService
      .data('top-headlines?category=' + this.category[0]['id'])
      .subscribe(data => {
        console.log(data);
        //this.data = data;

        this.selectedArticle = data;
      });
  }

  NewsOne(item) {
    console.log(item.id);
    this.newsService
      .data('top-headlines?category=' + item.id)
      .subscribe(data => {
        console.log(data);
        //this.data = data;

        this.selectedArticle = data;
      });
  }

  // NewsDetail(article) {
  //   this.newsService.currentArticle = article;
  //   console.log(this.newsService.currentArticle);
  //   this.router.navigate(['/newsdetail']);
  // }
}
