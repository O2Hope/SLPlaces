import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SLPlaces';
  lugares: any = [
    {nombre: 'pasteleria', active: true},
    {nombre: 'floreria', active: true},
    {nombre: 'veterinaria', active: false}
  ];
  lat = 22.1473734;
  lng = -101.0106106;
  personas: any = [
    {nombre: 'Agustin', edad: 24},
    {nombre: 'Fatima', edad: 22},
    {nombre: 'Chon', edad: 3},
    {nombre: 'Cucu', edad: 2},
  ];

  constructor() {
  }

}
