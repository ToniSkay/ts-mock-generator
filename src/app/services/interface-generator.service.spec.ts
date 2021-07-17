import { TestBed } from '@angular/core/testing';

import { InterfaceGeneratorService } from './interface-generator.service';

describe('InterfaceGeneratorService', () => {
  let service: InterfaceGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaceGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
