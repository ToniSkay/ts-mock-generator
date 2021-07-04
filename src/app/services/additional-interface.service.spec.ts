import { TestBed } from '@angular/core/testing';

import { AdditionalInterfaceService } from './additional-interface.service';

describe('AdditionalInterfaceService', () => {
  let service: AdditionalInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
