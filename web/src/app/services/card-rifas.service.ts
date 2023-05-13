import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardRifasService {
  private card: Card[] = [
    {
      titulo: '2303 - TELEVISOR SAMSUNG 40 PULGADAS',
      imagen: 'assets/img/ver-rifa/tele1.png',
      descripcion:
        'TV SAMSUNG 43” Pulgadas 109 CM 43T5300 LED FHD Plano Smart TV',
      textoRifa:
        'Se rifa Smart TV Samsung de 43 pulgadas para que disfrutes de tus series y películas favoritas con tus familiares y amigos.',
      textoCondiciones:
        'Se rifa Smart TV Samsung de 43 pulgadas para que disfrutes de tus series y películas favoritas con tus familiares y amigos.',
      caracteristicasDestacadas:
        'Smart TV avanzado, cuenta con 18 aplicaciones',
      cuandoJuega:
        'Juega el 24 de junio con los cuatro últimos de la lotería de Bogotá',

      cantidad1: '76',
      cantidad2: '100',
      valor_boleto: 15.000,
      estado: 'proceso',
      tipo: true,
      porcentaje: '',
      boletos: 200,
      vendidos: 120,
      rentabilidad: 82,
      valor_ganancia: 387.000,
      valor_perdida: 1.000,
    },
    {
      titulo: ' 1826 - CENA ROMÁNTICA PARA PARA PAREJA EN CAFÉ',
      imagen: 'assets/img/home/velas.png',
      descripcion: '',
      textoRifa: '',
      textoCondiciones: '',
      caracteristicasDestacadas: '',
      cuandoJuega:
        'Juega el 12 de junio con los cuatro últimos de la lotería de Boyacá',
      cantidad1: '34',
      cantidad2: '150',
      valor_boleto: 5.0,
      estado: 'proceso',
      tipo: true,
      porcentaje: '',
      boletos: 200,
      vendidos: 120,
      rentabilidad: 82,
      valor_ganancia: 387.000,
      valor_perdida: 1.0,
    },
    {
      titulo: '3415 - PORTATIL LENOVO 14“ CORE I5',
      imagen: 'assets/img/home/portatil.png',
      descripcion: '',
      textoRifa: '',
      textoCondiciones: '',
      caracteristicasDestacadas: '',
      cuandoJuega:
        'Juega el 9 de mayo con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '70',
      cantidad2: '100',
      valor_boleto: 10.000,
      estado: 'proceso',
      tipo: true,
      porcentaje: '',
      boletos: 200,
      vendidos: 120,
      rentabilidad: 82,
      valor_ganancia: 387.000,
      valor_perdida: 1.000,
    },
    {
      titulo: '1826 - ESTADÍA PARA DOS EN VILLA HASBLEIDY - MELGAR …',
      imagen: 'assets/img/home/finca.png',
      descripcion: '',
      textoRifa: '',
      textoCondiciones: '',
      caracteristicasDestacadas: '',
      cuandoJuega:
        'Juega el 12 de junio con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '20',
      cantidad2: '100',
      valor_boleto: 5.000,
      estado: 'proceso',
      tipo: true,
      porcentaje: '',
      boletos: 200,
      vendidos: 120,
      rentabilidad: 82,
      valor_ganancia: 387.000,
      valor_perdida: 1.0,
    },
    {
      titulo: '1634 - VIAJE PARA DOS PERSONAS A SAN ANDRES',
      imagen: 'assets/img/home/viaje.png',
      descripcion: '',
      textoRifa: '',
      textoCondiciones: '',
      caracteristicasDestacadas: '',
      cuandoJuega: '',
      cantidad1: '90',
      cantidad2: '100',
      valor_boleto: 15.000,
      estado: 'proceso',
      tipo: true,
      porcentaje: '',
      boletos: 200,
      vendidos: 120,
      rentabilidad: 82,
      valor_ganancia: 187.000,
      valor_perdida: 1.000,
    },
    {
      titulo: '1256 - CAMISETA SELECCIÓN COLOMBIA',
      imagen: 'assets/img/home/camisa.png',
      descripcion: '',
      textoRifa: '',
      textoCondiciones: '',
      caracteristicasDestacadas: '',
      cuandoJuega:
        'Juega el 12 de junio con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '20',
      cantidad2: '100',
      valor_boleto: 5.000,
      estado: 'finalizada',
      tipo: true,
      valor_ganancia: 834.000,
      valor_perdida: 1.000,
      porcentaje: '65',
      boletos: 200,
      vendidos: 120,
      rentabilidad: 82,
    },

    {
      titulo: '1103 - MALETA TOTTO<',
      imagen: 'assets/img/home/maleta.png',
      descripcion: '',
      textoRifa: '',
      textoCondiciones: '',
      caracteristicasDestacadas: '',
      cuandoJuega:
        'Juega el 12 de junio con los cuatro últimos de la lotería de Bogotá',
      cantidad1: '90',
      cantidad2: '100',
      valor_boleto: 15.000,
      estado: 'finalizada',
      tipo: false,
      valor_ganancia: 834.000,
      valor_perdida: 46.000,
      porcentaje: '',
      boletos: 200,
      vendidos: 120,
      rentabilidad: 82,
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
  descripcion: string;
  textoRifa: string;
  textoCondiciones: string;
  caracteristicasDestacadas: string;
  cuandoJuega: string;
  cantidad1: string;
  cantidad2: string;
  estado: string;
  tipo: boolean;
  valor_boleto: number;
  valor_ganancia: number;
  valor_perdida: number;
  porcentaje: string;
  boletos: number;
  vendidos: number;
  rentabilidad: number;
}
