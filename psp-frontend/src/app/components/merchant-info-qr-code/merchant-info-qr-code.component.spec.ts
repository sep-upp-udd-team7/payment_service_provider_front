import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantInfoQrCodeComponent } from './merchant-info-qr-code.component';

describe('MerchantInfoQrCodeComponent', () => {
  let component: MerchantInfoQrCodeComponent;
  let fixture: ComponentFixture<MerchantInfoQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantInfoQrCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantInfoQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
