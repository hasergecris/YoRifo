import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgSelect2Module,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {

}
