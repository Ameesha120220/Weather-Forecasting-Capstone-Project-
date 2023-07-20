import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { HomePageNewComponent } from './home-page-new/home-page-new.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  {path:  '', component: HomePageNewComponent},
  {path: 'fav', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'sign', component: FavoritesPageComponent},
  {path: 'about', component: AboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
