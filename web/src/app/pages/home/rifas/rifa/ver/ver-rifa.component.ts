import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Servicios
import { CardRifasService, Card } from '../../../../../services/card-rifas.service';

@Component({
  selector: 'app-ver-rifa',
  templateUrl: './ver-rifa.component.html',
  styleUrls: ['./ver-rifa.component.css'],
})
export class VerRifaComponent implements OnInit {
  boton: string;
  id: string;
  Card: Card[] = [];

  constructor(
    private ruta_activa: ActivatedRoute,
    private _CardRifasService: CardRifasService
  ) {}

  ngOnInit(): void {
    this.boton = localStorage.getItem('user');
    this.Card = this._CardRifasService.getCard();
    console.log(' esta es la  data del servicio', this.Card);
  }
}
