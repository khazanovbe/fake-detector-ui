import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/services/api.service';

const API_KEY = 'fcb96cacf9ff42f0960f5b54be6724ae';

interface ISource{
  id: string|null,
  name: string
}

interface INews{
  source: ISource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
  isTrue?:boolean,
  detected?:boolean
};

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})


export class NewsComponent implements OnInit {
  category = new FormControl();
  news!:INews[];
  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  constructor(private http:HttpClient,private api:ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.get<{articles:INews[]}>(`https://newsapi.org/v2/top-headlines?category=${this.category.value}&language=en&apiKey=${API_KEY}`).subscribe((response:{articles:INews[]})=>{
      this.news = response.articles;
    });
  }

  onDetectNews(content:string,index:number){
    this.api.detect(content).subscribe((val:{isTrue:boolean})=>{
      this.news[index].isTrue = val.isTrue;
      this.news[index].detected = true;
    });
  }

  goTolink(url:string){
    window.open(url,'_blank');
  }
}
