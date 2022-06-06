
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";
import { Ng2SearchPipeModule } from 'ng2-search-filter';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { FrogotPasswordComponent } from './frogot-password/frogot-password.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Jobcard2Component } from './jobcard2/jobcard2.component';
import { Navbar2Component } from './navbar2/navbar2.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WishlistComponent,
    LoginComponent,
    SignupComponent,
    JobcardComponent,
    ChangePasswordComponent,
    ProfileComponent,
    FrogotPasswordComponent,
    Jobcard2Component,
    Navbar2Component,

  ],
  imports: [
    //NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule

  ],
  exports:[NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

