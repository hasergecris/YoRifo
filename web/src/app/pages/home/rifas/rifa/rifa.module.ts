import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RifaComponent } from './rifa.component';
import { RouterModule } from '@angular/router';
import { VerRifaComponent } from './ver/ver-rifa.component';
import { BoletosComponent } from './boletos/boletos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarRifaComponent } from './editar/editar-rifa/editar-rifa.component';
import { InvitarComponent } from './invitar/invitar.component';
import { NgSelect2Module } from 'ng-select2';



@NgModule({
  declarations: [
    RifaComponent,
    VerRifaComponent,
    BoletosComponent,
    EditarRifaComponent,
    InvitarComponent,

  ],
  imports: [
    RouterModule,
    NgbModule,
    NgSelect2Module,
    CommonModule,
  ]
})
export class RifaModule { }
