import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusmasterComponent } from './aboutusmaster.component';

describe('AboutusmasterComponent', () => {
  let component: AboutusmasterComponent;
  let fixture: ComponentFixture<AboutusmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
