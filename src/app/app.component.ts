import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SLPlaces';
  isEnabled = false;

  constructor() {
    setTimeout(() =>{
      this.isEnabled = true;
    }, 3000 )
  }

  enviarAlerta (){
    alert('Acabas de dar click')
  }

}
