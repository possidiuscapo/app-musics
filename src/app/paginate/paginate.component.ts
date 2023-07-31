import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  //nombre totale d'albums
  totale: number = 0;
  // Numbre d'album par page (stocke dans les variables d'environments)
  perPage: number;

  numberPages: number = 0;

  pages: number[] = []

  //emetteur d'évènement 

  @Output() setPaginate: EventEmitter<{ start: number, end: number }> = new EventEmitter;

  //variable qui stock la page actuelle

  currentPage: number = 1;

  constructor(
    private albumService: AlbumService
  ) {
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

  next() {
    // this.currentPage++;
    if (this.currentPage >= this.numberPages) {
      // this.currentPage = 1
      return;
    } else {
      this.currentPage++
    }
    this.setPaginate.emit(this.setAlbums(this.currentPage))

    console.log(this.currentPage);
  };

  previous() {
    // this.currentPage--;
    if (this.currentPage <= 1) {
      // this.currentPage = 1
      return;
    } else {
      this.currentPage--
    }
    this.setPaginate.emit(this.setAlbums(this.currentPage))
    console.log(this.currentPage);
  };

  /**
   * function qui retourne le sous ensemble d'albums à afficer
   */
  setAlbums(page: number): { start: number, end: number } {
    let start = (page - 1) * this.perPage
    let end = start + this.perPage

    // return {start : start, end : start}
    return { start, end }
  }
  changePage(page: number) {
    this.currentPage = page;
    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }
}
