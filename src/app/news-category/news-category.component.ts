import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Categories } from '../value';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.css']
})
export class NewsCategoryComponent implements OnInit {
  data: any;
  category: any;
  selectedArticle: any;
  constructor(private newsService: NewsService, private router: Router, private _Avroute: ActivatedRoute) {
    this.category = Categories;
    console.log(Categories);
  }

  ngOnInit() {
    let id = this._Avroute.snapshot.paramMap.get('category');
    console.log(id);
    if (id === null || id === undefined || id === '') {
      console.log(this.category[0]);
      id = this.category[0]['id'];
    }
    console.log(id);
    this.newsService
      .data('top-headlines?category=' + id)
      .subscribe(data => {
        console.log(data);
        this.selectedArticle = data;
      });
  }

  NewsOne(item) {
    console.log(item.id);
    this.newsService
      .data('top-headlines?category=' + item.id)
      .subscribe(data => {
        console.log(data);
        this.selectedArticle = data;
      });
  }

  // NewsDetail(article) {
  //   this.newsService.currentArticle = article;
  //   console.log(this.newsService.currentArticle);
  //   this.router.navigate(['/newsdetail']);
  // }
}
