import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import Swal from 'sweetalert2';

import * as $ from 'jQuery';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css'],
})

export class BoletosComponent implements OnInit {
  public listaParticipantes: Array<Select2OptionData>;
  public registroPago: Array<Select2OptionData>;
  public options: Options;
  public estado: any;
  mostrarFiltro = false;


  constructor() {}

  ngOnInit(): void {
    this.listaParticipantes = this.getTemplateList();
    this.options = {
      width: '300',
      templateResult: this.templateResult,
      templateSelection: this.templateResult,
    };
    this.registroPago = this.getTemplateList();
    this.options = {
      width: '300',
      templateResult: this.templateResult,
      templateSelection: this.templateResult,
    };

    this.estado = [
      {
        id: 'Estado',
        text: 'Estado',
      },
      {
        id: 'organizador',
        text: 'Organizador',
      },
      {
        id: 'participante',
        text: 'Participante',
      },
    ];
}

  // function for result template
  public templateResult = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }
    let image = '<span class="image"></span>';
    // console.log("Esta es el estado: ", state.additional.image);
    if (state.additional.image) {
      image =
        '<span class="image"><img src="' + state.additional.image + '" </span>';
    }

    return jQuery('<span>' + image + ' ' + state.text + '</span>');
  }

  getTemplateList(): any[] {
    return [
      {
        id: 'temp1',
        text: 'Carolina Beltran(carolina.beltran@gmail.com)',
        additional: {
          image: 'assets/img/home/persona1.jpg',
          winner: '1',
        },
      },
      {
        id: 'temp2',
        text: 'Rodolfo Hernandez(rudhlf872@hotmail.com)',
        additional: {
          image: 'assets/img/home/persona2.jpg',
          winner: '2',
        },
      },
      {
        id: 'temp3',
        text: 'Hugo Vega(hugo19908@gmail.com)',
        additional: {
          image: 'assets/img/home/persona3.jpg',
          winner: '3',
        },
      },
      {
        id: 'temp4',
        text: 'Dario Parra(dartpar20@hotmail.com)',
        additional: {
          image: 'assets/img/home/persona4.jpg',
          winner: '5',
        },
      },
      {
        id: 'temp5',
        text: 'Mariana Jimenez(marjim@saasland.com)',
        additional: {
          image: 'assets/img/home/persona5.jpg',
          winner: '5',
        },
      },
    ];
  }

  // tslint:disable-next-line: typedef
  separarBoleto() {
    Swal.fire({
      title: 'Boleto separado',
      text: 'Su boleto a sido separado exitosamente',
      icon: 'success',
      confirmButtonText: 'Guardar',
    });
  }

  // tslint:disable-next-line: typedef
  pagoRegistrado() {
    Swal.fire(
      'Pago Registrado',
      'El pago ha sido registrado exitosamente',
      'success'
    );
  }

  // tslint:disable-next-line: typedef
 anularSeparacion() {
     Swal.fire({
       title: '¿Estás seguro?',
       text: '¿Estás seguro que quiere anular la separación del boleto 2 a Carolina Beltrán?',
       icon: 'warning',
       cancelButtonText: 'no',
       cancelButtonColor: '#F5F6FD',
       confirmButtonColor: '#6C69F4',
       confirmButtonText: 'si',
     }).then((result) => {
       if (result.isConfirmed) {
         Swal.fire('Anulado', 'Su boleto a sido anulado con exito.', 'success');
       }
     });
  }
}
