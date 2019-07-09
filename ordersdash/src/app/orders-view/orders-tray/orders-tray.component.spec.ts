import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTrayComponent } from './orders-tray.component';

describe('OrdersTrayComponent', () => {
  let component: OrdersTrayComponent;
  let fixture: ComponentFixture<OrdersTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
