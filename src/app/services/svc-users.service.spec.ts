import { TestBed } from '@angular/core/testing';

import { SvcUsersService } from './svc-users.service';

describe('SvcUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvcUsersService = TestBed.get(SvcUsersService);
    expect(service).toBeTruthy();
  });
});
