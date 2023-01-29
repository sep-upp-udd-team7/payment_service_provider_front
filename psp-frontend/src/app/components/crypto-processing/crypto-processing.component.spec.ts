import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoProcessingComponent } from './crypto-processing.component';

describe('CryptoProcessingComponent', () => {
  let component: CryptoProcessingComponent;
  let fixture: ComponentFixture<CryptoProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
