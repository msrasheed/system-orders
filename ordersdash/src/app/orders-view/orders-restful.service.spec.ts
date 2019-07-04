import { TestBed } from '@angular/core/testing';

import { OrdersRestfulService } from './orders-restful.service';

describe('OrdersRestfulService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersRestfulService = TestBed.get(OrdersRestfulService);
    expect(service).toBeTruthy();
  });
});
