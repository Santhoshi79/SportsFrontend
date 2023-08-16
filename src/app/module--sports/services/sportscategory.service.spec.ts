import { TestBed } from '@angular/core/testing';

import { SportscategoryService } from './sportscategory.service';

describe('SportscategoryService', () => {
  let service: SportscategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportscategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
