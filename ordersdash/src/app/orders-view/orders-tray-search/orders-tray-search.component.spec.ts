import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTraySearchComponent } from './orders-tray-search.component';

describe('OrdersTraySearchComponent', () => {
  let component: OrdersTraySearchComponent;
  let fixture: ComponentFixture<OrdersTraySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersTraySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTraySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
