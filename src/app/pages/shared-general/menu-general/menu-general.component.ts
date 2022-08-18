import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {
 public documento: any;
  data: string;

  redireccionar() {
    const rol = localStorage.getItem('user')
    if (rol == 'participante') {
      this.router.navigate(['/home/dashboard-participante'])
    } else {
      this.router.navigate(['/home/dashboard'])
    }
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.documento = [
      {
        id: 'Cedula',
        text: 'C.C',
      },
      {
        id: 'Tarjeta de id',
        text: 'T.I',
      },
      {
        id: 'Cedula extranjeria',
        text: 'C.E',
      },

    ];

    this.data = localStorage.getItem('user');

  }

}
