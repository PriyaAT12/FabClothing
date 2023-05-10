import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusmasterComponent } from './contactusmaster.component';

describe('ContactusmasterComponent', () => {
  let component: ContactusmasterComponent;
  let fixture: ComponentFixture<ContactusmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
