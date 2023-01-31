import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalSubscriptionCanceledComponent } from './paypal-subscription-canceled.component';

describe('PaypalSubscriptionCanceledComponent', () => {
  let component: PaypalSubscriptionCanceledComponent;
  let fixture: ComponentFixture<PaypalSubscriptionCanceledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalSubscriptionCanceledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalSubscriptionCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
