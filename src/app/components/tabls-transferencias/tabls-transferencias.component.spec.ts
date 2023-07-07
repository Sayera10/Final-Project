import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablsTransferenciasComponent } from './tabls-transferencias.component';

describe('TablsTransferenciasComponent', () => {
  let component: TablsTransferenciasComponent;
  let fixture: ComponentFixture<TablsTransferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablsTransferenciasComponent]
    });
    fixture = TestBed.createComponent(TablsTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
