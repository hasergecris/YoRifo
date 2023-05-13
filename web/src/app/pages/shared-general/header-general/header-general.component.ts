import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-general',
  templateUrl: './header-general.component.html',
  styleUrls: ['./header-general.component.css'],
})
export class HeaderGeneralComponent implements OnInit {
  public roles: any;
  public documento: any;
  mostrarBusquedaCelular = false;

  redireccionar() {
    const rol = localStorage.getItem('user');
    if (rol == 'participante') {
      this.router.navigate(['/home/dashboard-participante']);
    } else {
      this.router.navigate(['/home/dashboard']);
    }
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.roles = [
      {
        id: 'organizador',
        text: 'Organizador',
      },
      {
        id: 'participante',
        text: 'Participante',
      },
    ];

    this.documento = [
      {
        id: 'Cedula de Ciudadania',
        text: 'C.C',
      },
      {
        id: 'Cedula extranjeria',
        text: 'C.E',
      },
      {
        id: 'Pasaporte',
        text: 'PAS',
      },
      {
        id: 'Tarjeta de id',
        text: 'T.I',
      },
    ];
  }
}
