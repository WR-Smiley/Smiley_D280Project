import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Country } from './country';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [
    HttpClient, 
    HttpClientModule,
  ],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent implements OnInit {

  public rJson: any;
  public pJson: any;
  

  constructor(private http: HttpClient) {

  };

  ngOnInit(): void {

  }

  fetchInfo() {
    let rJson = JSON.stringify(this.http.get("https://api.worldbank.org/v2/country/af?format=json"));
    let pJson = JSON.parse(rJson);
    let countryName = pJson.name;
    let capital = pJson.capitalCity;
    let region= pJson.region.value;
    let income = pJson.incomeLevel.value;
  }

}
