import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-rifa',
  templateUrl: './editar-rifa.component.html',
  styleUrls: ['./editar-rifa.component.css'],
})
export class EditarRifaComponent implements OnInit {
  public nBoletos: any;
  public CuentaBancaria: any;
  public tipoCuenta: any;
  public Banco: any;
  public aplMoviles: any;

  constructor() {}

  ngOnInit(): void {
    this.nBoletos = [
      {
        id: '50',
        text: '50',
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

    this.CuentaBancaria = [
      {
        id: 'Cuenta Bancaria',
        text: 'Cuenta Bancaria',
      },

      {
        id: 'Corriente',
        text: 'Corriente',
      },
    ];

    this.tipoCuenta = [
      {
        id: 'Tipo de Cuenta',
        text: 'Cuenta',
      },
      {
        id: 'Ahorro',
        text: 'Ahorro',
      },

      {
        id: 'Corriente',
        text: 'Corriente',
      },
    ];

    this.Banco = [
      {
        id: 'Entidad_bancaria',
        text: 'Entidad bancaria',
      },
      {
        id: 'Bancolombia',
        text: 'Bancolombia',
      },

      {
        id: 'Banco Caja Social',
        text: 'Banco Caja Social',
      },
      {
        id: 'Davivienda',
        text: 'Davivienda',
      },
    ];

    this.aplMoviles = [
      {
        id: 'apli Moviles',
        text: 'apli Moviles',
      },
      {
        id: 'Nequi',
        text: 'Nequi',
      },

      {
        id: 'Daviplata',
        text: 'Daviplata',
      },
      {
        id: 'movil Red',
        text: 'movil Red',
      },
    ];
  }

  pagoRegistrado() {
    Swal.fire(
      'Pago Registrado',
      'El pago ha sido registrado exitosamente',
      'success'
    );
  }
}
