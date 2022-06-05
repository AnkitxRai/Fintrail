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
    this.init();   // MOVE IT INTO THE ROUTE GUARD
  }

  public init() { // YOU CAN CALL THIS FN FROM ROUTE GUARDS AS OF NOW CALLING IT FROM CONSTRUCTOR
    return this.getArticles().subscribe();
  }

  /**
   *
   * @returns articles as observable
   */
  public getArticles(): Observable<Article[]> {  // step2 defined a method to get value of the state and set value of the state.
    return this.http.get<Article[]>(          //step4 if state has no value then hit api req and save/set response into the state as its value.
      'https://jsonplaceholder.typicode.com/posts'
    )
    .pipe(map(articles => articles))
    .pipe(tap(articles => {
      this.articlesState.next(articles)
    }));
  }

  public articleSnapshot(): Article[] {  // SnapShot of the state
    const value = this.articlesState.value;
    if (!value.length) {
      throw new Error('Value not yet initialized');
    }
    return value;
  }


  public getArticleForUserId1() {

    // console.log(this.articleSnapshot());
    // return this.snapshot().dropdownFields.logActivities
    // .filter((logActivity) => logActivity.log_activity_group_id === parseFloat(activityType))

    // return this.articleSnapshot().filter((x) => x.userId === 1)
  }


}
