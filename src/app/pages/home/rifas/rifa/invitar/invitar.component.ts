import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitar',
  templateUrl: './invitar.component.html',
  styleUrls: ['./invitar.component.css'],
})
export class InvitarComponent implements OnInit {
  public estado: any;
  mostrarFiltro = false;

  constructor() {}

  ngOnInit(): void {
    this.estado = [
      {
        id: 'estado',
        text: 'estado',
      },

      {
        id: '100',
        text: '100',
      },
      {
        id: '300',
        text: '300',
      },
    ];
  }
}
