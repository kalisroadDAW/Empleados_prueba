import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactocomponentComponent } from './contactocomponent.component';

describe('ContactocomponentComponent', () => {
  let component: ContactocomponentComponent;
  let fixture: ComponentFixture<ContactocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
