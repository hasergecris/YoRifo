import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rifa',
  templateUrl: './rifa.component.html',
  styleUrls: ['./rifa.component.css'],
})

export class RifaComponent implements OnInit {
  mostrarbusquedaBoletos = false;

  constructor(private local: Location) {}

  ngOnInit(): void {}

  back() {
    this.local.back();
  } // funcion  navegacion hacia atras
}
