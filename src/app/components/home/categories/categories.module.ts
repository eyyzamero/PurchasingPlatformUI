import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    TranslateModule.forChild()
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }