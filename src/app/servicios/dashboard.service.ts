import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  //servicio de TopRifas
  private top: Tops[] = [
    {
      imagen:  'assets/img/home/televisor.png',
      descripcion: '2303 - TELEVISOR SAMSUNG 40 PULGADAS',
      boletos: 200,
      vendidos: 120,
      rentabilidad: 82,
      valor: '387.000'
    }
  ]

  getTop(): Tops[] {
    return this.top;
  }

  constructor() { 
    console.log('mamá estoy triunfando');
  }

}

export interface Tops {
  imagen: string;
  descripcion: string;
  boletos: number;
  vendidos: number;
  rentabilidad: number;
  valor: string;

}
