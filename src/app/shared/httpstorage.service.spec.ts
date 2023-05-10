import { TestBed } from '@angular/core/testing';

import { HttpstorageService } from './httpstorage.service';

describe('HttpstorageService', () => {
  let service: HttpstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
