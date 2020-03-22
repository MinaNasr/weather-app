import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {Utils} from '../../../utils/utils';
@Component({
  selector: 'app-detailed-forecast',
  templateUrl: './detailed-forecast.component.html',
  styleUrls: ['./detailed-forecast.component.css']
})
export class DetailedForecastComponent implements OnInit {
  @Input() hourlyState;
  @Input() dailyState;
  hideDaily: boolean = true;
  hideHourly: boolean = false;


  constructor() { }

  ngOnInit() {
    this.checkForActiveTab()
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(Object.keys(this.hourlyState).length){
      console.log('hourly : ', this.hourlyState);
      
      this.hourlyState.data.map(record=>{
        record.time =  Utils.getTimeHourly(record.time);
        record.temperature = Math.ceil(record.temperature);
        record['svgGroup']= Utils.getSVGS(record.icon);
        console.log('record: ',record['svgGroup']);
        
      })

      this.dailyState.data.map(record=>{
        record.time = Utils.getDay(record.time);
        record.temperatureHigh = Math.ceil(record.temperatureHigh);
        record.temperatureLow = Math.ceil(record.temperatureLow);
        record['svgGroup']= Utils.getSVGS(record.icon);
        console.log('record2: ',record['svgGroup']);
      })

      console.log('hour: ', this.hourlyState.data);
      
    }
  }

  toggleTemp(type){
    switch (type) {
      case 'celsuis':
        this.hourlyState.data.map(record=>{
          record.temperature = Utils.convertTemp(record.temperature, 'celsuis');
        })
        break;
    
      default:
        break;
    }
  }

  ActivateTab(state,e){
    e.preventDefault();
    switch (state) {
      case 'hourly':
       this.hideDaily = true;
       this.hideHourly = false;

        break;
      case 'daily':
        this.hideDaily = false;
       this.hideHourly = true;
    
        break;
    
      default:
        break;
    }
  }

  checkForActiveTab(){
    console.log('hash',window.location.hash);
    
    if(window.location.hash && window.location.hash=='#daily'){
      this.hideDaily = false;
      this.hideHourly = true;
    }else if((window.location.hash && window.location.hash=='#hourly') || !window.location.hash){
      this.hideDaily = true;
      this.hideHourly = false;
    }
  }



}
