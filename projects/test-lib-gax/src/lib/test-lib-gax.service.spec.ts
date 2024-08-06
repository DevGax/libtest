import { TestBed } from '@angular/core/testing';

import { TestLibGaxService } from './test-lib-gax.service';

describe('TestLibGaxService', () => {
  let service: TestLibGaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLibGaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
