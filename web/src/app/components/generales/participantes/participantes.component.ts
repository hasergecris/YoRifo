import { Component } from '@angular/core';
import { Participante, ParticipantesService } from '../../../services/participantes.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css'],
})

export class ParticipantesComponent {
  participantes: Participante[] = [];

  constructor( private _ParticipanteService: ParticipantesService ) {}

  ngOnInit(): void {
    //servicio participantes
    this.participantes = this._ParticipanteService.getParticipante();
  }
}
    

