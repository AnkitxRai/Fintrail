import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { OurServicesComponent } from './our-services/our-services/our-services.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ContentComponent } from './content/content/content.component';
import { AboutComponent } from './about/about/about.component';
import { FooterComponent } from './footer/footer/footer.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    OurServicesComponent,
    NavbarComponent,
    ContactComponent,
    ContentComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class DashboardModule { }
