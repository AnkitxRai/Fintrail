import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Observable, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Article, ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  public loginForm: FormGroup;
  public articles$: Observable<Article[]>;
  countryData: Array<any> = [
    { name: 'IND', value: 'India' },
    { name: 'AUS', value: 'Australia' },
    { name: 'USA', value: 'America' },
    { name: 'RUS', value: 'Rusia' },
    { name: 'Eng', value: 'England' }
  ];
  selectedCheckbox : any [] = [];

  constructor( private articleService: ArticlesService ) { }

  ngOnInit(): void {
    // const articles = this.articleService.articleSnapshot();
    this.setupForms();
    this.updateValues();
  }

  setupForms() {
    this.loginForm = new FormGroup({
      'firstname': new FormControl(''),
      'lastname': new FormControl(''),
      'fav_language': new FormControl(''),
      'country': new FormControl(this.selectedCheckbox),
      'cars_dropdown': new FormControl(''),
      'file': new FormControl(''),
      'birthday': new FormControl(''),
    });
  }



  selectedCheckboxes(event) {
    console.log(event)
  }

  updateValues() {
    this.loginForm.valueChanges.subscribe(x => {
      console.log(x);
      this.loginForm.get("lastname").setValue(x.firstname, { emitEvent: false });
    });
  }

}
