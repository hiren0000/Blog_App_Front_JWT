import { TestBed } from '@angular/core/testing';

import { EnDecServiceService } from './en-dec-service.service';

describe('EnDecServiceService', () => {
  let service: EnDecServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnDecServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
