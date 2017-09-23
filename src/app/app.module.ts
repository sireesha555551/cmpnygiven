import { RouterModule } from '@angular/router';
import { routes } from './app.router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FindComponent } from './find/find.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FindComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,routes,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
