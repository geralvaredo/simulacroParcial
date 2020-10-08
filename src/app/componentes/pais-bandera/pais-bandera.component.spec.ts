import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisBanderaComponent } from './pais-bandera.component';

describe('PaisBanderaComponent', () => {
  let component: PaisBanderaComponent;
  let fixture: ComponentFixture<PaisBanderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisBanderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisBanderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
