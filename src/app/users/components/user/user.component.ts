import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserStateService } from 'src/app/services/state/user-state.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users: User[];

  constructor(private userStateService: UserStateService) { }

  ngOnInit(): void {
    this.list();
  }

  public list()
  {
    console.log('in comp')
    this.users = this.userStateService.snapshot();
  }


}
