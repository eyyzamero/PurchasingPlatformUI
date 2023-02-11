import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoriesModule } from './categories/categories.module';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    CategoriesModule,
    TranslateModule.forChild(),
    HomeRoutingModule
  ]
})
export class HomeModule { }