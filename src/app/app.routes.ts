import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/sign-up/sign-up.component').then(m => m.SignUpComponent)
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./pages/sign-in/sign-in.component').then(m => m.SignInComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)
  },
];
