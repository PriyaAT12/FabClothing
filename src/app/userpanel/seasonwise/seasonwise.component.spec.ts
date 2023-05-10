import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonwiseComponent } from './seasonwise.component';

describe('SeasonwiseComponent', () => {
  let component: SeasonwiseComponent;
  let fixture: ComponentFixture<SeasonwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
