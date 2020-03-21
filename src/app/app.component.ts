import { Component } from '@angular/core';
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
export class AppComponent {
  temperatureLow: number;
  temperatureHigh: number;
  todayDate: string;
  isLoading:boolean;
  disableCelsius = false;
  disableFahrenheit = true;
  constructor(private forecastService: ForecastService){}
  public currentState = {} as Currently;
  public dailyState = {} as Daily;
  public hourlyState = {} as Hourly;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = true;
    setTimeout(()=>{
      this.forecastService.getForecastDataBasedOnLocation().then(
        (data:any)=>{
          this.isLoading = false;
          console.log('data: ', data);
          this.currentState = data.currently;
          this.currentState.temperature = Math.ceil(this.currentState.temperature)
          this.currentState.apparentTemperature = Math.ceil(this.currentState.apparentTemperature)
          this.currentState.time = Utils.getDateAsString(this.currentState.time);
          this.dailyState = data.daily;
          this.hourlyState = data.hourly;
       
          this.temperatureLow = Math.ceil(this.dailyState.data[0].temperatureLow)
          this.temperatureHigh = Math.ceil(this.dailyState.data[0].temperatureHigh);
        }
      )

    },2000)
  }

  toggleTemp(type){
    switch (type) {
      case 'celsuis':
        this.disableCelsius = true;
        this.disableFahrenheit = false
        this.currentState.temperature =  Utils.convertTemp( this.currentState.temperature, 'celsuis');
        this.temperatureLow =  Utils.convertTemp( this.temperatureLow, 'celsuis');
        this.temperatureHigh =  Utils.convertTemp( this.temperatureHigh, 'celsuis');
        this.hourlyState.data.map(record=>{
          record.temperature = Utils.convertTemp(record.temperature, 'celsuis');
        })
        this.dailyState.data.map(record=>{
          record.temperatureHigh = Utils.convertTemp(record.temperatureHigh,'celsuis');
          record.temperatureLow = Utils.convertTemp(record.temperatureLow,'celsuis');
        })
        break;
      case 'fahrenheit':
        this.disableCelsius = false;
        this.disableFahrenheit = true;
        this.currentState.temperature =  Utils.convertTemp( this.currentState.temperature, 'fahrenheit');
        this.temperatureLow =  Utils.convertTemp( this.temperatureLow, 'fahrenheit');
        this.temperatureHigh =  Utils.convertTemp( this.temperatureHigh, 'fahrenheit');
        this.hourlyState.data.map(record=>{
          record.temperature = Utils.convertTemp(record.temperature, 'fahrenheit');
        })
        this.dailyState.data.map(record=>{
          record.temperatureHigh = Utils.convertTemp(record.temperatureHigh,'fahrenheit');
          record.temperatureLow = Utils.convertTemp(record.temperatureLow,'fahrenheit');
        })
        break;
    
      default:
        break;
    }
  }
}
