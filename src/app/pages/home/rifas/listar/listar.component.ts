import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
public activa: any;
public juega: any;
id: string;
mostrarFiltro = false;

  constructor( private ruta_activa: ActivatedRoute ) {
    
  }

  ngOnInit(): void {
    this.activa = [
      {
        id: 'activa',
        text: 'activa',
      },
      {
        id: 'Desactiva',
        text: 'Desactiva',
      },
      {
        id: 'Pendiente',
        text: 'Pendiente',
      },
    ];

    this.juega = [
      {
        id: 'Juega en',
        text: 'Juega en',
      },
      {
        id: 'Loteria de Bogotá',
        text: 'Loteria de Bogotá',
      },
      {
        id: 'Loteria Cundinamarca',
        text: 'Loteria Cundinamarca',
      },
      {
        id: 'Pendiente',
        text: 'Pendiente',
      },
    ];

 
    // console.log("hola"+ this.data);    
  }
}
