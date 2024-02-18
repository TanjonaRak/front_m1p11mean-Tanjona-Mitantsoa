import { TestBed } from '@angular/core/testing';

import { PreferenceApiService } from './preference-api.service';

describe('PreferenceApiService', () => {
  let service: PreferenceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferenceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
