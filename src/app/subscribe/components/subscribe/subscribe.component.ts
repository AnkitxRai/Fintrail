import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  public articles$: Observable<Article[]>;

  constructor( private articleService: ArticlesService ) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((x) => {
      console.log(x);
    })
  }

}
