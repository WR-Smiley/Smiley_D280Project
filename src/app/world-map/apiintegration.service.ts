import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiintegrationService {

  constructor(private http: HttpClient) { }

  fetch(country: string) {
    let api = `https://api.worldbank.org/v2/country/${country}?format=json`;

    return this.http.get(api);
  }

  countryData(country: string) {
    let s = new Subject();
    
    this.fetch(country).subscribe((data: any) => {
      s.next({
        countryName: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      })
    })
  
    return s.asObservable();
  }
}
