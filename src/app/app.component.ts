import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, } from "@angular/animations";
import { interval, map, Observable, take } from "rxjs";
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
  receivedText: string | undefined;
  timerObservable!: Observable<string>;
  // !: opérateur de confiance | opérateur d'affirmation de non nullité,
  count!: string;


  constructor() {
  }

  ngOnInit(): void {
    this.timerObservable = interval(1000).pipe(
      take(3600 * 12),

      map((num: number) => {
        const hours = Math.floor(num / 3600);
        const minutes = Math.floor(num / 60);
        return `Time: ${this.format(hours)} h ${this.format(minutes - hours * 60)} min ${this.format(num - minutes * 60)} s`;
      })
    );
    this.timerObservable.subscribe(time => {
      this.count = time;
    });
  }
  format(num: number): string {
    return (num < 10 ? '0' : '') + num;
  }

  parentReceive($event: string) {
    this.receivedText = $event;
  }


}
