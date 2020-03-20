import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTempComponent } from './current-temp/current-temp.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';



@NgModule({
  declarations: [
    CurrentTempComponent,
    HourlyForecastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrentTempComponent,
    HourlyForecastComponent
  ]
})
export class WeatherForecastModule { }
