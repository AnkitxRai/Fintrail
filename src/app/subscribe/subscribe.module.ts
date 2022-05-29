import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SubscribeComponent,
  }
];

@NgModule({
  declarations: [SubscribeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscribeModule { }
