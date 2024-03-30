import { TestBed } from '@angular/core/testing';

import { IndexCustomerService } from './index-customer.service';

describe('IndexCustomerService', () => {
  let service: IndexCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
