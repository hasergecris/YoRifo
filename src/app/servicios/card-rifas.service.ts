import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardRifasService {
  private card: Card[] = [
    {
      titulo: '2303 - TELEVISOR SAMSUNG 40 PULGADAS',
      imagen: 'assets/img/ver-rifa/tele1.png',
      texto:
        'Juega el 24 de mayo con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '76',
      cantidad2: '100',
      cantidad3: '$15.000',
      estado: 'proceso',
      tipo: true,
      valor: '',
      porcentaje:''
    },
    {
      titulo: ' 1826 - CENA ROMÁNTICA PARA PARA PAREJA EN CAFÉ …',
      imagen: 'assets/img/home/velas.png',
      texto:
        'Juega el 12 de junio con los cuatro últimos de la lotería de Boyacá',
      cantidad1: '34',
      cantidad2: '150',
      cantidad3: '$5.000',
      estado: 'proceso',
      tipo: true,
      valor: '',
      porcentaje:''
    },
    {
      titulo: '3415 - PORTATIL LENOVO 14“ CORE I5',
      imagen: 'assets/img/home/portatil.png',
      texto:
        'Juega el 9 de mayo con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '70',
      cantidad2: '100',
      cantidad3: '$100.000',
      estado: 'proceso',
      tipo: true,
      valor: '',
      porcentaje:''
    },
    {
      titulo: '1826 - ESTADÍA PARA DOS EN VILLA HASBLEIDY - MELGAR …',
      imagen: 'assets/img/home/finca.png',
      texto:
        'Juega el 12 de junio con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '20',
      cantidad2: '100',
      cantidad3: '$5.000',
      estado: 'proceso',
      tipo: true,
      valor: '',
      porcentaje:''
    },
    {
      titulo: '1634 - VIAJE PARA DOS PERSONAS A SAN ANDRES',
      imagen: 'assets/img/home/viaje.png',
      texto:
        'Juega el 24 de junio con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '90',
      cantidad2: '100',
      cantidad3: '$15.000',
      estado: 'proceso',
      tipo: true,
      valor: '',
      porcentaje:''
    },
    {
      titulo: '1256 - CAMISETA SELECCIÓN COLOMBIA',
      imagen: 'assets/img/home/camisa.png',
      texto:
        'Juega el 12 de junio con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '20',
      cantidad2: '100',
      cantidad3: '$5.000',
      estado: 'finalizada',
      tipo: true,
      valor: '834.000',
      porcentaje:'65'
    },
    {
      titulo: '1103 - MALETA TOTTO<',
      imagen: 'assets/img/home/maleta.png',
      texto:
        'Juega el 12 de junio con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '90',
      cantidad2: '100',
      cantidad3: '$15.000',
      estado: 'finalizada',
      tipo: false,
      valor: '46.000',
      porcentaje:''
    },
  ];

  constructor() {
    console.log('este servicio funciona');
  }

  getCard(): Card[] {
    return this.card;
  }
}

// No deja insertar una rifa que no tenga estas caracteristicas
export interface Card {
  titulo: string;
  imagen: string;
  texto: string;
  cantidad1: string;
  cantidad2: string;
  cantidad3: string;
  estado: string;
  tipo: boolean;
  valor: string;
  porcentaje:string;
}
