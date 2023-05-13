import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RifasModule } from './rifas/rifas.module';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedGeneralModule } from '../shared-general/shared-general.module';
import { GeneralesModule } from 'src/app/components/generales/generales.module';

//servicios
import { CardRifasService } from '../../services/card-rifas.service';
import { ParticipantesService } from '../../services/participantes.service';

//componentes
import { InboxComponent } from './inbox/inbox.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardParticipanteComponent } from './dashboard-participante/dashboard-participante.component';




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
    GeneralesModule,
    RifasModule,
    SharedGeneralModule,
    NgSelect2Module,
    NgbModule,
  ],
  providers: [CardRifasService, ParticipantesService],
  exports: [],
})
export class HomeModule {}
