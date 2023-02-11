import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFooterPaymentMethodsComponent } from './layout-footer-payment-methods.component';

describe('LayoutFooterPaymentMethodsComponent', () => {
  let component: LayoutFooterPaymentMethodsComponent;
  let fixture: ComponentFixture<LayoutFooterPaymentMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutFooterPaymentMethodsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LayoutFooterPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});