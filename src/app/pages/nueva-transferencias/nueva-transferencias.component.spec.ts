import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTransferenciasComponent } from './nueva-transferencias.component';

describe('NuevaTransferenciasComponent', () => {
  let component: NuevaTransferenciasComponent;
  let fixture: ComponentFixture<NuevaTransferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaTransferenciasComponent]
    });
    fixture = TestBed.createComponent(NuevaTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
