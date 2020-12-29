import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTrayListItemComponent } from './orders-tray-list-item.component';

describe('OrdersTrayListItemComponent', () => {
  let component: OrdersTrayListItemComponent;
  let fixture: ComponentFixture<OrdersTrayListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersTrayListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTrayListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
