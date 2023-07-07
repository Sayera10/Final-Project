import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from 'src/app/services/transferencias/transferencias.service';

@Component({
  selector: 'app-detalle-transferencias',
  templateUrl: './detalle-transferencias.component.html',
  styleUrls: ['./detalle-transferencias.component.css']
})
export class DetalleTransferenciasComponent implements OnInit {
        transferencia: any= null;

        constructor(private route: ActivatedRoute, private transferenciaService: TransferenciaService){}

        ngOnInit(): void {
          const transferenciaIdString = this.route.snapshot.paramMap.get('id');
          let transferenciaId;
          if(transferenciaIdString){
            transferenciaId= parseInt(transferenciaIdString);
            console.log({transferenciaId});
            this.transferenciaService.obtenerTransferenciaPorId(transferenciaId)
            .subscribe((transferencia) =>{
              console.log({transferencia});
              this.transferencia= transferencia
            });
          }
        }
}
