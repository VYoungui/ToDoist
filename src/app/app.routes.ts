import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/sign-up/sign-up.component').then(m => m.SignUpComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)
  },

  {
    path: 'createTask',
      loadComponent: () => import('./components/add-task-modal/add-task-modal.component').then(m => m.AddTaskModalComponent)
  },

];
