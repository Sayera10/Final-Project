import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencia-recibidas/transferencia-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { NuevaTransferenciasComponent } from './nueva-transferencias/nueva-transferencias.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { DetalleTransferenciasComponent } from './detalle-transferencias/detalle-transferencias.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'transferencias-recibidas',
    component: TransferenciasRecibidasComponent,
  },
  {
    path: 'transferencias-enviadas',
    component: TransferenciasEnviadasComponent,
  },
  {
    path: 'nueva-transferencias',
    component: NuevaTransferenciasComponent,
  },
  {
    path: 'mi-cuenta',
    component: MiCuentaComponent,
  },
  {
    path: 'transferencias',
    component: TransferenciasComponent,
  },
  {
    path: 'transferencias/:id',
    component: DetalleTransferenciasComponent,
  },
  


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
