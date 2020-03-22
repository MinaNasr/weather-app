import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedForecastComponent } from './detailed-forecast/detailed-forecast.component';



@NgModule({
  declarations: [
    DetailedForecastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailedForecastComponent
  ]
})
export class WeatherForecastModule { }
