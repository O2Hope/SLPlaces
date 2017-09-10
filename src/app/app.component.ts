import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SLPlaces';
  isEnabled = true;

  constructor() {
    setTimeout(() =>{
      this.isEnabled = false;
    }, 3000 )
  }

}
