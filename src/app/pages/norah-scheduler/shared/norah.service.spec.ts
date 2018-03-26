import { TestBed, inject } from '@angular/core/testing';

import { NorahService } from './norah.service';

describe('NorahService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NorahService]
    });
  });

  it('should be created', inject([NorahService], (service: NorahService) => {
    expect(service).toBeTruthy();
  }));
});
