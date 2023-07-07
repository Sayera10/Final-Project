import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaRecibidasComponent } from './transferencia-recibidas.component';

describe('TransferenciaRecibidasComponent', () => {
  let component: TransferenciaRecibidasComponent;
  let fixture: ComponentFixture<TransferenciaRecibidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferenciaRecibidasComponent]
    });
    fixture = TestBed.createComponent(TransferenciaRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
