import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, nombre: 'pasteleria', active: true},
    {id: 2, plan: 'gratis', cercania: 2, distancia: 5, nombre: 'floreria', active: true},
    {id: 3, plan: 'gratis', cercania: 3, distancia: 10, nombre: 'veterinaria', active: false}
    ];

  getLugares() {
    return this.lugares;
  }

  findLugares(id) {
    return this.lugares.find((l) => l.id == id);

  }

  constructor() { }

}
