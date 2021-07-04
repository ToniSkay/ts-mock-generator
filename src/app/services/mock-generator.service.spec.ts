import { TestBed } from '@angular/core/testing';

import { MockGeneratorService } from './mock-generator.service';

describe('MockGeneratorService', () => {
  let service: MockGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
