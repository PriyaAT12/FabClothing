import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerymasterComponent } from './gallerymaster.component';

describe('GallerymasterComponent', () => {
  let component: GallerymasterComponent;
  let fixture: ComponentFixture<GallerymasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerymasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
