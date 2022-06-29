import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  /**
   * State value
   */
  protected userState: BehaviorSubject<User[]> = new BehaviorSubject<User[] | null>([]);

  constructor() { }

  public setUsers(users: User[]): void {
    console.log(users);
    this.userState.next(users);
  }

  public snapshot(): User[] {
    const value = this.userState.value;
    if (!value.length){
      throw new Error('state is not init yet!')
    }
    return value;
  }
}

