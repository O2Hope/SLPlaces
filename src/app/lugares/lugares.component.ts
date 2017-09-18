import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'SLPlaces';
  lat = 22.1473734;
  lng = -101.0106106;
  personas: any = [
    {nombre: 'Agustin', edad: 24},
    {nombre: 'Fatima', edad: 22},
    {nombre: 'Chon', edad: 3},
    {nombre: 'Cucu', edad: 2},
  ];

  lugares = null;

  constructor(private lugaresService: LugaresService) {
    this.lugares = this.lugaresService.getLugares();
  }

  ngOnInit() {
  }

}
