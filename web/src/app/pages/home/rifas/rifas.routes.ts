import { Routes} from '@angular/router';
import { CardComponent } from 'src/app/components/generales/card/card.component';
import { ParticipantesComponent } from 'src/app/components/generales/participantes/participantes.component';
import { ListarComponent } from './listar/listar.component';
import { RifaComponent } from './rifa/rifa.component';

import { RIFA_ROUTES } from './rifa/rifa.routes';

export const RIFAS_ROUTES: Routes = [
  {
    path: 'rifa',
    component: RifaComponent,
    children: RIFA_ROUTES,
  },
  { path: 'listar', component: ListarComponent },
  { path: 'card', component: CardComponent },
  { path: 'participante', component: ParticipantesComponent },

  { path: '', redirectTo: 'listar', pathMatch: 'full' },
];
