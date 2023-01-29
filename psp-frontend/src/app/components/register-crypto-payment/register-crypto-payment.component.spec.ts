import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCryptoPaymentComponent } from './register-crypto-payment.component';

describe('RegisterCryptoPaymentComponent', () => {
  let component: RegisterCryptoPaymentComponent;
  let fixture: ComponentFixture<RegisterCryptoPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCryptoPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCryptoPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
