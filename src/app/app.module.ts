import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { ProductmoduleModule } from './productmodule/productmodule.module';
import { StudentComponent } from './student/student.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WildcardComponent,
    StudentComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductmoduleModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
