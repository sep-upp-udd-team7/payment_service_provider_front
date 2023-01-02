import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCancelComponent } from './bank-cancel.component';

describe('BankCancelComponent', () => {
  let component: BankCancelComponent;
  let fixture: ComponentFixture<BankCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
