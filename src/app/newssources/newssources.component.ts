import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-newssources',
  templateUrl: './newssources.component.html',
  styleUrls: ['./newssources.component.css']
})
export class NewssourcesComponent implements OnInit {
  data: any;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService
      .sourcedata('sources')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

}
