import { Component, OnInit } from '@angular/core';
import { CardRifasService, Card } from '../../../servicios/card-rifas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  card: Card[] = [];
  data: string;
  link: string;

  constructor(private _cardService: CardRifasService) {
    console.log('hola');
  }

  ngOnInit(): void {
    this.card = this._cardService.getCard();
    console.log(this.card);
    this.data = localStorage.getItem('user');
     if (this.data == 'organizador') {
      this.link = "/ver";
     } else {
      this.link = "#"
     }
  }

  
 

}
