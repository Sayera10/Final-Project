import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-transferencias',
  templateUrl: './table-transferencias.component.html',
  styleUrls: ['./table-transferencias.component.css']
})
export class TableTransferenciasComponent {
  
   @Input() transferencias: any[] = [];
}
