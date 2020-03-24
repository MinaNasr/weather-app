import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedForecastComponent } from './detailed-forecast/detailed-forecast.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DetailedForecastComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DetailedForecastComponent,
    SharedModule
  ]
})
export class WeatherForecastModule { }
