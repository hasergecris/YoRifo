import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelect2Module } from 'ng-select2';
import { SharedGeneralModule } from './shared-general/shared-general.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingModule } from './landing/landing.module';
import { HomeModule } from './home/home.module';

//servicios
import { DashboardService } from '../servicios/dashboard.service';



//componentes
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [LandingComponent, LoginComponent, RegistroComponent],
  imports: [
    RouterModule,
    CommonModule,
    NgSelect2Module,
    HomeModule,
    LandingModule,
    SharedGeneralModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DashboardService],
})
export class PagesModule {}
