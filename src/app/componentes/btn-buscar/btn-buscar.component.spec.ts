import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBuscarComponent } from './btn-buscar.component';

describe('BtnBuscarComponent', () => {
  let component: BtnBuscarComponent;
  let fixture: ComponentFixture<BtnBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
