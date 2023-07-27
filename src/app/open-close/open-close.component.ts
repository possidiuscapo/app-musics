import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, } from "@angular/animations";
import { fadeInAnimation } from '../animation.module';


@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations:[fadeInAnimation,
    trigger('openClose', [
      state("open",style({
        border: '5px solid green'
      })),
      state("close",style({
        border: '5px solid red'
      })),
      transition('open => close', animate('1s')),
      transition('close => open', animate('1s')),
    ]), 
  ]
})
export class OpenCloseComponent {
  isOpen : boolean = true;
   toggle(){
    this.isOpen = !this.isOpen;
   }
}

