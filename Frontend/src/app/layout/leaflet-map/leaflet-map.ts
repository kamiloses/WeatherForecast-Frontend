import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.html',
  styleUrls: ['./leaflet-map.css']
})
export class LeafletMap implements OnInit {

  private map!: L.Map;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [20, 0],
      zoom: 2,
      minZoom: 2
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
      minZoom: 2
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      console.log(`Coordinates: Latitude = ${lat}, Longitude = ${lng}`);


      this.router.navigate([], {
        queryParams: { latitude: lat, longitude: lng },
        queryParamsHandling: 'merge',
      });

      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&email=kamil.kurzaj04@gmail.com`)
        .then(res => res.json())
        .then(data => {
          const road = data.address?.road ?? 'No street found at this location';
          console.log(`Street: ${road}`);
          console.log('Full address:', data.display_name);

          L.popup()
            .setLatLng([lat, lng])
            .setContent(`<b>Address:</b><br>${data.display_name}`)
            .openOn(this.map);
        })
        .catch(err => {
          console.error('Error fetching address:', err);
        });
    });

  }
}
