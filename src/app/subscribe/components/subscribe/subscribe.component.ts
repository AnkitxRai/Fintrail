import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { from, Observable, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
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
    const articles = this.articleService.articleSnapshot();
    console.log(articles);
    // const timeout = setTimeout(this.articleService.articleSnapshot(), 3000);
    // timer(3000).pipe((switchMap(() => this.articleService.articleSnapshot()))).subscribe((data) => { console.log('===> data', data)})
  }

}
