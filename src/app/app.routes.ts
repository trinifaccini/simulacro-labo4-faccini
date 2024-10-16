import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: "",
    redirectTo: "Peliculas",
    pathMatch: "full"
  },
  {
    path: "Peliculas",
    loadComponent: () => import('./components/peliculas/peliculas.component').then(m => m.PeliculasComponent),
  },
  {
    path: "AltaPelicula",
    loadComponent: () => import('./components/alta-pelicula/alta-pelicula.component').then(m => m.AltaPeliculaComponent),
  },
  {
    path: "Actores",
    loadComponent: () => import('./components/actores/actores.component').then(m => m.ActoresComponent),
  },
  {
    path: "AltaActor",
    loadComponent: () => import('./components/alta-actor/alta-actor.component').then(m => m.AltaActorComponent),
  },
  
  { 
    path: '**', 
    redirectTo: "Peliculas",
  },
];


  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'landing',
  //   loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  