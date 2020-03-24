import { Component, OnInit } from '@angular/core';
import { ForecastService } from './services/forecast.service';
import { Currently } from './models/currently';
import { Daily } from './models/daily';
import { Hourly } from './models/hourly';
import { Utils } from '../utils/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  temperatureLow: number;
  temperatureHigh: number;
  todayDate: string;
  isLoading: boolean;
  disableCelsius = false;
  disableFahrenheit = true;
  svgGroup = [];
  temperature: number;
  math: Math;
  constructor(private forecastService: ForecastService) {}
  public currentState = {} as Currently;
  public dailyState = {} as Daily;
  public hourlyState = {} as Hourly;
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.isLoading = true;
    setTimeout(() => {
      this.forecastService.getForecastDataBasedOnLocation().then(
        (data: any ) => {
          this.isLoading = false;
          console.log('data: ', data);
          this.currentState = data.currently;
          this.temperature = this.currentState.temperature;
          this.currentState.apparentTemperature = this.currentState.apparentTemperature;
          this.currentState.time = Utils.getDateAsString(Number(this.currentState.time));
          this.dailyState = data.daily;
          this.hourlyState = data.hourly;
          this.temperatureLow = this.dailyState.data[0].temperatureLow;
          this.temperatureHigh = this.dailyState.data[0].temperatureHigh;
          this.svgGroup = Utils.getSVGS(this.currentState.icon);
          console.log('svgGroup', this.svgGroup);

        }
      );

    }, 1000);
  }

  toggleTemp(type: string) {
    switch (type) {
      case 'celsuis':
        if (!this.disableCelsius) {
          this.disableCelsius = true;
          this.disableFahrenheit = false;
          console.log('current temp: ', this.currentState.temperature);
          this.temperature = Utils.convertTemp( this.currentState.temperature, 'celsuis');
          console.log('current temp 2: ', this.currentState.temperature);
          this.temperatureLow =  Utils.convertTemp( this.dailyState.data[0].temperatureLow, 'celsuis');
          this.temperatureHigh = Utils.convertTemp( this.dailyState.data[0].temperatureHigh, 'celsuis');
          this.hourlyState.data.map(record => {
            record.temperature = Utils.convertTemp(record.temperature, 'celsuis');
          });
          this.dailyState.data.map(record => {
            record.temperatureHigh = Utils.convertTemp(record.temperatureHigh, 'celsuis');
            record.temperatureLow = Utils.convertTemp(record.temperatureLow, 'celsuis');
          });
        }
        break;
      case 'fahrenheit':
        if (!this.disableFahrenheit) {
          this.disableCelsius = false;
          this.disableFahrenheit = true;
          this.temperature = Utils.convertTemp( this.temperature, 'fahrenheit');
          this.temperatureLow = Utils.convertTemp(  this.dailyState.data[0].temperatureLow, 'fahrenheit');
          this.temperatureHigh =  Utils.convertTemp( this.dailyState.data[0].temperatureHigh, 'fahrenheit');
          this.hourlyState.data.map(record => {
            record.temperature = Utils.convertTemp(record.temperature, 'fahrenheit');
          });
          this.dailyState.data.map(record => {
            record.temperatureHigh = Utils.convertTemp(record.temperatureHigh, 'fahrenheit');
            record.temperatureLow =  Utils.convertTemp(record.temperatureLow, 'fahrenheit');
          });
        }

        break;

      default:
        break;
    }
  }
}
