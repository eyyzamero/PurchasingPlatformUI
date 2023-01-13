import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LayoutHeaderComponent } from './components/header/layout-header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutHeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    AngularSvgIconModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }