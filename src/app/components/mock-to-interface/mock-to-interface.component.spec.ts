import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockToInterfaceComponent } from './mock-to-interface.component';

describe('MockToInterfaceComponent', () => {
  let component: MockToInterfaceComponent;
  let fixture: ComponentFixture<MockToInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockToInterfaceComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockToInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
