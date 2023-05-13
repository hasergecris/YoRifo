import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParticipantesService {
  private participante: Participante[] = [
    {
      
      imagen: 'assets/img/home/persona1.jpg',
      nombreParticipante: 'Carolina Beltrán',
      cantidadRifas: 8,
      cantidadInvitaciones: 10,
      idParticipante: 1,
    },
    {
      imagen: 'assets/img/home/persona2.jpg',
      nombreParticipante: 'Rodolfo Hernedez',
      cantidadRifas: 8,
      cantidadInvitaciones: 10,
      idParticipante: 2,
    },
    {
            
      imagen: 'assets/img/home/persona5.jpg',
      nombreParticipante: 'Mariana Jimenez',
      cantidadRifas: 8,
      cantidadInvitaciones: 10,
      idParticipante: 3,
    },
    {
      imagen: 'assets/img/home/persona3.jpg',
      nombreParticipante: 'Fernand0 Huertas',
      cantidadRifas: 8,
      cantidadInvitaciones: 10,
      idParticipante: 4,
    },
    {
      imagen: 'assets/img/home/persona4.jpg',
      nombreParticipante: 'Dario Parra',
      cantidadRifas: 8,
      cantidadInvitaciones: 10,
      idParticipante: 5,
    },
  ];
            

  constructor() {
    console.log('mama');
  }

  getParticipante() {
    return this.participante;
  }
}

 export interface Participante {
   imagen: string,
   nombreParticipante: string,
   cantidadRifas: number,
   cantidadInvitaciones: number,
   idParticipante: number
 }
 