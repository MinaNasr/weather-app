import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
 @Injectable({
  providedIn: 'root'
})
export class ForecastService {
  
  constructor(private http : HttpClient) { }
  
  key = "a177f8481c31fa96c3f95ad4f4f84610";
  requestUrl="/api/forecast"

  getForecastDataBasedOnLocation(){
    return new Promise(resolve=>{
      window.navigator.geolocation.getCurrentPosition((position)=>{
        this.http.get(`${this.requestUrl}/${this.key}/${position.coords.latitude},${position.coords.longitude}`)
        .toPromise()
        .then(res=>{
         resolve(res)
        })
      })
    })
  }

}
