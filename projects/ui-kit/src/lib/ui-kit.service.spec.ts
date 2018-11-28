import { TestBed, inject } from '@angular/core/testing';

import { UiKitService } from './ui-kit.service';

describe('UiKitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiKitService]
    });
  });

  it('should be created', inject([UiKitService], (service: UiKitService) => {
    expect(service).toBeTruthy();
  }));
});
