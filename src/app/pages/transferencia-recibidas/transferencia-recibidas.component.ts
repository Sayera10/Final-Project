import { Component } from '@angular/core';
import { transferenciaRecibidas } from 'src/app/datos/transferencias-ejemplo';
import { TransferenciaService } from 'src/app/services/transferencias/transferencias.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencia-recibidas.component.html',
  styleUrls: ['./transferencia-recibidas.component.css']
})


export class TransferenciasRecibidasComponent {
  transferencias:any[] = [];
  beneficiario: any = null; 


  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService){ }

  ngOnInit(){
    this.beneficiario = this.clienteService.leerSesion();
    if(this.beneficiario){
      this.cargarTransferencias();
    }
  }

  cargarTransferencias(){
    this.transferenciaService
    .obtenerTransferencias()
    .subscribe((transferenciasCargadas: any)=>{
      console.log(transferenciasCargadas);
      this.transferencias = transferenciasCargadas;
    });
  }
}


