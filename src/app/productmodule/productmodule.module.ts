import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductmoduleComponent } from './productmodule.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductupdatesComponent } from './productupdates/productupdates.component';


@NgModule({
  declarations: [
    ProductmoduleComponent,
    ProductdetailsComponent,
    ProductupdatesComponent  
  
   
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductmoduleModule { }
