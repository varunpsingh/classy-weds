import { TestBed } from '@angular/core/testing';

import { ContactUsService } from './contactUs.service';

describe('ContactUsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactUsService = TestBed.get(ContactUsService);
    expect(service).toBeTruthy();
  });
});
