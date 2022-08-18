import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RifaModule } from './rifa/rifa.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelect2Module } from 'ng-select2';

//servicios
import { CardRifasService } from '../../../servicios/card-rifas.service';

//componentes
import { RifasComponent } from './rifas.component';
import { ListarComponent } from './listar/listar.component';
import { GeneralesModule } from '../../../components/generales/generales.module';

@NgModule({
  declarations: [RifasComponent, ListarComponent],
  imports: [RouterModule, CommonModule, NgbModule, RifaModule, NgSelect2Module,GeneralesModule],

  providers: [CardRifasService],
  exports: [RifasComponent],
})
export class RifasModule {}
