import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInterfaceComponent } from './additional-interface.component';

describe('AdditionalInterfaceComponent', () => {
  let component: AdditionalInterfaceComponent;
  let fixture: ComponentFixture<AdditionalInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdditionalInterfaceComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
