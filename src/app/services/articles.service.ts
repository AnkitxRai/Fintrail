import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

export interface Article {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  // private articles$ = new BehaviorSubject<Article[]>([])

  constructor( public http: HttpClient) { }

  public getArticles(): Observable<any> {
    return this.http.get<any>('assets/articles.json').pipe(
      map((data) => data),
      catchError((error) => (error))
    );
  }


}
