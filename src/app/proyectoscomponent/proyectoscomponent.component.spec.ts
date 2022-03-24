import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoscomponentComponent } from './proyectoscomponent.component';

describe('ProyectoscomponentComponent', () => {
  let component: ProyectoscomponentComponent;
  let fixture: ComponentFixture<ProyectoscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
