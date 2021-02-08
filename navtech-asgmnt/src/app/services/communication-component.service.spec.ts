import { TestBed } from '@angular/core/testing';

import { CommunicationComponentService } from './communication-component.service';

describe('CommunicationComponentService', () => {
  let service: CommunicationComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
