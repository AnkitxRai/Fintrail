import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';

export interface UserState {
  users: User[] | null;
  posts: Post[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  /**
   * State value
   */
  protected userState: BehaviorSubject<UserState> = new BehaviorSubject<UserState | null>(null);

  constructor() { }

  public init(users: User[]) {
    this.userState.next(
    {
      users: users, // its a bare minimum value required so we are fetching users from guard and updating into the state.
      posts: []   // step 1 for now keeping it null as its not a bare minimum value
    }
    );
  }

  public setUsers(users: User[]): void {
    const state = this.snapshot();
    state.users = users;

    this.userState.next(state);
  }

  public setPosts(posts: Post[]) {   // if want to update posts inside this state then call the posts service in any component then update its value into state through this method.
    const state = this.snapshot();
    state.posts = posts;
    this.userState.next(state);
  }

  public snapshot(): UserState {
    const value = this.userState.value;
    if (!value){
      throw new Error('state is not init yet!')
    }
    return value;
  }


}

