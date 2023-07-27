import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, } from "@angular/animations";


@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations:[
    trigger('openClose', [
      state("open",style({
        border: '2px solid green'
      })),
      state("close",style({
        border: '2px solid red'
      })),
      transition('open => close', animate('1s')),
      transition('close => open', animate('1s')),
    ])
  ]
})
export class OpenCloseComponent {
  isOpen : boolean = true;
   toggle(){
    this.isOpen = true;
   }
}
