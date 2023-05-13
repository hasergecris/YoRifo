import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { CardComponent } from './card/card.component';
import { RifasComponent } from '../../pages/home/rifas/rifas.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { RIFAS_ROUTES } from 'src/app/pages/home/rifas/rifas.routes';

const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
    children: [
      {
        path: 'participante',
        component: ParticipantesComponent,
      },
     
      {
        path: 'rifas',
        component: RifasComponent,
        children: RIFAS_ROUTES,
      },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralesRoutingModule {}
