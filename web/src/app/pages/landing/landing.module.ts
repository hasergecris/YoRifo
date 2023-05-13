import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { EnCifrasComponent } from './en-cifras/en-cifras.component';
import { EstasListoComponent } from './estas-listo/estas-listo.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HeaderComponent,
    IntroComponent,
    ComoFuncionaComponent,
    FuncionalidadesComponent,
    EnCifrasComponent,
    EstasListoComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    IntroComponent,
    ComoFuncionaComponent,
    FuncionalidadesComponent,
    EnCifrasComponent,
    EstasListoComponent,
  ],
})
export class LandingModule {}
