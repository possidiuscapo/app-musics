import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AlbumService } from "../album.service";
import { Album } from '../album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  // albumService: any;
  word : string ="";
  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter();

  constructor(
    private albumService : AlbumService
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  // ngOnInit() { }
  onSubmit(form: NgForm): void {
    // récupération des données du formulaire
    const resultats :Album[] = this.albumService.search(form.value.word);
    this.searchAlbums.emit(resultats)
  }
  onChangeEmit($event :string){
    const resultats :Album[] = this.albumService.search($event);
    this.searchAlbums.emit(resultats)

  }
}