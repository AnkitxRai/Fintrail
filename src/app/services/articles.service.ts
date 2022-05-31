import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

export interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  public articlesState = new BehaviorSubject<Article[]>([]); // step 1 defined new behaviorsubject articleState and its initial value is empty array ([])

  constructor( public http: HttpClient) {
  }


  /**
   *
   * @returns articles as observable
   */
  public getArticles(): Observable<Article[]> {  // step2 defined a method to get value of the state and set value of the state.
    if (this.articlesState.value.length > 0) {  //step3 if the state has already a value then return that value as an OBSERVABLE: its kind of if variable has assigned a value then return the value else assign value into it.
      return of(this.articlesState.value);
    }

    return this.http.get<Article[]>(          //step4 if state has no value then hit api req and save/set response into the state as its value.
      'https://jsonplaceholder.typicode.com/posts'
    )
    .pipe(map(articles => articles))
    .pipe(tap(articles => this.articlesState.next(articles)));
  }


}
