import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FindComponent } from './find/find.component';
import { HeaderComponent } from './header/header.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
export const router:Routes=[
    
    {path:'',redirectTo:"header",pathMatch:"full"},
    {path:'header',component:HeaderComponent,children:[
        {path:'',redirectTo:"home",pathMatch:"full"},
        {path:'home',component:HomeComponent},
        {path:'signin',component:SigninComponent},
    {path:'FindRentalProperties',component:FindComponent},
     {path:'signup',component:SignupComponent}
        
    

    ]}
   
]
export const routes:ModuleWithProviders=RouterModule.forRoot(router);
