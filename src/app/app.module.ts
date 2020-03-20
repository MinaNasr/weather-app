import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherForecastModule } from './weather-forecast/weather-forecast.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherForecastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
