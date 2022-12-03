import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionCancelledComponent } from './subscription-cancelled.component';

describe('SubscriptionCancelledComponent', () => {
  let component: SubscriptionCancelledComponent;
  let fixture: ComponentFixture<SubscriptionCancelledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionCancelledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
