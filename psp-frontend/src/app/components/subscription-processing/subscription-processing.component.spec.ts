import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionProcessingComponent } from './subscription-processing.component';

describe('SubscriptionProcessingComponent', () => {
  let component: SubscriptionProcessingComponent;
  let fixture: ComponentFixture<SubscriptionProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
