import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserStateService } from 'src/app/services/state/user-state.service';
import { UserService } from 'src/app/services/users/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private userStateService: UserStateService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return from(of([]))
    .pipe(switchMap(() =>
      this.userService.fetchUsers())  // call apis in the guard that are 100% required to the state at init time. ( to provide bare minimum data to the state )
    )
    .pipe(tap((users) => this.userStateService.init(users)))
    .pipe(map((users) => users.length > 0));
  }
}
