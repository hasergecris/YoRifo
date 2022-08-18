import { Routes} from '@angular/router';
import { BoletosComponent } from './boletos/boletos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { VerRifaComponent } from './ver/ver-rifa.component';
import { InvitarComponent } from './invitar/invitar.component';
import { EditarRifaComponent } from './editar/editar-rifa/editar-rifa.component';


export const RIFA_ROUTES: Routes = [

  { path: 'ver', component: VerRifaComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'boletos', component: BoletosComponent },
  { path: 'invitar', component: InvitarComponent },
  { path: 'editar', component: EditarRifaComponent },

  { path: '', redirectTo: 'ver', pathMatch: 'full' },
];