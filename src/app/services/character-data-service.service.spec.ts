import { TestBed } from '@angular/core/testing';

import { CharacterDataServiceService } from './character-data-service.service';

describe('CharacterDataServiceService', () => {
  let service: CharacterDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
