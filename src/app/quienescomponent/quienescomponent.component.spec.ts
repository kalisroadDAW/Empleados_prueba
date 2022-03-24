import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienescomponentComponent } from './quienescomponent.component';

describe('QuienescomponentComponent', () => {
  let component: QuienescomponentComponent;
  let fixture: ComponentFixture<QuienescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienescomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
