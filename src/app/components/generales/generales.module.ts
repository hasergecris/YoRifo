import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Servicios
import { CardRifasService } from '../../servicios/card-rifas.service';

//Componentes
import { CardComponent } from './card/card.component';




@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, RouterModule],
  
  providers: [CardRifasService],

  exports: [CardComponent],

})
export class GeneralesModule {}
