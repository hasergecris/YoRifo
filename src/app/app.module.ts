import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelect2Module } from 'ng-select2';
import { PagesModule } from './pages/pages.module';
import { GeneralesModule } from './components/generales/generales.module';
import { ReactiveFormsModule } from '@angular/forms';

//Servicios



// componentes
import { AppComponent } from './app.component';
import { DashboardService } from './servicios/dashboard.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgSelect2Module,
    NgbModule,
    PagesModule,
    GeneralesModule,
    ReactiveFormsModule,
  ],
  providers: [ DashboardService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
