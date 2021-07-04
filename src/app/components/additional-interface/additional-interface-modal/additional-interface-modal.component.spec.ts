import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInterfaceModalComponent } from './additional-interface-modal.component';

describe('AdditionalInterfaceModalComponent', () => {
  let component: AdditionalInterfaceModalComponent;
  let fixture: ComponentFixture<AdditionalInterfaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalInterfaceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInterfaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
