import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalElementosComponent } from './principal-elementos.component';

describe('PrincipalElementosComponent', () => {
  let component: PrincipalElementosComponent;
  let fixture: ComponentFixture<PrincipalElementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalElementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
