import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { ProductmoduleComponent } from './productmodule/productmodule.component';
import { ProductdetailsComponent } from './productmodule/productdetails/productdetails.component';
import { ProductupdatesComponent } from './productmodule/productupdates/productupdates.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:'productmodule',
    component:ProductmoduleComponent,
    children:[
      {
        path:'productdetails',component:ProductdetailsComponent
      },
      {
        path:'productupdates',component:ProductupdatesComponent
      }
    ]
  },
  {
    path: '**',
    component: WildcardComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
