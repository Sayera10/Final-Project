import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../components/tabls-transferencias/componentes.module';
import { NuevaTransferenciasComponent } from './nueva-transferencias/nueva-transferencias.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { DetalleTransferenciasComponent } from './detalle-transferencias/detalle-transferencias.component';
import { TransferenciasRecibidasComponent } from './transferencia-recibidas/transferencia-recibidas.component';



@NgModule({
  declarations: [
    TransferenciasRecibidasComponent,
    TransferenciasEnviadasComponent,
    NuevaTransferenciasComponent,
    MiCuentaComponent,
    TransferenciasComponent,
    DetalleTransferenciasComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
   ComponentesModule,
   
  ]
})
export class PagesModule { }
