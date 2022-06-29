import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.list();
  }

  public list()
  {
    console.log('in comp')
    this.users = this.userService.usersSnapshot();  // fetched all users and updated in state still not getting users here in the first time but getting at second time
  }


}
