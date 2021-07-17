import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockInputComponent } from './mock-input.component';

describe('MockInputComponent', () => {
  let component: MockInputComponent;
  let fixture: ComponentFixture<MockInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockInputComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
