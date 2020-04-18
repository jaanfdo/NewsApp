import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Country } from '../value';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-country',
  templateUrl: './news-country.component.html',
  styleUrls: ['./news-country.component.css']
})
export class NewsCountryComponent implements OnInit {
  data: any;
  country: any;
  selectedArticle: any;

  constructor(private newsService: NewsService, private router: Router, private _Avroute: ActivatedRoute) {
    this.country = Country;
  }

  ngOnInit() {
    let id = this._Avroute.snapshot.paramMap.get('country');
    console.log(id);
    if (id === null || id === undefined || id === '') {
      console.log(this.country[0]);
      console.log(this.country[0]['id']);
      id = this.country[0]['id'];
    }
    this.newsService
      .data('top-headlines?country=' + id)
      .subscribe(data => {
        console.log(data);
        this.selectedArticle = data;
      });
  }
  NewsOne(item) {
    console.log(item.id);
    this.newsService
      .data('top-headlines?country=' + item.id)
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
