import { TestBed } from '@angular/core/testing';

import { IndexSellerService } from './index-seller.service';

describe('IndexSellerService', () => {
  let service: IndexSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
