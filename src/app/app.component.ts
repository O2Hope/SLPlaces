import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SLPlaces';
  lugares:any = [
    {nombre: 'pasteleria', active: true},
    {nombre: 'floreria', active: true},
    {nombre: 'veterinaria', active: false}
  ]

  constructor() {
  }

}
