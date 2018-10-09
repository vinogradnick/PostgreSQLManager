import { TestBed } from '@angular/core/testing';

import { RequestLoggerService } from './request-logger.service';

describe('RequestLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestLoggerService = TestBed.get(RequestLoggerService);
    expect(service).toBeTruthy();
  });
});
