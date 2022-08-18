import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RifasComponent } from './rifas/rifas.component';
import { RIFAS_ROUTES } from './rifas/rifas.routes';
import { InboxComponent } from './inbox/inbox.component';
import { DashboardParticipanteComponent } from './dashboard-participante/dashboard-participante.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { 
       path: 'dashboard',
       component: DashboardComponent,
      },
      { 
        path: 'dashboard-participante',
        component: DashboardParticipanteComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent,
      },
      {
        path: 'rifas',
        component: RifasComponent,
        children: RIFAS_ROUTES,
      },
      

      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
