import { TestBed, inject } from '@angular/core/testing';

import { ApitesterService } from './apitester.service';

describe('ApitesterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApitesterService]
    });
  });

  it('should be created', inject([ApitesterService], (service: ApitesterService) => {
    expect(service).toBeTruthy();
  }));
});
