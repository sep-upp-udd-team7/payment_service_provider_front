import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCancelComponent } from './crypto-cancel.component';

describe('CryptoCancelComponent', () => {
  let component: CryptoCancelComponent;
  let fixture: ComponentFixture<CryptoCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
