import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTransferenciasComponent } from './detalle-transferencias.component';

describe('DetalleTransferenciasComponent', () => {
  let component: DetalleTransferenciasComponent;
  let fixture: ComponentFixture<DetalleTransferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleTransferenciasComponent]
    });
    fixture = TestBed.createComponent(DetalleTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
