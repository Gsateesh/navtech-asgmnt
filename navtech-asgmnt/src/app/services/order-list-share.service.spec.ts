import { TestBed } from '@angular/core/testing';

import { OrderListShareService } from './order-list-share.service';

describe('OrderListShareService', () => {
  let service: OrderListShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderListShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
