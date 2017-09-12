import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'li[appContarClicks]'
})
export class ContarClicksDirective {
  clickN = 0;
  @HostBinding('style.opacity') opacity = .1;
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, 'Numero de clicks: ', this.clickN++);
    this.opacity += .1;
  }

  constructor() { }

}
