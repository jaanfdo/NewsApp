import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newssources',
  templateUrl: './newssources.component.html',
  styleUrls: ['./newssources.component.css']
})
export class NewssourcesComponent implements OnInit {
  data: any;
  selectedArticle: any;
  constructor(private newsService: NewsService, private router: Router, private _Avroute: ActivatedRoute) {
    this.newsService
    .sourcedata('sources')
    .subscribe(data => {
      console.log(data);
      console.log(data['sources'].slice(0, 5));
      this.data = data;
      console.log(this.data['sources'][0]); 
    });
  }

  ngOnInit() {
    const id = this._Avroute.snapshot.paramMap.get('source');
    console.log(id);
    if (id === null || id === undefined || id === '') {
        this.newsService
            .data('top-headlines?sources=' + this.data['sources'][0].id)
            .subscribe(data2 => {
              console.log(data2);
              this.selectedArticle = data2;
            });
    } else {
      this.newsService
        .data('top-headlines?sources=' + id)
        .subscribe(data => {
          console.log(data);
          this.selectedArticle = data;
        });
    }
  }

  NewsOne(item) {
    this.newsService
      .data('top-headlines?sources=' + item.id)
      .subscribe(data => {
        console.log(data);
        this.selectedArticle = data;
      });
  }

  NewsDetail(article) {
    this.newsService.currentArticle = article;
    console.log(this.newsService.currentArticle);
    this.router.navigate(['/newsdetail']);
  }

}
