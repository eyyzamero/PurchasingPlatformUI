import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallLoaderComponent } from './components/small-loader/small-loader.component';

@NgModule({
  declarations: [
    SmallLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmallLoaderComponent
  ]
})
export class LoaderModule { }