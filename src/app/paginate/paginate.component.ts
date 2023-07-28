import { Component } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {
  perPage: number | undefined;
  totale: number | undefined;
  next(){};
  previous(){};
}
