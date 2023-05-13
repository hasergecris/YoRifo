import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  data: string;
  link: string;

  @Input() nombre;
  @Input() imagen;
  @Input() cuandoJuega;
  @Input() titulo;
  @Input() descripcion;
  @Input() textoRifa;
  @Input() textoCondiciones;
  @Input() caracteristicasDestacadas;
  @Input() estado;
  @Input() valor;
  @Input() porcentaje;
  @Input() cantidad1;
  @Input() cantidad2;
  @Input() valor_boleto;
  @Input() valor_ganancia;
  @Input() valor_perdida;
  @Input() boletos;
  @Input() vendidos;
  @Input() rentabilidad;

  constructor() {}

  ngOnInit(): void {
    this.data = localStorage.getItem('user');
    if (this.data == 'organizador') {
      this.link = '/ver';
    } else {
      this.link = '#';
    }
  }
}
