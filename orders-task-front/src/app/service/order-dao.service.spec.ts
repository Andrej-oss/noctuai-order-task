import { TestBed } from '@angular/core/testing';

import { OrderDaoService } from './order-dao.service';

describe('OrderDaoService', () => {
  let service: OrderDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
