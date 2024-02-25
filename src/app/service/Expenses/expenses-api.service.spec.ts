import { TestBed } from '@angular/core/testing';

import { ExpensesApiService } from './expenses-api.service';

describe('ExpensesApiService', () => {
  let service: ExpensesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
