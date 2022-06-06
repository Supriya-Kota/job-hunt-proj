import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent} from './change-password/change-password.component';
import {ProfileComponent} from './profile/profile.component';
import { FrogotPasswordComponent } from './frogot-password/frogot-password.component';
import {WishlistComponent} from './wishlist/wishlist.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'profile',component:ProfileComponent},
  {path:'forgot-password',component:FrogotPasswordComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'search/:searchTerm',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
