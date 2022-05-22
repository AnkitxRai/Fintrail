import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public navMenus : Array<string> = [
    'Home', 'Skills', 'About Us', 'Services'
  ]

  constructor(
    public router: Router
    ) { }

  ngOnInit(): void {
  }

}
