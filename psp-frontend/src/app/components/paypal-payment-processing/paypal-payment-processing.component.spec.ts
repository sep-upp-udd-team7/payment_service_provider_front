import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalPaymentProcessingComponent } from './paypal-payment-processing.component';

describe('PaypalPaymentProcessingComponent', () => {
  let component: PaypalPaymentProcessingComponent;
  let fixture: ComponentFixture<PaypalPaymentProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalPaymentProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalPaymentProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
