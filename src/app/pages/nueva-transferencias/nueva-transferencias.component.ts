import { Component, OnInit } from '@angular/core';
import { NuevaTransferencias } from 'src/app/datos/nueva-transferencias';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencias/transferencias.service';

@Component({
  selector: 'app-nueva-transferencias',
  templateUrl: './nueva-transferencias.component.html',
  styleUrls: ['./nueva-transferencias.component.css']
})
export class NuevaTransferenciasComponent implements OnInit {
  nuevaTransferencia: any = {
    ordenante: {
      id: null,
    },
    beneficiario: {

      id: null,
    },
    concepto: '',
    importe: 0,
  }

  ordenante: any = null;
  feedback: string = "";


  constructor(private transferenciasService: TransferenciaService,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.ordenante = this.clienteService.leerSesion();
  }

  enviarTransferencia() {
    this.nuevaTransferencia.ordenante.id = this.ordenante.id;
    this.transferenciasService
      .guardar(this.nuevaTransferencia)
      .subscribe((transferenciasGuardada: any) => {
        console.log({ transferenciasGuardada });
        this.feedback = "Transferencia enviada";
      },
        (error: any) => {
          console.log(error);
          this.feedback = "Error";
        }
      )
  }

}
