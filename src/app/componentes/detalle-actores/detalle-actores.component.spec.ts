import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActoresComponent } from './detalle-actores.component';

describe('DetalleActoresComponent', () => {
  let component: DetalleActoresComponent;
  let fixture: ComponentFixture<DetalleActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
