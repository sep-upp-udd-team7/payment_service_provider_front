import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPaypalPaymentComponent } from './register-paypal-payment.component';

describe('RegisterPaypalPaymentComponent', () => {
  let component: RegisterPaypalPaymentComponent;
  let fixture: ComponentFixture<RegisterPaypalPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPaypalPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPaypalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
