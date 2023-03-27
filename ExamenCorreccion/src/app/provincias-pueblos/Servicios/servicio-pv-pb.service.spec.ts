import { TestBed } from '@angular/core/testing';

import { ServicioPvPbService } from './servicio-pv-pb.service';

describe('ServicioPvPbService', () => {
  let service: ServicioPvPbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPvPbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
