import { TestBed } from '@angular/core/testing';

import { MuseosFirebaseService } from './museos-firebase.service';

describe('MuseosFirebaseService', () => {
  let service: MuseosFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuseosFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
