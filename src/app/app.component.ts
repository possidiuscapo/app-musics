import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, } from "@angular/animations";
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // //animation triggers ...
    // state('open', style({
    //   height: '100px',
    //   opacity: 1,
    //   backgroundColor: 'green'
    // })),
    // // définir l'état close de l'élément HTML
    // state('close', style({
    //   height: '100px',
    //   opacity: 0.25,
    //   backgroundColor: 'yellow'
    // })),
  ]
})


export class AppComponent {
  title = 'app-music';


}

const count = interval(1000);