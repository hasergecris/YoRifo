import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, CardRifasService } from '../../../../services/card-rifas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  public activa: any;
  public juega: any;
  id: string;
  mostrarFiltro = false;
  card: Card[] = [];
  
  constructor(
    private ruta_activa: ActivatedRoute,
    private _cardService: CardRifasService
  ) {}

  ngOnInit(): void {
    this.card = this._cardService.getCard();

    this.activa = [
      {
        id: 'activa',
        text: 'activa',
      },
      {
        id: 'Desactiva',
        text: 'Desactiva',
      },
      {
        id: 'Pendiente',
        text: 'Pendiente',
      },
    ];

    this.juega = [
      {
        id: 'Juega en',
        text: 'Juega en',
      },
      {
        id: 'Loteria de Bogotá',
        text: 'Loteria de Bogotá',
      },
      {
        id: 'Loteria Cundinamarca',
        text: 'Loteria Cundinamarca',
      },
      {
        id: 'Pendiente',
        text: 'Pendiente',
      },
    ];
  }
}
