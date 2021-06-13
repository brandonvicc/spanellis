import { Component, OnInit } from '@angular/core';
import 'mapbox-gl/dist/mapbox-gl.css';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  mapboxgl: any;
  map:any;
  
  

  constructor() {}

  ngOnInit(): void {
    this.mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbnY5MyIsImEiOiJja29hYXAxMjMxdnp2MndydzJvYjE0cHA5In0.aEDmFfq19PDZAfoAWfuc5A';

    this.map = new this.mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }

}
