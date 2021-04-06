import { Component, NgModule } from '@angular/core';
import { AngularFireAuthGuard,redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';


const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(['signin']);
const redirectSignedInToHome = () => redirectLoggedInTo(['']);
const routes: Routes = [
  { path: 'signin', 
    component: SigninComponent,        
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe: redirectSignedInToHome }
  },
  {
    path: 'signup',
    component:SignupComponent,
  },
  {
    path: '',
    component:HomeComponent,
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe: redirectUnauthorizedToSignIn }
  },
  {
    path: '**',
    component:PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
