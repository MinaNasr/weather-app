import { Component } from '@angular/core';
import { ForecastService } from './services/forecast.service';
import { Currently } from './models/currently';
import { Daily } from './models/daily';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperatureLow: number;
  temperatureHigh: number;
  todayDate: string;
  isLoading:boolean
  constructor(private forecastService: ForecastService){}
  public currentState = {} as Currently;
  public dailyState = {} as Daily;
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
  
          this.dailyState = data.daily;
       
          this.temperatureLow = Math.ceil(this.dailyState.data[0].temperatureLow)
          this.temperatureHigh = Math.ceil(this.dailyState.data[0].temperatureHigh);
        }
      )

    },2000)
  }
}
