import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonwisemasterComponent } from './seasonwisemaster.component';

describe('SeasonwisemasterComponent', () => {
  let component: SeasonwisemasterComponent;
  let fixture: ComponentFixture<SeasonwisemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonwisemasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonwisemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
