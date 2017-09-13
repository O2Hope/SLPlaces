import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'SLPlaces';
  lugares: any = [
    {plan: 'pagado', cercania: 1, distancia: 1, nombre: 'pasteleria', active: true},
    {plan: 'gratis', cercania: 2, distancia: 5, nombre: 'floreria', active: true},
    {plan: 'gratis', cercania: 3, distancia: 10, nombre: 'veterinaria', active: false}
  ];
  lat = 22.1473734;
  lng = -101.0106106;
  personas: any = [
    {nombre: 'Agustin', edad: 24},
    {nombre: 'Fatima', edad: 22},
    {nombre: 'Chon', edad: 3},
    {nombre: 'Cucu', edad: 2},
  ];

  constructor() { }

  ngOnInit() {
  }

}
