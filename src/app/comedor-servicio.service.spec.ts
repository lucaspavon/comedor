import { TestBed } from '@angular/core/testing';

import { ComedorServicioService } from './comedor-servicio.service';

describe('ComedorServicioService', () => {
  let service: ComedorServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComedorServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
