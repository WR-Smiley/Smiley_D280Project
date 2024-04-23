import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { ApiintegrationService } from './apiintegration.service';


@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  info: any = {};

  constructor(private apiService: ApiintegrationService) {}

  fetchInfo(event: any) {
    this.apiService.countryData(event.target.id).subscribe((data: any) => {
      this.info = {
        ...data,
      }
    }) 
  }
}
