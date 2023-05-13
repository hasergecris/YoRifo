import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-participante',
  templateUrl: './dashboard-participante.component.html',
  styleUrls: ['./dashboard-participante.component.css'],
})
export class DashboardParticipanteComponent implements OnInit {
  public cards = [
    {
      estado: 'ganador',
    },
    {
      estado: 'perdedor',
    },
    {
      estado: 'pagado',
    },
    {
      estado: 'separado',
    },
    {
      estado: 'ganador',
    },
    {
      estado: 'perdedor',
    },
    {
      estado: 'pagado',
    },
    {
      estado: 'separado',
    }
  ];

  public actualcard = 0;

  public cardsmostrar = [];

  siguiente() {
    if (this.actualcard + 4 >= this.cards.length) return;
    this.actualcard = this.actualcard + 1;
    this.cardsmostrar = this.cards.slice(this.actualcard, this.actualcard + 4);
  }
  // anterior() {
  //   if (this.actualcard == 0) return;
  //   this.actualcard = this.actualcard - 1;
  //   this.cardsmostrar = this.cards.slice(this.actualcard, this.actualcard - 4);
  // }

  constructor() {}

  ngOnInit(): void {
    this.cardsmostrar = this.cards.slice(this.actualcard, this.actualcard + 4);
  }
}
