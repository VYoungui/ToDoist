import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/sign-up/sign-up.component').then(m => m.SignUpComponent)

  }
];
