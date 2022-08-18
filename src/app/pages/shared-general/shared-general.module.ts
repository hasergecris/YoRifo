import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderGeneralComponent } from './header-general/header-general.component';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuGeneralComponent } from './menu-general/menu-general.component';
import { RouterModule } from '@angular/router';
import {Pagina404Component} from './pagina404/pagina404.component'

@NgModule({
  declarations: [
    FooterComponent,
    HeaderGeneralComponent,
    MenuGeneralComponent,
    Pagina404Component,
  ],
  imports: [CommonModule, NgSelect2Module, NgbModule, RouterModule],
  exports: [FooterComponent, HeaderGeneralComponent, MenuGeneralComponent],
})
export class SharedGeneralModule {}
