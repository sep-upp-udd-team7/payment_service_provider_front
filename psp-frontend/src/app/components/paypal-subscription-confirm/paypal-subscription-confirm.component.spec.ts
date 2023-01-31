import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalSubscriptionConfirmComponent } from './paypal-subscription-confirm.component';

describe('PaypalSubscriptionConfirmComponent', () => {
  let component: PaypalSubscriptionConfirmComponent;
  let fixture: ComponentFixture<PaypalSubscriptionConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalSubscriptionConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalSubscriptionConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
