import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersModuleViewComponent } from './orders-module-view.component';

describe('OrdersModuleViewComponent', () => {
  let component: OrdersModuleViewComponent;
  let fixture: ComponentFixture<OrdersModuleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersModuleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersModuleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
