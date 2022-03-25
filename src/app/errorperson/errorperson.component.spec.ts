import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpersonComponent } from './errorperson.component';

describe('ErrorpersonComponent', () => {
  let component: ErrorpersonComponent;
  let fixture: ComponentFixture<ErrorpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
