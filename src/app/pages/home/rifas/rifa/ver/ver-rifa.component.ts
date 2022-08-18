import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-rifa',
  templateUrl: './ver-rifa.component.html',
  styleUrls: ['./ver-rifa.component.css'],
})
export class VerRifaComponent implements OnInit {
  boton: string;
  id: string;

  constructor(private ruta_activa: ActivatedRoute) {}

  ngOnInit(): void {
    this.boton = localStorage.getItem('user');
  }
}
