import { TestBed } from '@angular/core/testing';

import { TeccarService } from './teccar.service';

describe('TeccarService', () => {
  let service: TeccarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeccarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
