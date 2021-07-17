import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceToMockComponent } from './interface-to-mock.component';

describe('InputFormComponent', () => {
  let component: InterfaceToMockComponent;
  let fixture: ComponentFixture<InterfaceToMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterfaceToMockComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceToMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
