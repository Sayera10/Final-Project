import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabls-transferencias',
  templateUrl: './tabls-transferencias.component.html',
  styleUrls: ['./tabls-transferencias.component.css']
})
export class TablsTransferenciasComponent {
   @Input() transferencias: any[]= [];
}
