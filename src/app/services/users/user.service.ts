import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * State value
   */
  protected userState: BehaviorSubject<User[]> = new BehaviorSubject<User[] | null>([]);

  constructor(public http: HttpClient) { }


  public getUsers() {
    return this.userState.asObservable();
  }

  public fetchUsers() {
    return this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    )
    .pipe(map(users => users))
    .pipe(tap(users => {
      this.userState.next(users) // updating state with users data
    }));
  }

  public setUsers(user: User[]): void {
    this.userState.next(user);
  }

  public usersSnapshot(): User[] {
    const users = this.userState.value;
    if (!users.length){
      throw new Error('Users not mapped')
    }
    return users;
  }

  public usersStateValue()
  {
    return this.userState.value;
  }

}
