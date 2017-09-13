import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, nombre: 'pasteleria', active: true, detalle: 'Actualizando detalles del lugar'},
    {id: 2, plan: 'gratis', cercania: 2, distancia: 5, nombre: 'floreria', active: true, detalle: 'Actualizando detalles del lugar'},
    {id: 3, plan: 'gratis', cercania: 3, distancia: 10, nombre: 'veterinaria', active: false, detalle: 'Actualizando detalles del lugar'}
  ];
  id: number = null;
  lugar: any = {};

  constructor(private route: ActivatedRoute) {

    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarId();

  }

  buscarId() {
      return this.lugares.find((l) => l.id == this.id);
  }

  ngOnInit() {
  }

}
