import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ApproximatePipe } from './pipes/approximate/approximate.pipe';



@NgModule({
  declarations: [LoaderComponent, ApproximatePipe],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, ApproximatePipe],
})
export class SharedModule { }
