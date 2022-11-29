import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalPaymentCancelledComponent } from './paypal-payment-cancelled.component';

describe('PaypalPaymentCancelledComponent', () => {
  let component: PaypalPaymentCancelledComponent;
  let fixture: ComponentFixture<PaypalPaymentCancelledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalPaymentCancelledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalPaymentCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
