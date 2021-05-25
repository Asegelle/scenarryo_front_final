import { TestBed } from '@angular/core/testing';

import { MovieWebService } from './movie.webservice';

describe('MovieService', () => {
  let service: MovieWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
