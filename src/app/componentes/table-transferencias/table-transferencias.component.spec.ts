import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTransferenciasComponent } from './table-transferencias.component';

describe('TableTransferenciasComponent', () => {
  let component: TableTransferenciasComponent;
  let fixture: ComponentFixture<TableTransferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableTransferenciasComponent]
    });
    fixture = TestBed.createComponent(TableTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
