import { Routes} from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { RifaComponent } from './rifa/rifa.component';

import { RIFA_ROUTES } from './rifa/rifa.routes';

export const RIFAS_ROUTES: Routes = [
  {
    path: 'rifa', 
    component: RifaComponent,
    children: RIFA_ROUTES,
  },
  { path: 'listar', component: ListarComponent},
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
];
