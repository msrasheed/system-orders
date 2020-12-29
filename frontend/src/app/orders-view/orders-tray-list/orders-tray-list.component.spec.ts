import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTrayListComponent } from './orders-tray-list.component';

describe('OrdersTrayListComponent', () => {
  let component: OrdersTrayListComponent;
  let fixture: ComponentFixture<OrdersTrayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersTrayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTrayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
