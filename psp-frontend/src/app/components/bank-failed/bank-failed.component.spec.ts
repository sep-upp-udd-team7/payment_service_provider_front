import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankFailedComponent } from './bank-failed.component';

describe('BankFailedComponent', () => {
  let component: BankFailedComponent;
  let fixture: ComponentFixture<BankFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
