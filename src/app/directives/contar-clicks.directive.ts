import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: 'a[appContarClicks]'
})
export class ContarClicksDirective {
  clickN = 0;
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, 'Numero de clicks: ', this.clickN++);
  }

  constructor() { }

}
