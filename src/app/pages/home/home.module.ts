import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RifasModule } from './rifas/rifas.module';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedGeneralModule } from '../shared-general/shared-general.module';

//servicios

//componentes
import { InboxComponent } from './inbox/inbox.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardParticipanteComponent } from './dashboard-participante/dashboard-participante.component';
import { CardRifasService } from '../../servicios/card-rifas.service';
import { DashboardService } from '../../servicios/dashboard.service';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    DashboardParticipanteComponent,
    InboxComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    RifasModule,
    SharedGeneralModule,
    NgSelect2Module,
    NgbModule,
  ],
  providers: [CardRifasService, DashboardService],
  exports: [],
})
export class HomeModule {}
