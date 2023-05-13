import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Servicios
import { CardRifasService } from '../../services/card-rifas.service';
import { ParticipantesService } from '../../services/participantes.service';

//Componentes
import { CardComponent } from './card/card.component';
import { ParticipantesComponent } from './participantes/participantes.component';

@NgModule({
  declarations: [CardComponent, ParticipantesComponent],
  imports: [CommonModule, RouterModule],

  providers: [CardRifasService, ParticipantesService],

  exports: [CardComponent, ParticipantesComponent],
})
export class GeneralesModule {}
