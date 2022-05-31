import { TestBed } from '@angular/core/testing';

import { ReturnArrayService } from './return-array.service';

describe('ReturnArrayService', () => {
  let service: ReturnArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
