import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[addNoDbClick]'
})
export class NoDbClickDirective {

  constructor() { }
  @HostListener('click',['$event'])
  clickEvent(event){
    event.srcElement.setAttribute('disabled',true);
    setTimeout(()=>{
      event.srcElement.removeAttribute('disabled');
    },3000);
  }
}
