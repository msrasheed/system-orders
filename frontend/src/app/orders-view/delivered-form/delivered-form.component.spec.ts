import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredFormComponent } from './delivered-form.component';

describe('DeliveredFormComponent', () => {
  let component: DeliveredFormComponent;
  let fixture: ComponentFixture<DeliveredFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
