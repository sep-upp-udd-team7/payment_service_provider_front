import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSuccessComponent } from './bank-success.component';

describe('BankSuccessComponent', () => {
  let component: BankSuccessComponent;
  let fixture: ComponentFixture<BankSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
