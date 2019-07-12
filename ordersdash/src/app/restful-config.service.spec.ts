import { TestBed } from '@angular/core/testing';

import { RestfulConfigService } from './restful-config.service';

describe('RestfulConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestfulConfigService = TestBed.get(RestfulConfigService);
    expect(service).toBeTruthy();
  });
});
