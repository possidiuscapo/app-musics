import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit{
  //nombre totale d'albums
  totale: number = 0;
  // Numbre d'album par page (stocke dans les variables d'environments)
  perPage: number ;

  numberPages :number = 0;

  pages :number[] =[]
  constructor(
    private albumService : AlbumService
  ){
    this.perPage = this.albumService.paginateNumberPage();
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.totale = this.albumService.count()
    this.numberPages = Math.ceil(this.totale / this.perPage)
    for (let i = 1; i <= this.numberPages; i++) {
       this.pages.push(i); 
    }
  }

  next(){};
  previous(){};
}
