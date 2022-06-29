import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getAllUsers();
  }

  public getAllUsers() {  // must return observable of boolean value
    const users = this.userService.usersStateValue();
    if(!users.length){
      console.log('in guard');
      return !!this.userService.fetchUsers().subscribe();
    }
    return true;

                // ---------- OR -----------
    // this.userService.getUsers().subscribe(users => {
    //   if(!users.length){
    //     return !!this.userService.fetchUsers().subscribe();
    //   }
    // });
    // return true;
  }

}
