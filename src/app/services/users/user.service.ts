import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient,
    private urlService: UrlService) { }


  public fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      this.urlService.url('users')
    );
  }

}
