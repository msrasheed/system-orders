import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxButtComponent } from './inbox-butt.component';

describe('InboxButtComponent', () => {
  let component: InboxButtComponent;
  let fixture: ComponentFixture<InboxButtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxButtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxButtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
