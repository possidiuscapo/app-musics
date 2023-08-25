import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from "@angular/animations";
import { interval, map, Observable, take } from 'rxjs';

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


export class AppComponent implements OnInit {

  title = 'app-music';
  receivedText: string | undefined;
  timersIntervale!: Observable<string>
  count!: string
  constructor() { }
 
  ngOnInit(): void {
    
    this.timersIntervale = interval(1000).pipe(
      take(3600 * 12),
      map((num: number) =>{
        const hours = Math.floor(num/3600);
        const minutes = Math.floor(num/60);
        // const second = Math.floor(num/24)
        return `${this.format(hours)} h ${this.format(minutes - hours * 60)} min ${this.format(num - minutes * 60)} s`
      })
      );
    this.timersIntervale.subscribe(num =>
      this.count = num)
  }
  format(numb: number){
    return (numb<10 ? '0' : '') + numb
  }
  parentReceive($event: string){
    this.receivedText = $event;
  }
}

// const count = interval(1000).pipe(take(60))
//   .subscribe((sec) => console.log(sec));