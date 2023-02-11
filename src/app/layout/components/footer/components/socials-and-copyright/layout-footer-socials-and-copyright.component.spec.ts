import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFooterSocialsAndCopyrightComponent } from './layout-footer-socials-and-copyright.component';

describe('LayoutFooterSocialsAndCopyrightComponent', () => {
  let component: LayoutFooterSocialsAndCopyrightComponent;
  let fixture: ComponentFixture<LayoutFooterSocialsAndCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutFooterSocialsAndCopyrightComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LayoutFooterSocialsAndCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});