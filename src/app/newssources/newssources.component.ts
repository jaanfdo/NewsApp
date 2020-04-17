import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newssources',
  templateUrl: './newssources.component.html',
  styleUrls: ['./newssources.component.css']
})
export class NewssourcesComponent implements OnInit {
  data: any;
  selectedArticle: any;
  constructor(private newsService: NewsService, private router: Router) { 
    this.newsService
      .sourcedata('sources')
      .subscribe(data => {
        console.log(data);
        console.log(data['sources'].slice(0,5));
        this.data = data;
        console.log(this.data['sources'][0]);
        this.newsService
          .data('top-headlines?sources=' + this.data['sources'][0].id)
          .subscribe(data => {
            console.log(data);
            //this.newsService.currentArticle = data;
            //this.data = data;
            this.selectedArticle = data;
          });
      });
  }

  ngOnInit() {
    //console.log(this.data['sources']);   
  }

  NewsOne(item){
    //sources=techcrunch
    this.newsService
      .data('top-headlines?sources=' + item.id)
      .subscribe(data => {
        console.log(data);
        //this.newsService.currentArticle = data;
        //this.data = data;
        this.selectedArticle = data;
      });
  }

  NewsDetail(article) {
    this.newsService.currentArticle = article;
    console.log(this.newsService.currentArticle);
    this.router.navigate(['/newsdetail']);
  }

}
