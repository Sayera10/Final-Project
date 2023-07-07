import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablsTransferenciasComponent } from './tabls-transferencias.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TablsTransferenciasComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    TablsTransferenciasComponent,
  ] 
})
export class ComponentesModule { }
