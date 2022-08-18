import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeRoutingModule } from './home/home.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },



  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeRoutingModule,
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
