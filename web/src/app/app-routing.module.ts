import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages.routing';

//Rutas
import { RouterModule, Routes } from '@angular/router';

//componentes
import { Pagina404Component } from './pages/shared-general/pagina404/pagina404.component';
import { CardComponent } from './components/generales/card/card.component';

const routes: Routes = [
  { path: '**', component: Pagina404Component },
  { path: 'CardComponent', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
