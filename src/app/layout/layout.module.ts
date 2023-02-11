import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LayoutHeaderComponent } from './components/header/layout-header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutFooterComponent } from './components/footer/layout-footer.component';
import { LayoutFooterPaymentMethodsComponent } from './components/footer/components/payment-methods/layout-footer-payment-methods.component';
import { LayoutFooterSocialsAndCopyrightComponent } from './components/footer/components/socials-and-copyright/layout-footer-socials-and-copyright.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutFooterPaymentMethodsComponent,
    LayoutFooterSocialsAndCopyrightComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    AngularSvgIconModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }